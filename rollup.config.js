import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import json from "rollup-plugin-json";

const pkg = require("./package.json");
const libraryName = pkg.name;

export default {
  input: "src/index.tsx",
  output: [
    { file: pkg.main, name: "purchases", format: "umd", sourcemap: true },
    { file: pkg.module, format: "es", sourcemap: true },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [
    "react",
    "react-dom",
    "apollo-client",
    "apollo-cache-inmemory",
    "react-apollo",
    "graphql",
    "gql",
  ],
  watch: {
    include: "src/**",
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: "./tsconfig.json",
    }),

    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs({}),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    // resolve(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
};
