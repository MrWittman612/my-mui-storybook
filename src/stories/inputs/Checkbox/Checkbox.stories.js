import React from "react";
import { Checkbox } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Inputs/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      control: {
        type: "boolean",
      },
    },
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
    indeterminate: {
      control: {
        type: "boolean",
      },
    },
    required: {
      control: {
        type: "boolean",
      },
    },
    color: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["medium", "small"],
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
    id: {
      control: {
        type: "text",
      },
    },
  },
};

const Temp = (args) => <Checkbox {...args} />;

export const Default = Temp.bind({});

Default.args = {
  id: 1,
  color: "primary",
};
