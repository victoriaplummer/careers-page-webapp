"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GhTableHeaders.module.css";

export function GhTableHeaders({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "gh-listing_labels", "u-z-1")}
      grid={{
        type: "section",
      }}
      tag="section"
      aria-hidden="true"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "row", "role-heading")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "col", "u-mb-0")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "role-heading")}
              tag="div"
            >
              {"Role"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "col", "u-mb-0")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "role-heading")}
              tag="div"
            >
              {"Location"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
