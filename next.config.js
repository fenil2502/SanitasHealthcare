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
      { source: '/contact', destination: '/contact/Contact' },
      { source: '/about', destination: '/about/About' },
      { source: '/orthopedicSupplements', destination: '/orthopedicSupplements/OrthopedicSupplements' },
      { source: '/appetizerSupplements', destination: '/appetizerSupplements/AppetizerSupplements' },
      { source: '/gastroIntestinalSupplements', destination: '/gastroIntestinalSupplements/GastroIntestinalSupplements' },
      { source: '/gynecInfertilitySupplements', destination: '/gynecInfertilitySupplements/GynecInfertilitySupplements' },
      { source: '/immunitySupplements', destination: '/immunitySupplements/ImmunitySupplements' },
      { source: '/liverSupplement', destination: '/liverSupplement/LiverSupplement' },
      { source: '/pediatricSupplements', destination: '/pediatricSupplements/PediatricSupplements' },
      { source: '/proteinSupplement', destination: '/proteinSupplement/ProteinSupplement' },
      { source: '/skinHairSupplements', destination: '/skinHairSupplements/SkinHairSupplements' },
      { source: '/utiSupplements', destination: '/utiSupplements/UtiSupplements' },
      { source: '/weightLoss', destination: '/weightLoss/WeightLoss' },
    ];
  },
};
