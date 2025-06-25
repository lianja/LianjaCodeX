// example JavaScript Module
//
// var utils = require("./utils");
// utils.myfunc()
// utils.myfunc2()
//

var myfunc = function() {
    Lianja.writeOutput("myfunc() was called")
};
var myfunc2 = function() {
    Lianja.writeOutput("myfunc2() was called")
};
module.exports.myfunc = myfunc;
module.exports.myfunc2 = myfunc2;

