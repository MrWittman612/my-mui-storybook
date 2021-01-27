import React from "react";
import { TextField } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Inputs/TextField",
  component: TextField,
  argTypes: {
    autoFocus: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
    error: {
      type: "boolean",
    },
    fulWidth: {
      type: "boolean",
    },
    multiline: {
      type: "boolean",
    },
    required: {
      type: "boolean",
    },
    select: {
      type: "boolean",
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["medium", "small"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["filled", "outlined", "standard"],
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    type: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    helperText: {
      control: {
        type: "text",
      },
    },
    onClick: { action: "clicked" },
  },
};

const Temp = (args) => <TextField {...args} />;

export const Default = Temp.bind({});

Default.args = {
  variant: "filled",
  size: "medium",
  color: "primary",
  label: "label",
  placeholder: "placeholder",
  helperText: "Helper Text",
};
