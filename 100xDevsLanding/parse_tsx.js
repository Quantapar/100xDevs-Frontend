const fs = require('fs');

const content = fs.readFileSync('/Users/manu/Projects/design/100xDevsLanding/src/pages/CourseDetailsPage.tsx', 'utf8');

let divOpen = 0;
let divClose = 0;
let lineOpenCounts = {};
let lineCloseCounts = {};

const lines = content.split('\n');
lines.forEach((line, index) => {
    let opens = (line.match(/<div(\s|>)/g) || []).length;
    let closes = (line.match(/<\/div>/g) || []).length;
    divOpen += opens;
    divClose += closes;
    if (opens > 0) lineOpenCounts[index + 1] = opens;
    if (closes > 0) lineCloseCounts[index + 1] = closes;
});

console.log('Total <div:', divOpen);
console.log('Total </div:', divClose);
