import fs from 'fs';
export const parse = path => fs.readFileSync(path).toString().split('\n');