import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { LoadingSquare } from ".";

export default {
  title: "Shared/Loading Square",
  component: LoadingSquare,
} as ComponentMeta<typeof LoadingSquare>;

const Template: ComponentStory<typeof LoadingSquare> = (args) => (
  <LoadingSquare {...args} />
);

export const Primary = Template.bind({});
