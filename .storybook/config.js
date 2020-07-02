import { configure, addDecorator, addParameters } from "@storybook/react";
import { addReadme } from "storybook-readme";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.(ts|tsx|js)$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addParameters({
  options: {
    theme: {}, // this is just a workaround for addon-readme
  },
});
addDecorator(addReadme);
configure(loadStories, module);
