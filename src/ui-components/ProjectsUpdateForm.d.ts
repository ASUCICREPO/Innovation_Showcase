/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Projects } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProjectsUpdateFormInputValues = {
    projectCategory?: string;
    customer?: string;
    cicTeam?: string;
    projectName?: string;
    projectType?: string;
    awsService?: string;
    img_Url?: string;
    demo_Url?: string;
    description?: string;
};
export declare type ProjectsUpdateFormValidationValues = {
    projectCategory?: ValidationFunction<string>;
    customer?: ValidationFunction<string>;
    cicTeam?: ValidationFunction<string>;
    projectName?: ValidationFunction<string>;
    projectType?: ValidationFunction<string>;
    awsService?: ValidationFunction<string>;
    img_Url?: ValidationFunction<string>;
    demo_Url?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectsUpdateFormOverridesProps = {
    ProjectsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    projectCategory?: PrimitiveOverrideProps<TextFieldProps>;
    customer?: PrimitiveOverrideProps<TextFieldProps>;
    cicTeam?: PrimitiveOverrideProps<TextFieldProps>;
    projectName?: PrimitiveOverrideProps<TextFieldProps>;
    projectType?: PrimitiveOverrideProps<TextFieldProps>;
    awsService?: PrimitiveOverrideProps<TextFieldProps>;
    img_Url?: PrimitiveOverrideProps<TextFieldProps>;
    demo_Url?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProjectsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    projects?: Projects;
    onSubmit?: (fields: ProjectsUpdateFormInputValues) => ProjectsUpdateFormInputValues;
    onSuccess?: (fields: ProjectsUpdateFormInputValues) => void;
    onError?: (fields: ProjectsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectsUpdateFormInputValues) => ProjectsUpdateFormInputValues;
    onValidate?: ProjectsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectsUpdateForm(props: ProjectsUpdateFormProps): React.ReactElement;
