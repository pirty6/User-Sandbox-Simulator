import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";

type FormContainerProps = {
  children: string | JSX.Element | JSX.Element[];
  backgroundColor?: string;
};

const useBaseFormContainerStyles = makeStyles({
  root: {
    boxSizing: "border-box",
    paddingTop: "24px",
    paddingBottom: "24px",
    paddingLeft: "48px",
    paddingRight: "48px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    height: "100%",
  },
});

export const FormContainer = React.memo((props: FormContainerProps) => {
  const baseFormStyle = useBaseFormContainerStyles();
  const backgroundColor = {
    backgroundColor: props.backgroundColor
      ? props.backgroundColor
      : tokens.colorBrandBackground,
  };
  return (
    <div className={baseFormStyle.root} style={backgroundColor}>
      {props.children}
    </div>
  );
});
