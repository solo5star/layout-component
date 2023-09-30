import { PropsWithHTMLElement } from "../types";
import React from "react";
export type TabsProps<TElementType extends React.ElementType> = PropsWithHTMLElement<{
    wrap?: boolean;
}, TElementType>;
declare const Tabs: <TElementType extends React.ElementType<any> = "div">(props: TabsProps<TElementType>) => import("react/jsx-runtime").JSX.Element;
export default Tabs;
