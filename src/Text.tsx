import { FC } from "react";

type textStyle = {
  color: string;
  fontSize: string;
};

export const Text: FC<textStyle> = (props) => {
  const { color, fontSize, children } = props;
  return <p style={{ color, fontSize }}>{children}</p>;
};
