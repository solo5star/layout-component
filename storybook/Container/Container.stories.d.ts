import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: import("./Container").ContainerProps) => import("react/jsx-runtime").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
