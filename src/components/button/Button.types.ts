import { HTMLAttributes, MouseEventHandler, PropsWithChildren } from "react";
import { ColorEnum } from "../common/Common.types";
export type ButtonProps = PropsWithChildren<{}> &
  HTMLAttributes<HTMLButtonElement> & {
    color?: ColorEnum;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };
