import React from "react";
import { Slider } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Inputs/Slider",
  component: Slider,
  decorators: [
    (Story) => (
      <form
        noValidate
        style={{
          margin: "3em",
          width: "50vw",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Story />
      </form>
    ),
  ],
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    max: {
      control: {
        type: "number",
      },
    },
    min: {
      control: {
        type: "number",
      },
    },
    step: {
      control: {
        type: "number",
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    track: {
      control: {
        type: "select",
        options: ["normal", "false", "inverted"],
      },
    },
    valueLabelDisplay: {
      control: {
        type: "select",
        options: ["on", "auto", "off"],
      },
    },
  },
};

const Temp = (args) => <Slider {...args} />;

export const Default = Temp.bind({});

Default.args = {
  min: 1,
  max: 100,
  step: 5,
  orientation: "horizontal",
  valueLabelDisplay: "on",
};
