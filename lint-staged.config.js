module.exports = {
    "**/*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "**/*.{json,css,scss,md}": [
      "prettier --write"
    ]
};
