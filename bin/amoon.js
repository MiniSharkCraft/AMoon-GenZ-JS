#!/usr/bin/env node
// ============================================================
// 🌙 AMoon CLI - Compiler cho người Việt yêu code
// 
// Cú pháp:
//   amoon run   <file.agz>    → Dịch và chạy JS GenZ
//   amoon run   <file.hagz>   → Dịch và mở HTML GenZ
//   amoon run   <file.cagz>   → Dịch CSS GenZ (output ra file)
//   amoon build               → Build toàn bộ file trong thư mục
//   amoon check <file>        → Xem sẽ dịch được bao nhiêu từ
//   amoon clear               → Dọn cache
//   amoon list  [js|html|css] → Xem từ điển
//   amoon stats               → Thống kê từ điển
// ============================================================

'use strict';

const fs        = require('fs');
const path      = require('path');
const { execSync } = require('child_process');
const {
    dich_js, dich_html, dich_css,
    debug_js, debug_html, debug_css,
    jsDict, htmlDict, cssDict,
} = require('../src/translator');

// ============================================================
// ⚙️  CONFIG
// ============================================================
const [,, command, ...args] = process.argv;
const target    = args[0];
const CACHE_DIR = path.join(process.cwd(), '.cache_amoon');

// Extension map: GenZ ext → { dich: fn, debugFn: fn, outExt: string, type }
const EXT_MAP = {
    '.agz':  { dich: dich_js,   debug: debug_js,   out: '.js',   type: 'js'   },
    '.hagz': { dich: dich_html, debug: debug_html,  out: '.html', type: 'html' },
    '.cagz': { dich: dich_css,  debug: debug_css,   out: '.css',  type: 'css'  },
};

// ============================================================
// 🛠️  HELPERS
// ============================================================

/** Đảm bảo cache dir tồn tại */
function ensureCache() {
    if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });
}

/**
 * Dịch một file GenZ → ngôn ngữ thật, lưu vào .cache_amoon
 * @returns {string|null} Đường dẫn file đã dịch, hoặc null nếu không hỗ trợ
 */
function buildFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`❌ Không tìm thấy file: ${filePath}`);
        return null;
    }

    const stat = fs.statSync(filePath);
    if (!stat.isFile()) return null;

    const ext      = path.extname(filePath);
    const config   = EXT_MAP[ext];
    if (!config) return null;

    const fileName = path.basename(filePath);
    const content  = fs.readFileSync(filePath, 'utf8');
    const output   = config.dich(content);
    const outName  = fileName.replace(ext, config.out);
    const outPath  = path.join(CACHE_DIR, outName);

    fs.writeFileSync(outPath, output, 'utf8');
    return outPath;
}

/**
 * Tự động cài package bị thiếu
 * Scan require() và import ... from trong code đã dịch
 */
