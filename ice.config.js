module.exports = {
  entry: 'src/index.js',
  plugins: [
    ['ice-plugin-fusion', {
      themePackage: '@icedesign/skin',
    }],
    ['ice-plugin-moment-locales', {
      locales: ['zh-cn'],
    }],
    'ice-plugin-css-assets-local',
  ],
};
