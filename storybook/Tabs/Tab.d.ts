/// <reference types="react" />
import { PropsWithHTMLElement } from "../types";
export type TabProps<TElementType extends React.ElementType> = PropsWithHTMLElement<{
    button?: React.ReactNode | string;
}, TElementType>;
declare const Tab: <TElementType extends import("react").ElementType<any> = "div">(props: TabProps<TElementType>) => import("react/jsx-runtime").JSX.Element;
export default Tab;
