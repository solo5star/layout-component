/// <reference types="react" />
import { PropsWithHTMLElement } from "../types";
export type TabButtonProps<TElementType extends React.ElementType> = PropsWithHTMLElement<{
    startIcon?: React.ReactNode;
    active?: boolean;
}, TElementType>;
declare const TabButton: <TElementType extends import("react").ElementType<any> = "button">(props: TabButtonProps<TElementType>) => import("react/jsx-runtime").JSX.Element;
export default TabButton;
