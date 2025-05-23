"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GhTableBody.module.css";

export function GhTableBody({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "hidden")}
      grid={{
        type: "section",
      }}
      tag="section"
      data-gh="loading"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "row", "justify-center")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "col", "lg-4")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "loading")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="loading content"
              src="https://cdn.prod.website-files.com/68239a997374d28fa3724d87/68239a9a7374d28fa3724df6_loading.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
