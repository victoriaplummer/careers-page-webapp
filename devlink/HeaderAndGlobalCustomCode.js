"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeaderAndGlobalCustomCode.module.css";

export function HeaderAndGlobalCustomCode({
  as: _Component = _Builtin.Block,
  logoSlot,
}) {
  return (
    <_Component tag="header">
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "navbar")}
        tag="div"
        config={{
          animation: "default",
          collapse: "medium",
          docHeight: false,
          duration: 400,
          easing: "ease",
          easing2: "ease",
          noScroll: false,
        }}
      >
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "row",
              "align-center",
              "justify-space-between"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "col", "u-mb-0")}
              tag="div"
            >
              <_Builtin.NavbarBrand
                className={_utils.cx(_styles, "brand")}
                options={{
                  href: "https://webflow.com",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "u-sr-only")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">{"Webflow"}</_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block tag="div">{logoSlot}</_Builtin.Block>
              </_Builtin.NavbarBrand>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "col", "u-mb-0")}
              tag="div"
            >
              <_Builtin.NavbarMenu
                className={_utils.cx(_styles, "nav-menu")}
                tag="nav"
                role="navigation"
              >
                <_Builtin.List
                  className={_utils.cx(_styles, "nav-list")}
                  tag="ul"
                  unstyled={false}
                >
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "nav-list-item")}
                  >
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "nav-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Home"}
                    </_Builtin.NavbarLink>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "nav-list-item")}
                  >
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "nav-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      {"How it works"}
                    </_Builtin.NavbarLink>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "nav-list-item")}
                  >
                    <_Builtin.NavbarLink
                      className={_utils.cx(_styles, "nav-link")}
                      options={{
                        href: "https://webflow.com/made-in-webflow/website/greenhouse-jobs-attr",
                        target: "_blank",
                      }}
                    >
                      {"Clone this project"}
                    </_Builtin.NavbarLink>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "nav-list-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button")}
                      button={true}
                      block=""
                      options={{
                        href: "https://github.com/Webflow-Examples/greenhouse-jobs",
                        target: "_blank",
                      }}
                    >
                      {"Get the code"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                </_Builtin.List>
              </_Builtin.NavbarMenu>
              <_Builtin.NavbarButton
                className={_utils.cx(_styles, "menu-button")}
                tag="div"
              >
                <_Builtin.Icon
                  widget={{
                    type: "icon",
                    icon: "nav-menu",
                  }}
                />
              </_Builtin.NavbarButton>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
