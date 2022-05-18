import { VFC } from "react";

type textStyle = {
  color: string;
  fontSize: string;
};

export const Text: VFC<textStyle> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>text</p>;
};
