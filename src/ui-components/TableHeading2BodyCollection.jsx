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
import TableHeading2Body from "./TableHeading2Body";
import { Collection } from "@aws-amplify/ui-react";
export default function TableHeading2BodyCollection(props) {
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
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "TableHeading2BodyCollection")}
      {...rest}
    >
      {(item, index) => (
        <TableHeading2Body
          projects={item}
          height="auto"
          margin="0px 0px 0px 0px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TableHeading2Body>
      )}
    </Collection>
  );
}
