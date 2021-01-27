import React from "react";
import { Fab } from "@material-ui/core";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Inputs/Fab",
  component: Fab,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    disableRipple: {
      control: {
        type: "boolean",
      },
    },
    color: {
      control: {
        type: "select",
        options: ["default", "inherit", "primary", "secondary"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["extended", "round"],
      },
    },
  },
};

const Temp = (args) => <Fab {...args} />;

export const Default = Temp.bind({});

Default.args = {
  color: "primary",
  size: "large",
  variant: "round",
};
