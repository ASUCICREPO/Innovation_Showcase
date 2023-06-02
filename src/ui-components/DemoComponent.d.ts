/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DemoComponentOverridesProps = {
    DemoComponent?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Instructions 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 3.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."?: PrimitiveOverrideProps<TextProps>;
    "City of Phoenix - Gunshot Detection Demo"?: PrimitiveOverrideProps<TextProps>;
    Button38572255?: PrimitiveOverrideProps<ButtonProps>;
    "cic_logo 2"?: PrimitiveOverrideProps<ImageProps>;
    InputGroup?: PrimitiveOverrideProps<FlexProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    Button38572290?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DemoComponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DemoComponentOverridesProps | undefined | null;
}>;
export default function DemoComponent(props: DemoComponentProps): React.ReactElement;
