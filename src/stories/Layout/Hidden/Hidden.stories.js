import React from "react";
import { Hidden } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Layout/Hidden",
  component: Hidden,
};

const Temp = (args) => <Hidden {...args} />;

export const Default = Temp.bind({});

Default.args = {};
