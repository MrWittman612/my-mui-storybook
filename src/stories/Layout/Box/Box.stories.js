import React from "react";
import { Box } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Layout/Box",
  component: Box,
  args: {
    style: {
      backgroundColor: "red",
      height: 100,
      width: 100,
    },
  },
  argTypes: {
    clone: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Temp = (args) => <Box style={{ height: 150, width: 150 }} {...args} />;

export const Default = Temp.bind({});

Default.args = {};
