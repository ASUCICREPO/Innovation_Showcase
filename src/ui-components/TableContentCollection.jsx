/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Projects } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import TableContent from "./TableContent";
import { Collection } from "@aws-amplify/ui-react";
export default function TableContentCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Projects,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "TableContentCollection")}
      {...rest}
    >
      {(item, index) => (
        <TableContent
          projects={item}
          margin="0 0 50px 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TableContent>
      )}
    </Collection>
  );
}
