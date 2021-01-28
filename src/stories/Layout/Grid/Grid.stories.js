import React from "react";
import { Grid } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Layout/Grid",
  component: Grid,
};

const Temp = (args) => <Grid {...args} />;

export const GridItem = Temp.bind({});

GridItem.args = {
  style: {
    height: "100px",
    width: "100px",
    backgroundColor: "yellow",
  },
};

export const GridContainer = Temp.bind({});

GridContainer.args = {
  style: {
    height: "100px",
    width: "100px",
    backgroundColor: "white",
  },
};
