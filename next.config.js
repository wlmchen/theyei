const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async redirects() {
    return [
      {
        source: "/:slug",
        destination: "/events/:slug",
        permanent: true,
      },
      {
        source: "/_error",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
