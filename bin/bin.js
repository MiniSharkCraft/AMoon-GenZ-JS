#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { dich_js, dich_html, dich_css } = require('../src/translator');

const [,, command, target] = process.argv;
const CACHE_DIR = path.join(process.cwd(), '.cache_amoon');

if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR);

function buildFile(filePath) {
    if (!fs.existsSync(filePath)) return null;
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) return null;

    const ext = path.extname(filePath);
    const fileName = path.basename(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    
    let output = "", finalExt = "";
    if (ext === '.agz') { output = dich_js(content); finalExt = '.js'; }
    else if (ext === '.hagz') { output = dich_html(content); finalExt = '.html'; }
    else if (ext === '.cagz') { output = dich_css(content); finalExt = '.css'; }
    else return null;

    const outPath = path.join(CACHE_DIR, fileName.replace(ext, finalExt));
    fs.writeFileSync(outPath, output);
    return outPath;
}

function autoInstall(content) {
    // Tìm triệu_hồi hoặc require
    const patterns = [/triệu_hồi\(['"](.+?)['"]\)/g, /require\(['"](.+?)['"]\)/g];
    patterns.forEach(pattern => {
        const matches = content.matchAll(pattern);
        for (const match of matches) {
            const pkg = match[1];
            if (!pkg.startsWith('.') && !pkg.startsWith('/') && !['fs', 'path', 'http', 'os'].includes(pkg)) {
                try {
                    require.resolve(pkg, { paths: [process.cwd()] });
                } catch (e) {
                    console.log(`🚚 Đang ship hàng '${pkg}' về cho CEO...`);
                    try { execSync(`npm install ${pkg}`, { stdio: 'inherit' }); } catch (err) {}
                }
            }
        }
    });
}

switch (command) {
    case 'run':
        if (!target) break;
        try {
            const sourcePath = path.resolve(process.cwd(), target);
            const builtPath = buildFile(sourcePath);
            if (!builtPath) break;

            const builtContent = fs.readFileSync(builtPath, 'utf8');
            autoInstall(builtContent);
            
            console.log(`🚀 AMoon đang khởi chạy ${target}...`);
            execSync(`node ${builtPath}`, { stdio: 'inherit' });
        } catch (err) {
            console.log("\n🔥 Code có biến, xem log trên đi mậy!");
        }
        break;

    case 'build':
        const files = fs.readdirSync(process.cwd());
        files.forEach(f => buildFile(path.resolve(process.cwd(), f)));
        console.log("✨ Đã độ xong toàn bộ vào .cache_amoon 🌙");
        break;

    case 'clear':
        if (fs.existsSync(CACHE_DIR)) fs.rmSync(CACHE_DIR, { recursive: true, force: true });
        console.log("🧹 Cache sạch bong! 🐧☝️");
        break;

    default:
        console.log("🌟 AMoon CLI 1.0 - run | build | clear 🌙");
}