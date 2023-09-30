/// <reference types="react" />
import { StoryObj } from "@storybook/react";
declare const meta: {
    component: <TElementType extends import("react").ElementType<any> = "div">(props: import("./Tabs").TabsProps<TElementType>) => import("react/jsx-runtime").JSX.Element;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const TabButtonsWithScroll: Story;
export declare const TabButtonsWithWrap: Story;
export declare const CustomTabButtons: Story;
