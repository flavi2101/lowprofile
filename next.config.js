const { withContentlayer } = require('next-contentlayer2');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app *.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app
`;

const securityHeaders = [
  // ... security headers here
];

function handleError(error) {
  if (!(error instanceof Error)) {
    throw new Error('An unexpected error occurred');
  }
  console.error('Error:', error);
}

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
  try {
    const plugins = [withContentlayer, withBundleAnalyzer];
    return plugins.reduce((acc, next) => next(acc), {
      reactStrictMode: true,
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
      eslint: {
        dirs: ['app', 'components', 'layouts', 'scripts'],
      },
      images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
        ],
      },
      async headers() {
        return [
          {
            source: '/(.*)',
            headers: securityHeaders,
          },
        ];
      },
      webpack: (config, options) => {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
        return config;
      },
    });
  } catch (error) {
    handleError(error);
    // Optionally, you might want to throw the error again or handle it accordingly
  }
};
