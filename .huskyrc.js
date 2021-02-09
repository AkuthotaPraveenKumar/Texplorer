module.exports = {
  hooks: {
    "pre-commit": "npm run format",
    "pre-push": "npm run format && npm run build",
  },
};
