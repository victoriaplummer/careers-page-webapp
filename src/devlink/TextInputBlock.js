"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TextInputBlock.module.css";

export function TextInputBlock({
  as: _Component = _Builtin.Block,
  ref = {},
  inputLabel = "Label",
  inputPlaceholder = "Placeholder",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "input-block")}
      id={_utils.cx(
        _styles,
        "w-node-_2b5961ce-5fed-b9df-1b9c-817ba5d6e9fb-a5d6e9fb"
      )}
      tag="div"
      {...ref}
    >
      <_Builtin.FormBlockLabel
        className={_utils.cx(_styles, "input-label")}
        htmlFor="First-name-3"
      >
        {inputLabel}
      </_Builtin.FormBlockLabel>
      <_Builtin.FormTextInput
        className={_utils.cx(_styles, "input", "dark")}
        name="First-name-3"
        maxLength={256}
        data-name="First Name 3"
        placeholder="First name"
        disabled={false}
        type="text"
        required={true}
        autoFocus={false}
        id="First-name-3"
      />
    </_Component>
  );
}
