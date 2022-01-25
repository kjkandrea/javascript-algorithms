import fs from 'fs';

export const parse = path => fs.readFileSync(path, 'utf8').trim().split('\n');