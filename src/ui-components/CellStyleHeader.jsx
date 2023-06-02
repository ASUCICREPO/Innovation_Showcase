/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function CellStyleHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="161.67px"
      height="61px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(40,99,76,1)"
      {...getOverrideProps(overrides, "CellStyleHeader")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Category"
        {...getOverrideProps(overrides, "Category")}
      ></Text>
    </Flex>
  );
}
