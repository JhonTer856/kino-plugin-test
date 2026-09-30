registerPlugin({
  getCatalog: async function() {
    return [
      {
        id: "nasa-live",
        title: "NASA TV (En Vivo)",
        type: "tv",
        poster: "https://nasa.gov",
        streamUrl: "https://akamaihd.net"
      },
      {
        id: "bunny-movie",
        title: "Big Buck Bunny (Cortometraje)",
        type: "movie",
        poster: "https://wikimedia.org",
        streamUrl: "https://googleapis.com"
      }
    ];
  },
  
  resolveStream: async function(id) {
    if (id === "nasa-live") {
      return "https://akamaihd.net";
    }
    if (id === "bunny-movie") {
      return "https://googleapis.com";
    }
    return null;
  }
});
