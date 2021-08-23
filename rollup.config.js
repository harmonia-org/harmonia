import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  context: "this",
  plugins: [
    nodeResolve(),
  ],
  output: {
    file: "dist/build.js",
    format: "iife",
    compact: true,
    plugins: [
      terser({
        mangle: true,
        compress: {
          side_effects: false,
          negate_iife: false,
        },
      }),
    ],
  },
};
