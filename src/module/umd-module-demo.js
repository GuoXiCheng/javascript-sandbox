(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.umdModuleDemo = factory();
    }
}(this, function () {
    // 模块代码
    return {
        add: function (a, b) {
            return a + b;
        }
    };
}));