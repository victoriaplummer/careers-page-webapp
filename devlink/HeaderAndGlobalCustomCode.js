"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeaderAndGlobalCustomCode.module.css";

export function HeaderAndGlobalCustomCode({ as: _Component = _Builtin.Block }) {
  return (
    <_Component tag="header">
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0Abody%20%7B%0A%20%20-webkit-font-smoothing%3A%20antialiased%3B%0A%20%20-moz-font-smoothing%3A%20antialiased%3B%0A%20%20-o-font-smoothing%3A%20antialiased%3B%0A%7D%0A%0A%3A%3Aselection%20%7B%0A%20%20background%3A%20var(--clr--primary-600)%3B%0A%20%20color%3A%20var(--clr--neutral-100)%3B%0A%7D%0A%3A%3A-moz-selection%20%7B%0A%20%20background%3A%20var(--clr--primary-600)%3B%0A%20%20color%3A%20var(--clr--neutral-100)%3B%0A%7D%0A%0Ainput%2C%0Atextarea%2C%0Aselect%20%7B%0A%20%20-webkit-appearance%3A%20none%3B%0A%20%20-moz-appearance%3A%20none%3B%0A%20%20appearance%3A%20none%3B%0A%20%20border-radius%3A%200%3B%0A%20%20background-image%3A%20none%3B%0A%7D%0A%0A.line-clamp%20%7B%0A%20%20display%3A%20-webkit-box%3B%0A%20%20-webkit-line-clamp%3A%203%3B%0A%20%20-webkit-box-orient%3A%20vertical%3B%0A%20%20overflow%3A%20hidden%3B%0A%7D%0A%0Aa%20%7B%0A%20%20text-underline-position%3A%20under%3B%0A%20%20text-decoration-thickness%3A%200.1em%3B%0A%20%20text-underline-offset%3A%200.05em%3B%0A%7D%0A%0A.w-richtext%20%3E%20%3Afirst-child%20%7B%0A%20%20margin-top%3A%200%3B%0A%7D%0A%0A.w-richtext%20%3E%20%3Alast-child%2C%0A.w-richtext%20ol%20li%3Alast-child%2C%0A.w-richtext%20ul%20li%3Alast-child%20%7B%0A%20%20margin-bottom%3A%200%3B%0A%7D%0A%0A.nav-list%20%7B%0A%09list-style-type%3A%20none%3B%0A%7D%0A%3C%2Fstyle%3E" />
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
                <_Builtin.NotSupported _atom="DOM" />
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
