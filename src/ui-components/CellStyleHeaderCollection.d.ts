/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CellStyleHeaderProps } from "./CellStyleHeader";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CellStyleHeaderCollectionOverridesProps = {
    CellStyleHeaderCollection?: PrimitiveOverrideProps<CollectionProps>;
    CellStyleHeader?: CellStyleHeaderProps;
} & EscapeHatchProps;
export declare type CellStyleHeaderCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CellStyleHeaderProps;
} & {
    overrides?: CellStyleHeaderCollectionOverridesProps | undefined | null;
}>;
export default function CellStyleHeaderCollection(props: CellStyleHeaderCollectionProps): React.ReactElement;
