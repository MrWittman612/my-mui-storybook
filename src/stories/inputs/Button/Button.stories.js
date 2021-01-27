import React from "react";
import { Button } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Inputs/Button",
  component: Button,
  argTypes: {
    fullWidth: {
      type: "boolean",
    },
    disableRipple: {
      type: "boolean",
    },
    disableFocusRipple: {
      type: "boolean",
    },
    disableElevation: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
    color: {
      control: {
        type: "select",
        options: ["inherit", "primary", "secondary"],
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

const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});

Default.args = {
  variant: "contained",
  size: "large",
  color: "primary",
};

// export const Basic = (args) => <Button {...args}>Button</Button>;
