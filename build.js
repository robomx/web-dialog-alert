const fse = require('fs-extra')
const minify = require('@node-minify/core');
const terser = require('@node-minify/terser');


if(fse.existsSync('dist')){
    fse.removeSync('dist')
}

var fileName = 'dist/webdialog.min.js';

/* TODO: JSFIX could not patch the breaking change:
Allow copying broken symlinks 
Suggested fix: You can use the exists and existsSync functions https://nodejs.org/api/fs.html#fsexistspath-callback from the fs module to check if a symlink is broken. */
fse.copySync('src', 'dist');

// compute original file size
const o_stats = fse.statSync(fileName.replace(".min", ""));
const originalFileSizeInBytes = o_stats.size;
console.log(originalFileSizeInBytes, 'File size of original content')

minify({
    compressor: terser,
    input: fileName.replace(".min", ""),
    output: fileName,
    callback: function(err, min) {}
});

// compute new compressed file size
const n_stats = fse.statSync(fileName);
const compressedFileSizeInBytes = n_stats.size;
console.log(compressedFileSizeInBytes, 'File size of compressed content')

// compute reduce size
console.log(100 - (compressedFileSizeInBytes / originalFileSizeInBytes * 100).toFixed(2), '% size decreased')
