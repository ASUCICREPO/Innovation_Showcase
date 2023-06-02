/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TableContentProps } from "./TableContent";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TableContentCollectionOverridesProps = {
    TableContentCollection?: PrimitiveOverrideProps<CollectionProps>;
    TableContent?: TableContentProps;
} & EscapeHatchProps;
export declare type TableContentCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TableContentProps;
} & {
    overrides?: TableContentCollectionOverridesProps | undefined | null;
}>;
export default function TableContentCollection(props: TableContentCollectionProps): React.ReactElement;
