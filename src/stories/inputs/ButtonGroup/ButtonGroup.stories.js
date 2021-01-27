import React from "react";
import { ButtonGroup } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Inputs/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    disabled: {
      type: "boolean",
    },
    disableRipple: {
      type: "boolean",
    },
    disableElevation: {
      type: "boolean",
    },
    disableFocusRipple: {
      type: "boolean",
    },
    fullWidth: {
      type: "boolean",
    },
    color: {
      control: {
        type: "default",
        options: ["inherit", "primary", "secondary"],
      },
    },
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["large", "medium", "small"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["contained", "outlined", "text"],
      },
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <ButtonGroup {...args}>Button</ButtonGroup>;

export const Default = Template.bind({});

Default.args = {
  variant: "contained",
  size: "large",
  color: "primary",
};
