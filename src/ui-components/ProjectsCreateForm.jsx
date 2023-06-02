/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Projects } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProjectsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    projectCategory: "",
    customer: "",
    cicTeam: "",
    projectName: "",
    projectType: "",
    awsService: "",
    img_Url: "",
    demo_Url: "",
    description: "",
  };
  const [projectCategory, setProjectCategory] = React.useState(
    initialValues.projectCategory
  );
  const [customer, setCustomer] = React.useState(initialValues.customer);
  const [cicTeam, setCicTeam] = React.useState(initialValues.cicTeam);
  const [projectName, setProjectName] = React.useState(
    initialValues.projectName
  );
  const [projectType, setProjectType] = React.useState(
    initialValues.projectType
  );
  const [awsService, setAwsService] = React.useState(initialValues.awsService);
  const [img_Url, setImg_Url] = React.useState(initialValues.img_Url);
  const [demo_Url, setDemo_Url] = React.useState(initialValues.demo_Url);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProjectCategory(initialValues.projectCategory);
    setCustomer(initialValues.customer);
    setCicTeam(initialValues.cicTeam);
    setProjectName(initialValues.projectName);
    setProjectType(initialValues.projectType);
    setAwsService(initialValues.awsService);
    setImg_Url(initialValues.img_Url);
    setDemo_Url(initialValues.demo_Url);
    setDescription(initialValues.description);
    setErrors({});
  };
  const validations = {
    projectCategory: [],
    customer: [],
    cicTeam: [],
    projectName: [],
    projectType: [],
    awsService: [],
    img_Url: [{ type: "URL" }],
    demo_Url: [{ type: "URL" }],
    description: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          projectCategory,
          customer,
          cicTeam,
          projectName,
          projectType,
          awsService,
          img_Url,
          demo_Url,
          description,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Projects(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProjectsCreateForm")}
      {...rest}
    >
      <TextField
        label="Project category"
        isRequired={false}
        isReadOnly={false}
        value={projectCategory}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectCategory: value,
              customer,
              cicTeam,
              projectName,
              projectType,
              awsService,
              img_Url,
              demo_Url,
              description,
            };
            const result = onChange(modelFields);
            value = result?.projectCategory ?? value;
          }
          if (errors.projectCategory?.hasError) {
            runValidationTasks("projectCategory", value);
          }
          setProjectCategory(value);
        }}
        onBlur={() => runValidationTasks("projectCategory", projectCategory)}
        errorMessage={errors.projectCategory?.errorMessage}
        hasError={errors.projectCategory?.hasError}
        {...getOverrideProps(overrides, "projectCategory")}
      ></TextField>
      <TextField
        label="Customer"
        isRequired={false}
        isReadOnly={false}
        value={customer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectCategory,
              customer: value,
              cicTeam,
              projectName,
              projectType,
              awsService,
              img_Url,
              demo_Url,
              description,
            };
            const result = onChange(modelFields);
            value = result?.customer ?? value;
          }
          if (errors.customer?.hasError) {
            runValidationTasks("customer", value);
          }
          setCustomer(value);
        }}
        onBlur={() => runValidationTasks("customer", customer)}
        errorMessage={errors.customer?.errorMessage}
        hasError={errors.customer?.hasError}
        {...getOverrideProps(overrides, "customer")}
      ></TextField>
      <TextField
        label="Cic team"
        isRequired={false}
        isReadOnly={false}
        value={cicTeam}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectCategory,
              customer,
              cicTeam: value,
              projectName,
              projectType,
              awsService,
              img_Url,
              demo_Url,
              description,
            };
            const result = onChange(modelFields);
            value = result?.cicTeam ?? value;
          }
          if (errors.cicTeam?.hasError) {
            runValidationTasks("cicTeam", value);
          }
          setCicTeam(value);
        }}
        onBlur={() => runValidationTasks("cicTeam", cicTeam)}
        errorMessage={errors.cicTeam?.errorMessage}
        hasError={errors.cicTeam?.hasError}
        {...getOverrideProps(overrides, "cicTeam")}
      ></TextField>
      <TextField
        label="Project name"
        isRequired={false}
        isReadOnly={false}
        value={projectName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectCategory,
              customer,
              cicTeam,
              projectName: value,
              projectType,
              awsService,
              img_Url,
              demo_Url,
              description,
            };
            const result = onChange(modelFields);
            value = result?.projectName ?? value;
          }
          if (errors.projectName?.hasError) {
            runValidationTasks("projectName", value);
          }
          setProjectName(value);
        }}
        onBlur={() => runValidationTasks("projectName", projectName)}
        errorMessage={errors.projectName?.errorMessage}
        hasError={errors.projectName?.hasError}
        {...getOverrideProps(overrides, "projectName")}
      ></TextField>
      <TextField
        label="Project type"
        isRequired={false}
        isReadOnly={false}
        value={projectType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectCategory,
              customer,
              cicTeam,
              projectName,
              projectType: value,
              awsService,
              img_Url,
              demo_Url,
              description,
            };
            const result = onChange(modelFields);
            value = result?.projectType ?? value;
          }
          if (errors.projectType?.hasError) {
            runValidationTasks("projectType", value);
          }
          setProjectType(value);
        }}
        onBlur={() => runValidationTasks("projectType", projectType)}
        errorMessage={errors.projectType?.errorMessage}
        hasError={errors.projectType?.hasError}
        {...getOverrideProps(overrides, "projectType")}
      ></TextField>
      <TextField
        label="Aws service"
        isRequired={false}
        isReadOnly={false}
        value={awsService}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectCategory,
              customer,
              cicTeam,
              projectName,
              projectType,
              awsService: value,
              img_Url,
              demo_Url,
              description,
            };
            const result = onChange(modelFields);
            value = result?.awsService ?? value;
          }
          if (errors.awsService?.hasError) {
            runValidationTasks("awsService", value);
          }
          setAwsService(value);
        }}
        onBlur={() => runValidationTasks("awsService", awsService)}
        errorMessage={errors.awsService?.errorMessage}
        hasError={errors.awsService?.hasError}
        {...getOverrideProps(overrides, "awsService")}
      ></TextField>
      <TextField
        label="Img url"
        isRequired={false}
        isReadOnly={false}
        value={img_Url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectCategory,
              customer,
              cicTeam,
              projectName,
              projectType,
              awsService,
              img_Url: value,
              demo_Url,
              description,
            };
            const result = onChange(modelFields);
            value = result?.img_Url ?? value;
          }
          if (errors.img_Url?.hasError) {
            runValidationTasks("img_Url", value);
          }
          setImg_Url(value);
        }}
        onBlur={() => runValidationTasks("img_Url", img_Url)}
        errorMessage={errors.img_Url?.errorMessage}
        hasError={errors.img_Url?.hasError}
        {...getOverrideProps(overrides, "img_Url")}
      ></TextField>
      <TextField
        label="Demo url"
        isRequired={false}
        isReadOnly={false}
        value={demo_Url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectCategory,
              customer,
              cicTeam,
              projectName,
              projectType,
              awsService,
              img_Url,
              demo_Url: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.demo_Url ?? value;
          }
          if (errors.demo_Url?.hasError) {
            runValidationTasks("demo_Url", value);
          }
          setDemo_Url(value);
        }}
        onBlur={() => runValidationTasks("demo_Url", demo_Url)}
        errorMessage={errors.demo_Url?.errorMessage}
        hasError={errors.demo_Url?.hasError}
        {...getOverrideProps(overrides, "demo_Url")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              projectCategory,
              customer,
              cicTeam,
              projectName,
              projectType,
              awsService,
              img_Url,
              demo_Url,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
