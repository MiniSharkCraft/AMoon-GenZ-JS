const jsDict = require('./dictionaries/js');
const htmlDict = require('./dictionaries/html');
const cssDict = require('./dictionaries/css');

/**
 * Hàm dịch ma thuật của AMoon 🌙
 * @param {string} code - Code GenZ gốc
 * @param {Array} dictionary - Từ điển tương ứng
 * @param {string} type - Loại file (js/html/css)
 */
function translate(code, dictionary, type) {
    let result = code;

    // 1. Sắp xếp từ điển: Thằng nào dài hơn thì dịch trước 
    // Tránh việc 'lấy' dịch đè lên 'lấy_dữ_liệu'
    const sorted = [...dictionary].sort((a, b) => b.genz.length - a.genz.length);
    
    // 2. Dịch bất chấp: Thấy là đập!
    sorted.forEach(item => {
        // Escape các ký tự đặc biệt nếu có trong từ khóa GenZ
        const escapedGenz = item.genz.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Dùng 'g' để thay thế toàn bộ trong file
        const regex = new RegExp(escapedGenz, 'g');
        result = result.replace(regex, item.js);
    });

    // 3. Tiêm Polyfill fetch cho CEO nếu môi trường Node.js chưa có
    if (type === 'js' && result.includes('fetch')) {
        const polyfill = `
/* 🌙 AMoon Polyfill System - Bảo hiểm cho CEO */
if (typeof fetch === 'undefined') {
    try {
        var fetch = require('node-fetch');
    } catch (e) {
        // Tự động được handle bởi autoInstall trong bin.js mậy nhé!
    }
}
`;
        result = polyfill + result;
    }

    return result;
}

module.exports = {
    dich_js: (code) => translate(code, jsDict, 'js'),
    dich_html: (code) => translate(code, htmlDict, 'html'),
    dich_css: (code) => translate(code, cssDict, 'css')
};