import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { ProfileCircle } from "../../assets/icons";

const meta = {
  title: "Components/Header",
  component: Header,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotLoggedIn: Story = {
  args: {
    children: <ProfileCircle className="w-10 h-10" />,
  },
};

export const LoggedIn: Story = {
  args: {
    children: <div className="w-10 h-10 rounded-full bg-white"></div>,
  },
};
