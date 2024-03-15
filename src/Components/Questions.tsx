import React from "react";
import { Title3 } from "@fluentui/react-components";
import { FormInput, FormContainer } from "../BaseComponents/index.ts";

export type QuestionData = {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
};

type QuestionProps = {
  updateData: (entry: { questionData: QuestionData }) => void;
  data: QuestionData;
};

export const Questions = React.memo((props: QuestionProps) => {
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, data: string) => {
      const updatedData = {
        ...props.data,
        [data]: event.target.value,
      };

      props.updateData({ questionData: updatedData });
    },
    [props],
  );

  return (
    <FormContainer>
      <Title3>Questions for the User</Title3>
      <div>
        <FormInput
          id={"question1"}
          label={"Question 1"}
          placeholderText="What was the first thing you were drawn to and why?"
          value={props.data.question1}
          onChange={(event) => onChange(event, "question1")}
        />
        <FormInput
          id={"question2"}
          label={"Question 2"}
          placeholderText="What would you be most interested in clicking on?"
          value={props.data.question2}
          onChange={(event) => onChange(event, "question2")}
        />
        <FormInput
          id={"question3"}
          label={"Question 3"}
          placeholderText="What item would you consider purchasing (if any)?"
          value={props.data.question3}
          onChange={(event) => onChange(event, "question3")}
        />
        <FormInput
          id={"question4"}
          label={"Question 4"}
          placeholderText="Which site are you most comfortable navigating?"
          value={props.data.question4}
          onChange={(event) => onChange(event, "question4")}
        />
      </div>
    </FormContainer>
  );
});
