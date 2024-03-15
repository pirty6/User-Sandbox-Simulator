import React from "react";
import {
  FormContainer,
  FormInput,
} from "../BaseComponents/index.ts";

export type ExtraData = {
  countryOrigin: string;
  income: string;
  householdSize: string;
}

type BasicInformationProps = {
  updateData: (entry: { extraData: ExtraData }) => void;
  data: ExtraData;
};

const dataLabels = ['Country of Origin', 'Annual Household Income', 'Household Size'];

export const ExtraInformation = React.memo((props: BasicInformationProps) => {

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, data: string) => {
      const updatedData = {
        ...props.data,
        [data]: event.target.value,
      };

      props.updateData({ extraData: updatedData });
    },
    [props],
  );

  const createForm = React.useCallback((data: ExtraData, dataLabels: string[]) => {
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
      <FormContainer>
        {createForm(props.data, dataLabels)}
      </FormContainer>
  );
});
