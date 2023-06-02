/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Projects } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TableContentOverridesProps = {
    TableContent?: PrimitiveOverrideProps<FlexProps>;
    "Frame 136"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 139"?: PrimitiveOverrideProps<FlexProps>;
    "Feature A"?: PrimitiveOverrideProps<TextProps>;
    "Frame 140"?: PrimitiveOverrideProps<FlexProps>;
    "Feature B"?: PrimitiveOverrideProps<TextProps>;
    "Frame 141"?: PrimitiveOverrideProps<FlexProps>;
    "Feature C29766586"?: PrimitiveOverrideProps<TextProps>;
    "Frame 142"?: PrimitiveOverrideProps<FlexProps>;
    "Feature D29766589"?: PrimitiveOverrideProps<TextProps>;
    "Frame 143"?: PrimitiveOverrideProps<FlexProps>;
    "Feature C37572769"?: PrimitiveOverrideProps<TextProps>;
    "Frame 144"?: PrimitiveOverrideProps<FlexProps>;
    "Feature D37572772"?: PrimitiveOverrideProps<TextProps>;
    "Frame 145"?: PrimitiveOverrideProps<FlexProps>;
    "Feature C37572775"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TableContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    projects?: Projects;
} & {
    overrides?: TableContentOverridesProps | undefined | null;
}>;
export default function TableContent(props: TableContentProps): React.ReactElement;
