import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Pick<TodoType, "title" | "userId" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
