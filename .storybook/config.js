import { configure, addDecorator, addParameters } from "@storybook/react";
import { create } from "@storybook/theming/create";
import { addReadme } from "storybook-readme";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.(ts|tsx|js)$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

const theme = create({
  brandUrl: "https://elevatejs.com",
  brandImage: "https://elevatejs.com/elevatejs_logo_white.png",
  brandTitle: "Material UI CRUD",
});
addParameters({
  options: {
    theme, // this is just a workaround for addon-readme
  },
});
addDecorator(addReadme);
configure(loadStories, module);
