const path = require('path');

//file name
console.log(path.basename(__filename));

//directory name
console.log(__dirname);
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

//create an object path
console.log(path.parse(__filename));