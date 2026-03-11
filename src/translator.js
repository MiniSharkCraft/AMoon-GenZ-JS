const jsDict   = require('./dictionaries/js');
const htmlDict = require('./dictionaries/html');
const cssDict  = require('./dictionaries/css');

// ============================================================
// 🌙 AMoon Translator Core
// Biên dịch viên giữa thế giới GenZ và thế giới máy tính
// ============================================================

/**
 * Hàm dịch ma thuật của AMoon 🌙
 * Chiến lược: thằng dài hơn được dịch trước
 * Lý do: tránh 'đi_chợ' bị dịch thành 'fetch' trước khi
 *         'đi_chợ_về_nhà' kịp được nhận diện
 *
 * @param {string} code - Code GenZ gốc cần dịch
 * @param {Array}  dictionary - Từ điển tương ứng với loại file
 * @param {string} type - Loại file: 'js' | 'html' | 'css'
 * @returns {string} Code đã dịch sang ngôn ngữ máy tính
 */
function translate(code, dictionary, type) {
    if (!code || typeof code !== 'string') return '';

    let result = code;

    // === BƯỚC 1: Sắp xếp thứ tự ưu tiên ===
    // Thằng nào dài hơn dịch trước - tránh prefix collision
    // VD: 'đợi_tất_cả_kể_cả_fail' phải được check trước 'đợi_tất_cả'
    const sorted = [...dictionary].sort((a, b) => b.genz.length - a.genz.length);

    // === BƯỚC 2: Đánh dấu tạm - tránh double-replace ===
    // Trick: thay thế bằng placeholder trước, sau đó thay thật
    // Giải thích: nếu 'foo' dịch thành 'bar' và 'bar' cũng có trong dict
    //             thì sẽ bị dịch lần 2 = tai nạn giao thông
    const placeholders = new Map();
    let   counter      = 0;

    sorted.forEach(item => {
        const escapedGenz = item.genz.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Chỉ match từ khóa đứng độc lập hoặc theo context phù hợp
        // Dùng word boundary \b nếu là ký tự word, không thì match tự do
        let regex;
        try {
            // Thử dùng word boundary trước
            regex = new RegExp(`(?<![\\w_])${escapedGenz}(?![\\w_])`, 'g');
        } catch {
            // Fallback: match thẳng nếu regex phức tạp quá
            regex = new RegExp(escapedGenz, 'g');
        }

        if (regex.test(result)) {
            const placeholder = `__AMOON_PLACEHOLDER_${counter}__`;
            placeholders.set(placeholder, item.js);
            result = result.replace(regex, placeholder);
            counter++;
        }
    });

    // === BƯỚC 3: Đổi placeholder về giá trị thật ===
    placeholders.forEach((value, key) => {
        result = result.split(key).join(value); // split+join = replaceAll an toàn
    });

    // === BƯỚC 4: Polyfill injection cho môi trường Node.js ===
    // Đảm bảo fetch tồn tại vì Node < 18 chưa có built-in fetch
    if (type === 'js' && result.includes('fetch')) {
        const polyfill = `/* 🌙 AMoon Polyfill - Bảo hiểm cho CEO chạy Node cũ */
if (typeof fetch === 'undefined') {
    try { global.fetch = require('node-fetch'); } catch (_e) {
        // autoInstall trong bin.js sẽ lo cái này, chill đi
    }
}

`;
        result = polyfill + result;
    }

    // === BƯỚC 5: Inject charset hint cho HTML ===
    if (type === 'html' && !result.includes('charset')) {
        // Nhắc nhở lịch sự, không bắt buộc
        const hint = `<!-- 🌙 AMoon hint: Nhớ thêm <meta charset="UTF-8"> vào <head> nhé! -->\n`;
        result = hint + result;
    }

    return result;
}

// ============================================================
// 📊 DEBUG HELPER - Chỉ dùng khi cần xem thống kê dịch
// ============================================================
function translateWithStats(code, dictionary, type) {
    const before    = code;
    const after     = translate(code, dictionary, type);
    const changed   = [];

    dictionary.forEach(item => {
        if (before.includes(item.genz) && after.includes(item.js)) {
            changed.push(`${item.genz} → ${item.js}`);
        }
    });

    return {
        result:      after,
        totalTerms:  dictionary.length,
        matched:     changed.length,
        translations: changed,
    };
}

// ============================================================
// 📦 EXPORTS
// ============================================================
module.exports = {
    // Hàm dịch chính - dùng cho bin.js
    dich_js:   (code) => translate(code, jsDict,   'js'),
    dich_html: (code) => translate(code, htmlDict, 'html'),
    dich_css:  (code) => translate(code, cssDict,  'css'),

    // Debug mode - dùng khi muốn biết dịch được bao nhiêu từ
    debug_js:   (code) => translateWithStats(code, jsDict,   'js'),
    debug_html: (code) => translateWithStats(code, htmlDict, 'html'),
    debug_css:  (code) => translateWithStats(code, cssDict,  'css'),

    // Expose dictionaries nếu cần
    jsDict,
    htmlDict,
    cssDict,
};
