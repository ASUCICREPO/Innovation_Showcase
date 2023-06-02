/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Projects } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component1OverridesProps = {
    Component1?: PrimitiveOverrideProps<ViewProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."?: PrimitiveOverrideProps<TextProps>;
    "City of Phoenix - Gunshot Detection"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "cic_logo 1"?: PrimitiveOverrideProps<ImageProps>;
    "cic_logo 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Component1Props = React.PropsWithChildren<Partial<ViewProps> & {
    Demo?: Projects;
} & {
    overrides?: Component1OverridesProps | undefined | null;
}>;
export default function Component1(props: Component1Props): React.ReactElement;
