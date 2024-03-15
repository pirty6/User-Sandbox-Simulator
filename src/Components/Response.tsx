import React from "react";
import { Body1, Title3, makeStyles, tokens } from "@fluentui/react-components";
import { FormContainer } from "../BaseComponents/index.ts";

type ResponseProps = {
  title?: string;
  content: string[];
};

const useStyle = makeStyles({
  root: {
    paddingTop: '24px',
    paddingBottom: '24px'
  }
})

export const Response = React.memo((props: ResponseProps) => {
  const styles = useStyle();

  const generateText = React.useCallback(() => {
    return props.content.map((value) => (
      <Body1>{value}</Body1>
    ))
  }, [props.content]);

  return (
    <div className={styles.root}>
      <FormContainer backgroundColor={tokens.colorNeutralBackground6}>
        <div>
          {props.title ? <Title3>{props.title}</Title3> : <div />}
          {generateText()}
        </div>
      </FormContainer>
    </div>
  );
});
