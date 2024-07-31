module.exports = {
  apps: [
    {
      name: "app",
      script: "./app.js",
      interpreter: "/usr/bin/node", // Adjust this if necessary
      env: {
        NODE_ENV: "production",
        NODE_PATH: "/var/www/mydubai/node_modules",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        NODE_PATH: "/var/www/mydubai/node_modules",
        PORT: 3000,
      },
    },
  ],
};
