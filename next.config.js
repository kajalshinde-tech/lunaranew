/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      ...[
        'about',
        'safety-check',
        'contact',
        'booking',
        'partners',
        'privacy-policy',
        'terms-conditions',
        'community-guidelines',
      ].map((page) => ({ source: `/${page}.html`, destination: `/${page}`, permanent: true })),
    ];
  },
};
