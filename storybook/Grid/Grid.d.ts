import { HTMLAttributes } from "react";
export type GridProps = HTMLAttributes<HTMLDivElement> & {
    rows?: number;
    columns?: number;
    gap?: number;
};
declare const Grid: (props: GridProps) => import("react/jsx-runtime").JSX.Element;
export default Grid;
