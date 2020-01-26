const BASE_TARGET = 'https://api.openweathermap.org';

const proxy = [
  {
    context: '/data/2.5/weather',
    target: BASE_TARGET,
    changeOrigin: true
  }
];

module.exports = proxy;
