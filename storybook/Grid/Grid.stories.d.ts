/// <reference types="react" />
import { StoryObj } from "@storybook/react";
declare const meta: {
    component: <TElementType extends import("react").ElementType<any> = "div">(props: import("./Grid").GridProps<TElementType>) => import("react/jsx-runtime").JSX.Element;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
