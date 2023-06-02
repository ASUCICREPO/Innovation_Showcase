/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
export default function Component1(props) {
  const { Demo, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <View
      width="876px"
      height="464px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component1")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.05px"
        width="406px"
        height="255px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18.75%"
        bottom="26.29%"
        left="50%"
        right="3.65%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        {...getOverrideProps(
          overrides,
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        )}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.05px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="9.05%"
        bottom="85.99%"
        left="50%"
        right="12.44%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="City of Phoenix - Gunshot Detection"
        {...getOverrideProps(overrides, "City of Phoenix - Gunshot Detection")}
      ></Text>
      <Button
        width="288px"
        height="unset"
        position="absolute"
        top="73.71%"
        bottom="16.38%"
        left="56.74%"
        right="10.39%"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Primary Button"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Image
        width="42.47%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="57.53%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={Demo?.img_Url}
        {...getOverrideProps(overrides, "cic_logo 1")}
      ></Image>
      <Image
        width="14.73%"
        height="18.1%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="81.9%"
        left="0%"
        right="85.27%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tech.asu.edu/sites/default/files/inline-images/untitled_design_13.png"
        {...getOverrideProps(overrides, "cic_logo 2")}
      ></Image>
    </View>
  );
}
