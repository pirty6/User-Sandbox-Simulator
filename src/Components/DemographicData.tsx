import { Title3, makeStyles } from "@fluentui/react-components";
import React from "react";
import {
  FormContainer,
  FormRoundButtons,
  RandomButton,
} from "../BaseComponents/index.ts";

const inputDataNames = [
  "US Census (ACS)",
  "World Bank Open",
  "DSDR Project",
  "UN Stats Division",
];

const useStyles = makeStyles({
  button: {
    position: "absolute",
    top: "4px",
    right: "4px",
  },
  content: {
    boxSizing: "border-box",
    paddingTop: "48px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  form: {
    height: "100%",
    position: "relative",
  },
});

export const DemographicData = React.memo((props) => {
  const style = useStyles();

  const createForm = React.useCallback(
    (inputNames: string[]) => {
      return (
        <div className={style.content}>
          {inputNames.map((name, index) => (
            <FormRoundButtons label={name} key={index} />
          ))}
        </div>
      );
    },

    [style],
  );

  return (
    <div className={style.form}>
      <FormContainer>
        <Title3>Reliance on Demographic Data</Title3>
        <div className={style.button}>
          <RandomButton />
        </div>
        {createForm(inputDataNames)}
      </FormContainer>
    </div>
  );
});
