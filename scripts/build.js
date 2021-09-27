const fs = require('fs');
const path = require('path');
const sass = require('sass');/* eslint-disable-line import/no-extraneous-dependencies */
const Fiber = require('fibers');/* eslint-disable-line import/no-extraneous-dependencies */
const scssFunctions = require('./scssFunctions');

const isCore = process.argv[2] === '--core';
const fileNameSuffix = isCore ? '-core' : '';
const fileEntryPath = path.resolve(__dirname, '..', `scss/nes${fileNameSuffix}.scss`);
(async () => {
  sass.render({
    file: fileEntryPath,
    sourceMap: true,
    functions: scssFunctions,
    // outFile: path.resolve(__dirname, '..', './css/nes.css'),
    fiber: Fiber,
  }, (err, result) => {
    if (err) {
      console.error(err);
    }
    fs.writeFileSync(path.resolve(__dirname, '..', `css/nes${fileNameSuffix}.css`), result.css.toString());
  });
})();
