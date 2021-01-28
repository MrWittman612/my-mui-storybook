import { addons } from "@storybook/addons";
import CustomStoryBookTheme from "./CustomStoryBookTheme";

addons.setConfig({
  theme: CustomStoryBookTheme,
  panelPosition: "bottom",
  showRoots: true,
});
