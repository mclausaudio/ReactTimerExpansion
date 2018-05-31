var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        //use Chrome if local, phantomJS is for c9
        browsers: ['PhantomJS'],
        hostname: 'localhost',
        port: 3001, //process.env.PORT,
        runnerPort: 0,
        //the above is for c9 config
        singleRun: true,
        frameworks: ['mocha'],
        files: [
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/foundation-sites/dist/foundation.min.js',
          'app/tests/**/*.test.jsx'
        ],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reports: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};