/// <reference types="react" />
import { Gap, PropsWithHTMLElement } from "../types";
export type GridProps<TElementType extends React.ElementType> = PropsWithHTMLElement<{
    rows?: number | string;
    columns?: number | string;
    gap?: Gap;
}, TElementType>;
declare const Grid: <TElementType extends import("react").ElementType<any> = "div">(props: GridProps<TElementType>) => import("react/jsx-runtime").JSX.Element;
export default Grid;
