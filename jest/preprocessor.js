var babel = require('babel-core')

module.exports = {
    process: function (src) {
        return babel.transform(src, {
            "presets": ["es2015", "react"]
        }).code
    }
}