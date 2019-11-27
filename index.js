//const product = require('./product.js')

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['./product.js'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('./product.js'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.dependency);
    }
}(this, function (dependency) {
    // Use dependency in some fashion.
    return dependency;
}));
