const webpack = require("webpack");
const path = require("path");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");

const ESLintPlugin = require("eslint-webpack-plugin/");
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);

const appIncludes = [resolvePath("./src")];

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: (config, env) => {
    config.resolve.plugins = config.resolve.plugins.filter(
      (plugin) => !(plugin instanceof ModuleScopePlugin),
    );

    config.module.rules[0].include = appIncludes;

    const jsConfig = config.module.rules.find(({ include }) => include);
    jsConfig.include = appIncludes;

    const __DEV__ = env !== "production";

    config.plugins.push(new webpack.DefinePlugin({ __DEV__ }));

    config.plugins = config.plugins.filter((v) => !(v instanceof ESLintPlugin));

    return config;
  },
  // The Jest config to use when running your jest tests - note that the normal rewires do not
  // work here.
  jest: function (config) {
    // ...add your jest config customisation...
    // Example: enable/disable some tests based on environment variables in the .env file.
    // if (!config.testPathIgnorePatterns) {
    //   config.testPathIgnorePatterns = [];
    // }
    // if (!process.env.RUN_COMPONENT_TESTS) {
    //   config.testPathIgnorePatterns.push(
    //     '<rootDir>/src/components/**/*.test.js',
    //   );
    // }
    // if (!process.env.RUN_REDUCER_TESTS) {
    //   config.testPathIgnorePatterns.push('<rootDir>/src/reducers/**/*.test.js');
    // }

    // config.rootDir = path.join(__dirname, "../");
    // config.roots = [...config.roots, "<rootDir>/src"];
    // (config.testMatch = [
    //   "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    //   "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
    // ]),
    config.setupFiles = [
      ...(config.setupFiles || []),
      path.join(__dirname, "./path/jestSetupFile.js"),
    ];
    config.globals = {
      ...config.globals,
      __DEV__: true,
    };
    config.testPathIgnorePatterns = [
      ...(config.testPathIgnorePatterns || []),
      "/node_modules/",
    ];

    return config;
  },
  // The function to use to create a webpack dev server configuration when running the development
  // server with 'npm run start' or 'yarn start'.
  // Example: set the dev server to use a specific certificate in https.
  devServer: function (configFunction) {
    // Return the replacement function for create-react-app to use to generate the Webpack
    // Development Server config. "configFunction" is the function that would normally have
    // been used to generate the Webpack Development server config - you can use it to create
    // a starting configuration to then modify instead of having to create a config from scratch.
    return function (proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);

      // Change the https certificate options to match your certificate, using the .env file to
      // set the file paths & passphrase.

      // config.https = {
      //   key: fs.readFileSync(process.env.REACT_HTTPS_KEY, 'utf8'),
      //   cert: fs.readFileSync(process.env.REACT_HTTPS_CERT, 'utf8'),
      //   ca: fs.readFileSync(process.env.REACT_HTTPS_CA, 'utf8'),
      //   passphrase: process.env.REACT_HTTPS_PASS,
      // };

      // Return your customised Webpack Development Server config.
      return config;
    };
  },
  // The paths config to use when compiling your react app for development or production.
  paths: function (paths, env) {
    // ...add your paths config
    return paths;
  },
};
