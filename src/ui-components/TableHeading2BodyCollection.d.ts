/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TableHeading2BodyProps } from "./TableHeading2Body";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TableHeading2BodyCollectionOverridesProps = {
    TableHeading2BodyCollection?: PrimitiveOverrideProps<CollectionProps>;
    TableHeading2Body?: TableHeading2BodyProps;
} & EscapeHatchProps;
export declare type TableHeading2BodyCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TableHeading2BodyProps;
} & {
    overrides?: TableHeading2BodyCollectionOverridesProps | undefined | null;
}>;
export default function TableHeading2BodyCollection(props: TableHeading2BodyCollectionProps): React.ReactElement;
