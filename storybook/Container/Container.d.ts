import { HTMLAttributes } from "react";
export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
    minWidth?: number;
    maxWidth?: number;
};
declare const Container: (props: ContainerProps) => import("react/jsx-runtime").JSX.Element;
export default Container;
