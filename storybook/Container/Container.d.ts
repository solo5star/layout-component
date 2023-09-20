/// <reference types="react" />
import { PropsWithHTMLElement } from "../types";
export type ContainerProps<TElementType extends React.ElementType> = PropsWithHTMLElement<{
    minWidth?: number | string;
    maxWidth?: number | string;
}, TElementType>;
declare const Container: <TElementType extends import("react").ElementType<any> = "div">(props: ContainerProps<TElementType>) => import("react/jsx-runtime").JSX.Element;
export default Container;
