/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/signin',
            permanent: true,
          },
        ]
      },  
      modularizeImports: {
        '@mui/icons-material/?(((\\w*)?/?)*)': {
            transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
        }
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.com/**',
          },
        ],
      },
    

}

module.exports = nextConfig
