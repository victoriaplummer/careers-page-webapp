import * as React from "react";
import * as Types from "./types";

declare function TextInputBlock(props: {
  as?: React.ElementType;
  ref?: Types.Devlink.RuntimeProps;
  inputLabel?: React.ReactNode;
  inputPlaceholder?: React.ReactNode;
}): React.JSX.Element;
