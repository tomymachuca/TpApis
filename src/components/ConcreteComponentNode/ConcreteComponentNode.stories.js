import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,
  argTypes: {
    style: {
      options: ["danger", "filled", "outline", "link", "disabled"],
      control: { type: "select" },
    },
    size: {
      options: ["l", "m", "XL", "s"],
      control: { type: "select" },
    },
    brand: {
      options: ["app-store", "google-play", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    notification: false,
    text: true,
    text1: "Button Text",
    iconLeft: true,
    iconRight: true,
    style: "danger",
    size: "l",
    brand: "app-store",
    styleFilledSizeXlClassName: {},
    overlapGroupClassName: {},
    vector: "/img/vector-34.svg",
    img: "/img/vector-35.svg",
    vector1: "/img/vector-36.svg",
    vector2: "/img/vector-37.svg",
    vector3: "/img/vector-38.svg",
    vector4: "/img/vector-39.svg",
  },
};
