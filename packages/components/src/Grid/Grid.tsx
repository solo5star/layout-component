import { root, vars } from "./Grid.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import asCssLength from "../asCssLength";
import { PropsWithHTMLElement } from "../types";

export type GridProps<TElementType extends React.ElementType> =
  PropsWithHTMLElement<
    {
      rows?: number | string;
      columns?: number | string;
      gap?: number | string;
    },
    TElementType
  >;

const Grid = <TElementType extends React.ElementType = 'div'>(props: GridProps<TElementType>) => {
  const { as: Element = 'div', rows, columns, gap, ...divProps } = props;

  return (
    <Element
      {...divProps}
      className={root}
      style={{
        ...divProps.style,
        ...assignInlineVars({
          [vars.rows]: String((rows && `repeat(${rows}, 1fr)`) ?? "initial"),
          [vars.columns]: String((columns && `repeat(${columns}, 1fr)`) ?? "initial"),
          [vars.gap]: asCssLength(gap ?? "initial"),
        }),
      }}
    />
  );
};

export default Grid;
