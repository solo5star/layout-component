import { PropsWithHTMLElement } from "../types";
import React from "react";
export type TabProps<TElementType extends React.ElementType> = PropsWithHTMLElement<{
    tabs: string[];
}, TElementType>;
declare const Tab: <TElementType extends React.ElementType<any> = "div">(props: TabProps<TElementType>) => import("react/jsx-runtime").JSX.Element;
export default Tab;
