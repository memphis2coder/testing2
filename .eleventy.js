module.exports = function(config) {
    config.addPassThroughCopy('')
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };

};

