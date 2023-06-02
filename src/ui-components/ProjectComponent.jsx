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
import { Button, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProjectComponent(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "demos" });
  return (
    <View
      width="1464px"
      height="753px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectComponent")}
      {...rest}
    >
      <Icon
        width="842.3px"
        height="753px"
        viewBox={{ minX: 0, minY: 0, width: 842.30126953125, height: 753 }}
        paths={[]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="42.47%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></Icon>
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
        width="678.52px"
        height="413.83px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18.75%"
        bottom="26.29%"
        left="50%"
        right="3.65%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Today, over 2,000 gun incidents occur in the City of Phoenix each year on average and the rate of gun violence is increasing according to EveryStat for Gun Violence. Additionally, gun violence costs Arizona taxpayers $263.2 million each year. According to the CDC (2019), Arizona has a rate of death due to firearm injury of 15.1 per 100,000 and 1,136 citizens died of firearm injury in 2019. Getting the right information to the right officers at the right time is a challenge to identifying , catching, and prosecuting offenders. Without a gunshot detection system, police have to rely on being in the area at the right time or a 911 call, which puts too much time between the gunshot and responding officers. Too often with existing gunshot detection systems there is a long delay between the time a gun is fired and when patrol officers receive the alert. By the time responding officers get to the scene, the offenders have fled. The cost of other detection systems prevents the wide scale deployment, which limits effectiveness."
        {...getOverrideProps(
          overrides,
          "Today, over 2,000 gun incidents occur in the City of Phoenix each year on average and the rate of gun violence is increasing according to EveryStat for Gun Violence. Additionally, gun violence costs Arizona taxpayers $263.2 million each year. According to the CDC (2019), Arizona has a rate of death due to firearm injury of 15.1 per 100,000 and 1,136 citizens died of firearm injury in 2019. Getting the right information to the right officers at the right time is a challenge to identifying , catching, and prosecuting offenders. Without a gunshot detection system, police have to rely on being in the area at the right time or a 911 call, which puts too much time between the gunshot and responding officers. Too often with existing gunshot detection systems there is a long delay between the time a gun is fired and when patrol officers receive the alert. By the time responding officers get to the scene, the offenders have fled. The cost of other detection systems prevents the wide scale deployment, which limits effectiveness."
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
        width="549.84px"
        height="37.33px"
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
        width="481.32px"
        height="unset"
        position="absolute"
        top="75.61%"
        bottom="18.28%"
        left="56.74%"
        right="10.39%"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Demo"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Image
        width="48.5%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="51.5%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://smartchallenges.asu.edu/sites/default/files/2021-11/mission_image2x.png"
        {...getOverrideProps(overrides, "cic_logo 1")}
      ></Image>
      <Image
        width="18.99%"
        height="18.73%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="81.27%"
        left="0%"
        right="81.01%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tech.asu.edu/sites/default/files/inline-images/untitled_design_13.png"
        {...getOverrideProps(overrides, "cic_logo 2")}
      ></Image>
    </View>
  );
}
