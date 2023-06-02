/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectComponentOverridesProps = {
    ProjectComponent?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<IconProps>;
    "Today, over 2,000 gun incidents occur in the City of Phoenix each year on average and the rate of gun violence is increasing according to EveryStat for Gun Violence. Additionally, gun violence costs Arizona taxpayers $263.2 million each year. According to the CDC (2019), Arizona has a rate of death due to firearm injury of 15.1 per 100,000 and 1,136 citizens died of firearm injury in 2019. Getting the right information to the right officers at the right time is a challenge to identifying , catching, and prosecuting offenders. Without a gunshot detection system, police have to rely on being in the area at the right time or a 911 call, which puts too much time between the gunshot and responding officers. Too often with existing gunshot detection systems there is a long delay between the time a gun is fired and when patrol officers receive the alert. By the time responding officers get to the scene, the offenders have fled. The cost of other detection systems prevents the wide scale deployment, which limits effectiveness."?: PrimitiveOverrideProps<TextProps>;
    "City of Phoenix - Gunshot Detection"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "cic_logo 1"?: PrimitiveOverrideProps<ImageProps>;
    "cic_logo 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type ProjectComponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProjectComponentOverridesProps | undefined | null;
}>;
export default function ProjectComponent(props: ProjectComponentProps): React.ReactElement;
