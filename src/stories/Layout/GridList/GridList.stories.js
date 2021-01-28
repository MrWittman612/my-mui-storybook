import React from "react";
import { GridList } from "@material-ui/core";
import { GridItem, GridContainer } from "../Grid/Grid.stories";

const gridCol = [false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const GridColOptions = {
  control: {
    type: "inline-radio",
    options: gridCol,
  },
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Layout/GridList",
  component: GridList,
  argTypes: {
    zeroMinWidth: { control: "boolean" },
    container: { control: "boolean" },
    item: { control: "boolean" },
    alignContent: {
      control: {
        type: "inline-radio",
        options: [
          "stretch",
          "center",
          "flex-start",
          "flex-end",
          "space-between",
          "space-around",
        ],
      },
    },
    alignItems: {
      control: {
        type: "inline-radio",
        options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
      },
    },
    direction: {
      control: {
        type: "inline-radio",
        options: ["row", "row-reverse", "column", "column-reverse"],
      },
    },
    justify: {
      control: {
        type: "inline-radio",
        options: [
          "flex-start",
          "center",
          "flex-end",
          "space-between",
          "space-around",
          "space-evenly",
        ],
      },
    },
    xl: GridColOptions,
    lg: GridColOptions,
    ml: GridColOptions,
    sm: GridColOptions,
    xs: GridColOptions,
    spacing: {
      control: {
        type: "inline-radio",
        options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    },
    wrap: {
      control: {
        type: "inline-radio",
        options: ["nowrap", "wrap", "wrap-reverse"],
      },
    },
  },
};

const Temp = (args) => <GridList {...args} />;

export const Empty = Temp.bind({});

export const OneItem = (args) => (
  <GridList {...args}>
    <GridItem {...GridItem.args} />
  </GridList>
);

export const ManyItem = (args) => (
  <GridList {...args}>
    <GridItem {...GridItem.args} />
    <GridContainer {...GridContainer.arg} />
    <GridItem {...GridItem.args} />
  </GridList>
);

Empty.args = {
  container: "true",
};
