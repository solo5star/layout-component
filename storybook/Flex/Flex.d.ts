import type * as CSS from "csstype";
import { HTMLAttributes } from "react";
export type FlexProps = HTMLAttributes<HTMLDivElement> & {
    direction?: CSS.StandardLonghandProperties["flexDirection"];
    justify?: CSS.StandardLonghandProperties["justifyContent"];
    align?: CSS.StandardLonghandProperties["alignItems"];
    gap?: number;
};
declare const Flex: (props: FlexProps) => import("react/jsx-runtime").JSX.Element;
export default Flex;
