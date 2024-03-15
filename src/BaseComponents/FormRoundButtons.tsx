import { makeStyles, tokens, Label, Button } from "@fluentui/react-components";
import React from "react";

const useStyle = makeStyles({
  root: {
    boxSizing: "border-box",
    display: "flex",
    flexGrow: 1,
  },
  label: {
    flexGrow: 1,
    width: 0
  },
  buttons: {
    display: "flex",
    justifyContent: "space-evenly",
    flexGrow: 1,
  },
  button: {
    boxSizing: "border-box",
    minWidth: '40px',
    maxHeight: '40px',
    backgroundColor: tokens.colorCompoundBrandBackgroundHover,
  },
});

type FormInputProps = {
  label: string;
};

export const FormRoundButtons = React.memo((props: FormInputProps) => {
  const style = useStyle();

  return (
    <div className={style.root}>
      <div className={style.label}>
        <Label size="large">{props.label}</Label>
      </div>
      <div className={style.buttons}>
        <Button size='small' shape="circular" className={`${style.button}`}></Button>
        <Button size='small' shape="circular" className={`${style.button}`}></Button>
        <Button size='small' shape="circular" className={`${style.button}`}></Button>
        <Button size='small' shape="circular" className={`${style.button}`}></Button>
        <Button size='small' shape="circular" className={`${style.button}`}></Button>
      </div>
    </div>
  );
});
