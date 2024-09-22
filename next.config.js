module.exports = {
  trailingSlash: false,
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  async rewrites() {
    return [
      // Page Not Found
      { source: '/pageNotFound', destination: '/notFound/PageNotFound' },
      { source: '/', destination: '/home/Home' },
      { source: '/portfolio', destination: '/portfolio/Portfolio' },
      { source: '/contact', destination: '/contact/Contact' }
    ];
  },
};
