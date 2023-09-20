/// <reference types="react" />
import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: <TElementType extends import("react").ElementType<any> = "div">(props: import("./Container").ContainerProps<TElementType>) => import("react/jsx-runtime").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