function autoInstall(content) {
    const patterns = [
        /require\(['"]([^'"./][^'"]*)['"]\)/g,
        /from\s+['"]([^'"./][^'"]*)['"]/g,
    ];

    const installed = new Set();

    patterns.forEach(pattern => {
        for (const match of content.matchAll(pattern)) {
            const pkg = match[1].split('/')[0]; // handle scoped pkgs: @scope/pkg
            if (installed.has(pkg)) continue;

            // Skip Node.js built-ins
            const builtins = ['fs', 'path', 'http', 'https', 'os', 'crypto',
                               'events', 'stream', 'buffer', 'util', 'child_process',
                               'url', 'querystring', 'readline', 'cluster', 'net'];
            if (builtins.includes(pkg)) continue;

            try {
                require.resolve(pkg, { paths: [process.cwd()] });
            } catch {
                console.log(`🚚 Đang ship hàng '${pkg}' về cho CEO...`);
                try {
                    execSync(`npm install ${pkg}`, { stdio: 'inherit', cwd: process.cwd() });
                    installed.add(pkg);
                    console.log(`✅ '${pkg}' đã về kho rồi!`);
                } catch {
                    console.warn(`⚠️  Không ship được '${pkg}', thử tay: npm install ${pkg}`);
                }
            }
        }
    });
}

/**
 * Hiển thị từ điển đẹp ra terminal
 */
function printDict(dict, title) {
    console.log(`\n${'═'.repeat(56)}`);
    console.log(`  📖 ${title}`);
    console.log(`${'═'.repeat(56)}`);
    console.log(`  ${'TỪ GENZ'.padEnd(32)} → JS`);
    console.log(`${'─'.repeat(56)}`);
    dict.forEach(({ genz, js }) => {
        console.log(`  ${genz.padEnd(32)} → ${js}`);
    });
    console.log(`${'─'.repeat(56)}`);
    console.log(`  Tổng: ${dict.length} thuật ngữ\n`);
}

// ============================================================
// 🎮  COMMAND ROUTER
// ============================================================
switch (command) {

    // ————————————————————————————————————————
    // 🚀  RUN - Dịch và chạy
    // ————————————————————————————————————————
    case 'run': {
        if (!target) {
            console.error('❌ Thiếu file target! Dùng: amoon run <file.agz|hagz|cagz>');
            process.exit(1);
        }

        try {
            ensureCache();
            const sourcePath = path.resolve(process.cwd(), target);
            const ext        = path.extname(target);
            const builtPath  = buildFile(sourcePath);

            if (!builtPath) {
                console.error(`❌ AMoon chỉ hiểu .agz .hagz .cagz, không phải "${ext}"`);
                process.exit(1);
            }

            const builtContent = fs.readFileSync(builtPath, 'utf8');

            if (ext === '.agz') {
                // JS: auto-install rồi chạy
                autoInstall(builtContent);
                console.log(`\n🚀 AMoon đang khởi động ${target}...\n${'─'.repeat(40)}`);
                execSync(`node "${builtPath}"`, { stdio: 'inherit', cwd: process.cwd() });

            } else if (ext === '.hagz') {
                // HTML: mở trong trình duyệt
                console.log(`\n🌐 AMoon đã dịch xong HTML → ${builtPath}`);
                console.log(`💡 Mở file trong browser hoặc dùng: npx serve .cache_amoon`);

            } else if (ext === '.cagz') {
                // CSS: output đường dẫn thôi
                const outName = path.basename(builtPath);
                console.log(`\n💅 AMoon đã dịch CSS → .cache_amoon/${outName}`);
                console.log(`💡 Link vào HTML: <link rel="stylesheet" href=".cache_amoon/${outName}">`);
            }

        } catch (err) {
            console.error('\n🔥 Code có biến mà CEO không handle!');
            if (process.env.DEBUG) console.error(err);
            else console.error('💡 Set DEBUG=1 để xem chi tiết lỗi');
            process.exit(1);
        }
        break;
    }

    // ————————————————————————————————————————
    // 🏗️  BUILD - Build tất cả file trong thư mục
    // ————————————————————————————————————————
    case 'build': {
        ensureCache();
        const dir   = process.cwd();
        const files = fs.readdirSync(dir).filter(f => Object.keys(EXT_MAP).includes(path.extname(f)));

        if (files.length === 0) {
            console.log('🤔 Không tìm thấy file .agz .hagz .cagz nào cả...');
            break;
        }

        let ok = 0, fail = 0;
        files.forEach(f => {
            const result = buildFile(path.resolve(dir, f));
            if (result) {
                console.log(`  ✅ ${f} → ${path.basename(result)}`);
                ok++;
            } else {
                console.log(`  ❌ ${f} - build thất bại`);
                fail++;
            }
        });

        console.log(`\n✨ Build xong! ${ok} thành công, ${fail} thất bại → .cache_amoon 🌙`);
        break;
    }

    // ————————————————————————————————————————
    // 🔍  CHECK - Xem sẽ dịch được bao nhiêu từ
    // ————————————————————————————————————————
    case 'check': {
        if (!target) {
            console.error('❌ Thiếu file! Dùng: amoon check <file>');
            process.exit(1);
        }

        const filePath = path.resolve(process.cwd(), target);
        if (!fs.existsSync(filePath)) {
            console.error(`❌ Không tìm thấy: ${filePath}`);
            process.exit(1);
        }

        const ext     = path.extname(target);
        const config  = EXT_MAP[ext];
        if (!config) {
            console.error(`❌ Không hỗ trợ extension "${ext}"`);
            process.exit(1);
        }

        const content = fs.readFileSync(filePath, 'utf8');
        const stats   = config.debug(content);

        console.log(`\n🔍 Kết quả check: ${target}`);
        console.log(`${'─'.repeat(50)}`);
        console.log(`  Tổng từ trong dict : ${stats.totalTerms}`);
        console.log(`  Khớp được         : ${stats.matched}`);
        console.log(`\n  📋 Chi tiết:`);
        stats.translations.forEach(t => console.log(`     ${t}`));
        console.log();
        break;
    }

    // ————————————————————————————————————————
    // 🗑️  CLEAR - Dọn dẹp cache
    // ————————————————————————————————————————
    case 'clear': {
        if (fs.existsSync(CACHE_DIR)) {
            fs.rmSync(CACHE_DIR, { recursive: true, force: true });
            console.log('🧹 Cache sạch bong như lương tháng sau thuế! 🌙');
        } else {
            console.log('😇 Cache đã sạch từ trước rồi bro');
        }
        break;
    }

    // ————————————————————————————————————————
    // 📖  LIST - Xem từ điển
    // ————————————————————————————————————————
    case 'list': {
        const type = target || 'all';
        if (type === 'js'   || type === 'all') printDict(jsDict,   'Từ Điển JS (.agz)');
        if (type === 'html' || type === 'all') printDict(htmlDict, 'Từ Điển HTML (.hagz)');
        if (type === 'css'  || type === 'all') printDict(cssDict,  'Từ Điển CSS (.cagz)');
        if (!['js','html','css','all'].includes(type)) {
            console.error(`❌ Không biết loại "${type}". Dùng: amoon list [js|html|css]`);
        }
        break;
    }

    // ————————————————————————————————————————
    // 📊  STATS - Thống kê
    // ————————————————————————————————————————
    case 'stats': {
        const total = jsDict.length + htmlDict.length + cssDict.length;
        console.log('\n📊 AMoon Dictionary Stats');
        console.log('═'.repeat(40));
        console.log(`  JS   (.agz)  : ${String(jsDict.length).padStart(4)} thuật ngữ`);
        console.log(`  HTML (.hagz) : ${String(htmlDict.length).padStart(4)} thuật ngữ`);
        console.log(`  CSS  (.cagz) : ${String(cssDict.length).padStart(4)} thuật ngữ`);
        console.log('─'.repeat(40));
        console.log(`  TỔNG         : ${String(total).padStart(4)} thuật ngữ`);
        console.log('═'.repeat(40) + '\n');
        break;
    }

    // ————————————————————————————————————————
    // ❓  DEFAULT - Help
    // ————————————————————————————————————————
    default: {
        console.log(`
🌙 AMoon CLI v2.0 - Compiler của người Việt yêu code

📋 Lệnh:
   amoon run   <file.agz>     Dịch và chạy JS
   amoon run   <file.hagz>    Dịch HTML
   amoon run   <file.cagz>    Dịch CSS
   amoon build                Build toàn bộ .agz .hagz .cagz trong thư mục
   amoon check <file>         Kiểm tra sẽ dịch được bao nhiêu từ
   amoon clear                Dọn .cache_amoon
   amoon list  [js|html|css]  Xem từ điển
   amoon stats                Thống kê số lượng thuật ngữ

📁 Extension:
   .agz   = AMoon GenZ JavaScript
   .hagz  = HTML AMoon GenZ
   .cagz  = CSS AMoon GenZ

🔥 Ví dụ:
   amoon run index.agz
   amoon check server.agz
   amoon list js

💡 Debug:
   DEBUG=1 amoon run <file.agz>

Chúc mày code không có bug! 🌙
        `);
        break;
    }
}
