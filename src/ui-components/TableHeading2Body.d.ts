/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TableHeading2BodyOverridesProps = {
    TableHeading2Body?: PrimitiveOverrideProps<FlexProps>;
    "Frame 139"?: PrimitiveOverrideProps<FlexProps>;
    Category?: PrimitiveOverrideProps<TextProps>;
    "Frame 140"?: PrimitiveOverrideProps<FlexProps>;
    Customer?: PrimitiveOverrideProps<TextProps>;
    "Frame 141"?: PrimitiveOverrideProps<FlexProps>;
    "CIC Team"?: PrimitiveOverrideProps<TextProps>;
    "Frame 142"?: PrimitiveOverrideProps<FlexProps>;
    Project?: PrimitiveOverrideProps<TextProps>;
    "Frame 143"?: PrimitiveOverrideProps<FlexProps>;
    "Project Type"?: PrimitiveOverrideProps<TextProps>;
    "Frame 144"?: PrimitiveOverrideProps<FlexProps>;
    "AWS Service"?: PrimitiveOverrideProps<TextProps>;
    "Frame 145"?: PrimitiveOverrideProps<FlexProps>;
    "Date Updated"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TableHeading2BodyProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TableHeading2BodyOverridesProps | undefined | null;
}>;
export default function TableHeading2Body(props: TableHeading2BodyProps): React.ReactElement;
