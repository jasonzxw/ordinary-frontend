// 自执行函数
(function(modules) {

    debugger
    // 用于储存已经加载过的模块
    var installedModules = {};

    function require(moduleName) {

        if (installedModules[moduleName]) {
            return installedModules[moduleName].exports;
        }

        var module = installedModules[moduleName] = {
            exports: {}
        };

        modules[moduleName](module, module.exports, require);

        return module.exports;
    }

    // 加载主模块
    return require("main");

})({
    "main": function(module, exports, require) {

        var addModule = require("./add");
        console.log(addModule.add(1, 1))

        var squareModule = require("./square");
        console.log(squareModule.square(3));

    },
    "./add": function(module, exports, require) {
        console.log('加载了 add 模块');

        module.exports = {
            add: function(x, y) {
                return x + y;
            }
        };
    },
    "./square": function(module, exports, require) {
        console.log('加载了 square 模块');

        var multiply = require("./multiply");
        module.exports = {
            square: function(num) {
                return multiply.multiply(num, num);
            }
        };
    },

    "./multiply": function(module, exports, require) {
        console.log('加载了 multiply 模块');

        module.exports = {
            multiply: function(x, y) {
                return x * y;
            }
        };
    }
})