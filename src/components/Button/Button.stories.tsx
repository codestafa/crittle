import React, { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const CreateAccount: Story = {
  args: {
    children: "create account",
  },
};

export const LogIn: Story = {
  args: {
    children: "log in",
  },
};
