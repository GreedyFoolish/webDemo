const { resolve } = require("node:path");

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
        open: {
            target: ['/list.html'],
        },
        hot: true,
        compress: true,
        static: {
            directory: resolve(__dirname, 'dist'),
        },
        // proxy: {
        //     "/api": {
        //         target: "http://yuanjin.tech:5100/",
        //         changeOrigin: true
        //     }
        // }
    }
}