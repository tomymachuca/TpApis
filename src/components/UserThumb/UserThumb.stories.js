import { UserThumb } from ".";

export default {
  title: "Components/UserThumb",
  component: UserThumb,
  argTypes: {
    size: {
      options: ["m", "s"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "m",
    className: {},
  },
};
