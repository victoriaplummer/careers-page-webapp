"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./OpenRolesHeading.module.css";

export function OpenRolesHeading({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "row", "align-center")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "col", "sm-12")}
            tag="div"
          >
            <_Builtin.Heading tag="h1">{"Our open roles"}</_Builtin.Heading>
            <_Builtin.Paragraph>
              {"Help us bring development superpowers to everyone."}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "col", "sm-12")}
            tag="div"
          >
            <_Builtin.FormWrapper>
              <_Builtin.FormForm
                className={_utils.cx(_styles, "form_wrapper")}
                name="wf-form-Department-Filter"
                data-name="Department Filter"
                method="get"
                id="wf-form-Department-Filter"
              >
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "u-sr-only")}
                  htmlFor="Filter-3"
                >
                  {"Department filter"}
                </_Builtin.FormBlockLabel>
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage>
                <_Builtin.Block tag="div">
                  {"Thank you! Your submission has been received!"}
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage>
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
