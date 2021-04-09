const path = require("path");

module.exports = env => {
	const dir = env ? 'docs' : 'dev';

	return {
    entry: "./src/js/main.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, dir),
    }
  };  
};
