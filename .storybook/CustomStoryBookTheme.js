import { create, themes } from "@storybook/theming";
import image from "../src/assets/my-mui-storybook-logo.png";

export default create({
  base: "dark",
  brandTitle: "My material ui storybook",
  brandUrl:
    "https://mrwittman612.github.io/my-mui-storybook/?path=/story/example-introduction--page",
  brandImage: image,

  appBg: "#091d25",
  appContentBg: "#717171bf",
  appBorderColor: "blue",
  appBorderRadius: 4,
});
