//use if a rootDir path is needed and export into other files instead of __dirname
const path = require("path");

module.exports = path.dirname(require.main.filename);
