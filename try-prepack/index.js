const path = require('path');
const Prepack = require('prepack');

Prepack.prepackFile(path.resolve(__dirname, 'test.js'), {
  filename: 'test-after',
  inputSourceMapFilename: 'source-map-file',
  sourceMaps: true
}, (err, { code, map }) => {
  console.log(code);
  console.log(map);
});