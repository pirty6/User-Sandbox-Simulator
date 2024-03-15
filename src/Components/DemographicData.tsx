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
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    boxSizing: "border-box",
    paddingTop: "48px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
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
    <FormContainer>
      <div className={style.header}>
        <Title3>Reliance on Demographic Data</Title3>
        <RandomButton />
      </div>
      {createForm(inputDataNames)}
    </FormContainer>
  );
});
