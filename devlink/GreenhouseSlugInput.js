"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GreenhouseSlugInput.module.css";

export function GreenhouseSlugInput({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "container")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "row")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "col", "lg-6", "md-12")}
          tag="div"
        >
          <_Builtin.Paragraph>
            {
              'Want to see what this page would look like with your own organizations open roles? Just pop in the slug for your companies Greenhouse board and click "Try it out!" The page will reload and display your open roles. To learn how to do this yourself, visit the "How it works" page.'
            }
          </_Builtin.Paragraph>
          <_Builtin.FormWrapper>
            <_Builtin.FormForm
              className={_utils.cx(_styles, "updateslug_form")}
              name="wf-form-Update-slug-form"
              data-name="Update slug form"
              method="get"
              id="gh-slug-form"
            >
              <_Builtin.FormBlockLabel htmlFor="name">
                {"Your organization's Greenhouse slug"}
              </_Builtin.FormBlockLabel>
              <_Builtin.Block
                className={_utils.cx(_styles, "updateslug_flex")}
                tag="div"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "updateslug_input")}
                  name="slug"
                  maxLength={256}
                  data-name="slug"
                  placeholder='Try using "discord"'
                  disabled={false}
                  type="text"
                  required={true}
                  autoFocus={false}
                  id="gh-slug"
                />
                <_Builtin.FormButton
                  className={_utils.cx(_styles, "button", "form_button")}
                  type="submit"
                  value="Try it out!"
                  data-wait="Please wait..."
                />
              </_Builtin.Block>
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
    </_Component>
  );
}
