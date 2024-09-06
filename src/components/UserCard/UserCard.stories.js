import { UserCard } from ".";

export default {
  title: "Components/UserCard",
  component: UserCard,
  argTypes: {
    layout: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
    size: {
      options: ["l", "m", "s"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    role: "Senior Designer",
    name: "Jane Doe",
    layout: "vertical",
    size: "l",
    className: {},
    userThumbSizeMClassName: {},
    categoryClassName: {},
    categoryClassNameOverride: {},
  },
};
