const path = require('path');



module.exports={

    mode: 'development',

    entry:"./app/index.js",
    output:{
        path:path.resolve(__dirname, "dist"),
        filename:"bundle.js",    
    },
    devServer: {
        
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 8081 
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
        ],
      },
    


};