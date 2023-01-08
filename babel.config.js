module.exports = {
  
  presets: [
    [ '@vue/cli-plugin-babel/preset',
      '@babel/preset-env',
      {
        targets: {
          browsers: 'last 2 versions',
        },
      },
    ],
  ],
  ignore:['./src/lib/mui/js/mui.js'], //防止mui报错
  
}
