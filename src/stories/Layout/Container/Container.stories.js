import React from "react";
import { Container } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Layout/Container",
  component: Container,
  argTypes: {
    maxWidth: {
      control: {
        type: "inline-radio",
        options: ["false", "xs", "sm", "md", "lg", "xl"],
      },
    },
  },
};

const Temp = (args) => <Container {...args} />;

export const Default = Temp.bind({});

Default.args = {
  style: {
    backgroundColor: "#395b6b52",
    height: "100vh",
    width: "100vw",
  },
  maxWidth: "md",
};

Default.parameters = {
  layout: "fullscreen",
};
