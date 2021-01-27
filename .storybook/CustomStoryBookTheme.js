import { create } from "@storybook/theming";
import image from "../src/assets/my-mui-storybook-logo.png";

export default create({
  base: "dark",
  brandTitle: "Mr. Wittman Blog",
  brandUrl:
    "https://mrwittman612.github.io/my-mui-storybook/?path=/story/example-introduction--page",
  brandImage: image,
});
