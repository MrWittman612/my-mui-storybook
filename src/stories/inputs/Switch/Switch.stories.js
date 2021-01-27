import React from "react";
import { Switch } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Inputs/Switch",
  component: Switch,
  argTypes: {
    checked: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      type: "boolean",
    },
    disabledRipple: {
      type: "boolean",
    },
    required: {
      type: "boolean",
    },
    color: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary"],
      },
    },
    edge: {
      control: {
        type: "select",
        options: ["end", "start", "false"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
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
    onClick: { action: "clicked" },
  },
};

const Temp = (args) => <Switch {...args} />;

export const Default = Temp.bind({});

Default.args = {
  color: "primary",
  size: "medium",
};
