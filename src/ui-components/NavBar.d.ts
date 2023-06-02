/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "cic_logo 4"?: PrimitiveOverrideProps<ImageProps>;
    "Cloud Innovation Center Project Demos"?: PrimitiveOverrideProps<TextProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    Projects?: (event: SyntheticEvent) => void;
    Demos?: (event: SyntheticEvent) => void;
} & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
