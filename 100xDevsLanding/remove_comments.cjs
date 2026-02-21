const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    let list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        let stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src'));
files.forEach(file => {
    if (file.match(/\.(ts|tsx|js|jsx)$/)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove JSX block comments { /* ... */ }
        content = content.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');
        
        // Remove standard block comments /* ... */
        content = content.replace(/\/\*[\s\S]*?\*\//g, '');
        
        // Remove single line comments that start at the beginning of the text (ignoring whitespace)
        let lines = content.split('\n');
        lines = lines.filter(line => !line.trim().startsWith('//'));
        
        fs.writeFileSync(file, lines.join('\n'));
    }
});
console.log('Removed comments from src files.');
