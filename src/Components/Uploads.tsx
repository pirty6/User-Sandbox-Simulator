import React from "react";
import { FormContainer, FormInput } from "../BaseComponents/index.ts";
import { Title3 } from "@fluentui/react-components";

export const Uploads = React.memo((props) => {
  return (
    <FormContainer>
      <Title3>Sites to Analyze</Title3>
      <FormInput
        id={"upload1"}
        placeholderText="Upload JPG, PNG, PDF"
        size="large"
      />
      <FormInput
        id={"upload2"}
        placeholderText="Upload JPG, PNG, PDF"
        size="large"
      />
      <FormInput
        id={"upload3"}
        placeholderText="Upload JPG, PNG, PDF"
        size="large"
      />
    </FormContainer>
  );
});
