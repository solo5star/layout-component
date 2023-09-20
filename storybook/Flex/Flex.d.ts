/// <reference types="react" />
import type * as CSS from "csstype";
import { PropsWithHTMLElement } from "../types";
export type FlexProps<TElementType extends React.ElementType> = PropsWithHTMLElement<{
    direction?: CSS.StandardLonghandProperties["flexDirection"];
    justify?: CSS.StandardLonghandProperties["justifyContent"];
    align?: CSS.StandardLonghandProperties["alignItems"];
    wrap?: CSS.StandardLonghandProperties['flexWrap'];
    alignContent?: CSS.StandardLonghandProperties['alignContent'];
    gap?: number | string;
}, TElementType>;
declare const Flex: <TElementType extends import("react").ElementType<any> = "div">(props: FlexProps<TElementType>) => import("react/jsx-runtime").JSX.Element;
export default Flex;
