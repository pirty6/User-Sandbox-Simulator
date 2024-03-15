import React from "react";
import { makeStyles } from "@fluentui/react-components";
import {
  FormContainer,
  FormInput,
  RandomButton,
} from "../BaseComponents/index.ts";

const useFormStyles = makeStyles({
  form: {
    position: "relative",
    marginBottom: "24px",
  },
  button: {
    position: "absolute",
    top: "4px",
    right: "4px",
  },
});

export type BasicData = {
  name: string;
  age: string;
  gender: string;
  occupation: string;
  countryResidence: string;
}

type BasicInformationProps = {
  updateData: (entry: { basicData: BasicData }) => void;
  data: BasicData;
};

const dataLabelsPart1 = ['Name', 'Age', 'Gender', 'Occupation', 'Country of Residence'];

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

  const createForm = React.useCallback((data: BasicData, dataLabels: string[]) => {
    return Object.entries(data).map((entry: [key: string, value: string], index) => {
      const key = entry[0];
      const value = entry[1];
      const label = dataLabels[index];

      return (
      <div key={key}>
        <FormInput
          id={key}
          label={label}
          value={value}
          onChange={(event) => onChange(event, key)}
        />
      </div>
      )
    });
  }, [onChange])

  return (
      <div className={style.form}>
        <FormContainer>
          <div>
           {createForm(props.data, dataLabelsPart1)}
          </div>
          <div className={style.button}>
            <RandomButton />
          </div>
        </FormContainer>
      </div>
  );
});
