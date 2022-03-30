const path = require('path')

module.exports = {
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/econbowl',
        destination: '/events/econbowl',
        permanent: true,
      },
      {
        source: '/econolympiad',
        destination: '/events/econolympiad',
        permanent: true,
      },
      // {
      //   source: "/econtalks",
      //   destination: "/events/econtalks",
      //   permanent: true,
      // },
      // {
      //   source: "/flip",
      //   destination: "/programs/flip",
      //   permanent: true,
      // },
      // {
      //   source: "/earn",
      //   destination: "/programs/earn",
      //   permanent: true,
      // },
      // {
      //   source: "/_error",
      //   destination: "/",
      //   permanent: true,
      // },
    ]
  },
}
