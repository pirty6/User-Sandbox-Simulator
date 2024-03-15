import React from "react";
import { makeStyles } from "@fluentui/react-components";
import {
  FormContainer,
  FormInput,
  RandomButton,
} from "../BaseComponents/index.ts";

const useFormStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  firstForm: {
    display: "flex",
  },
  column: {
    flexGrow: 2,
  },
  button: {
    width: 0,
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
});

export type BasicData = {
  name: string;
  age: string;
  gender: string;
  occupation: string;
  countryResidence: string;
  countryOrigin: string;
  income: string;
  householdSize: string;
};

type BasicInformationProps = {
  updateData: (entry: { basicData: BasicData }) => void;
  data: BasicData;
};

export const BasicInformation = React.memo((props: BasicInformationProps) => {
  const style = useFormStyles();

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, data: string) => {
      const updatedData = {
        ...props.data,
        [data]: event.target.value,
      };

      props.updateData({ basicData: updatedData });
    },
    [props],
  );

  return (
    <div className={style.root}>
      <div>
        <FormContainer>
          <div className={style.firstForm}>
            <div className={style.column}>
              <FormInput
                id={"name"}
                label={"Name"}
                value={props.data.name}
                onChange={(event) => onChange(event, "name")}
              />
              <FormInput
                id={"age"}
                label={"Age"}
                value={props.data.age}
                onChange={(event) => onChange(event, "age")}
              />
              <FormInput
                id={"gender"}
                label={"Gender"}
                value={props.data.gender}
                onChange={(event) => onChange(event, "gender")}
              />
              <FormInput
                id={"occupation"}
                label={"Occupation"}
                value={props.data.occupation}
                onChange={(event) => onChange(event, "occupation")}
              />
              <FormInput
                id={"countryResidence"}
                label={"Country of Residence"}
                value={props.data.countryResidence}
                onChange={(event) => onChange(event, "countryResidence")}
              />
            </div>
            <div className={style.button}>
              <RandomButton />
            </div>
          </div>
        </FormContainer>
      </div>

      <div>
        <FormContainer>
          <FormInput
            id={"countryOrigin"}
            label={"Country of Origin"}
            value={props.data.countryOrigin}
            onChange={(event) => onChange(event, "countryOrigin")}
          />
          <FormInput
            id={"income"}
            label={"Annual Household Income"}
            value={props.data.income}
            onChange={(event) => onChange(event, "income")}
          />
          <FormInput
            id={"householdSize"}
            label={"Household Size"}
            value={props.data.householdSize}
            onChange={(event) => onChange(event, "householdSize")}
          />
        </FormContainer>
      </div>
    </div>
  );
});
