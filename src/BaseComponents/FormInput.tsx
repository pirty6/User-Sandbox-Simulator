import React from "react";
import {
  Input,
  InputOnChangeData,
  Label,
  makeStyles,
  shorthands,
  useId,
} from "@fluentui/react-components";

type FormInputProps = {
  id: string;
  label?: string;
  placeholderText?: string;
  size?: "small" | "medium" | "large";
  value?: string;
  onChange?:
    | ((
        ev: React.ChangeEvent<HTMLInputElement>,
        data: InputOnChangeData,
      ) => void)
    | undefined;
};

const useStyles = makeStyles({
  root: {
    // Stack the label above the field
    display: "flex",
    flexDirection: "column",
    // Use 2px gap below the label (per the design system)
    ...shorthands.gap("2px"),
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
    marginTop: "8px",
  },
});

export const FormInput = React.memo((props: FormInputProps) => {
  const styles = useStyles();
  const id = useId(props.id);

  return (
    <div className={`${styles.root} row-form`}>
      {props.label ? <Label htmlFor={id}>{props.label}</Label> : null}
      <Input
        id={id}
        appearance="filled-lighter"
        placeholder={props.placeholderText}
        size={props.size}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
});
