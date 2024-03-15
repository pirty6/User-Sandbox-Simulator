import React from "react";
import "./App.css";
import {
  Button,
  FluentProvider,
  webDarkTheme,
} from "@fluentui/react-components";
import { ProfilePicture } from "./Components/ProfilePicture.tsx";
import { BasicInformation, BasicData } from "./Components/BasicInformation.tsx";
import { DemographicData } from "./Components/DemographicData.tsx";
import { QuestionData, Questions } from "./Components/Questions.tsx";
import { Uploads } from "./Components/Uploads.tsx";
import { handleRequest } from "./functions.ts";
import { Response } from "./Components/Response.tsx";
import { ExtraData, ExtraInformation } from "./Components/ExtraInformation.tsx";

function generateScripts(data: DataType): string[] {
  const basicDataScript = generateBasicInformationScript(data.basicData);
  const basicDataScriptPart2 = generateBasicInformationPart2Script(
    data.extraData,
  );

  const basicScript = `${basicDataScript} ${basicDataScriptPart2}`.trim();

  const humanizeScript = generateHumanizeAIScript(data.basicData.name);
  const questionsScript = generateQuestionsScript(data.questionData);

  const finalScript = [basicScript, humanizeScript, questionsScript];
  return finalScript.filter((script) => script.length > 0);
}

function generateBasicInformationScript(basicData: BasicData): string {
  const { name, age, gender, occupation, countryResidence } = basicData;
  const nameScript =
    name.length > 0 ? `Create a character profile for ${name}` : "";
  const ageScript = age.length > 0 ? `a ${age} year old` : "";
  const genderScript = gender.length > 0 ? `user of ${gender} gender` : "";
  const occupationScript =
    occupation.length > 0 ? `who works as a ${occupation},` : "";
  const countryResidenceScript =
    countryResidence.length > 0 ? `who lives in ${countryResidence}.` : "";
  return `${nameScript} ${ageScript} ${genderScript} ${occupationScript} ${countryResidenceScript}`.trim();
}

function generateBasicInformationPart2Script(extraData: ExtraData): string {
  const { countryOrigin, income, householdSize } = extraData;
  const countryResidenceScript =
    countryOrigin.length > 0 ? `They are from ${countryOrigin}` : "";
  const incomeScript =
    income.length > 0
      ? `their annual household income is currently ${income}`
      : "";
  const householdSizeScript =
    householdSize.length > 0
      ? `they live with ${Number(householdSize) - 1} more people`
      : "";
  return `${countryResidenceScript} ${incomeScript} ${householdSizeScript}`.trim();
}

function generateHumanizeAIScript(name: string): string {
  const question1 = `Imagine you are ${name}. What is ${name} thinking about right now?`;
  const question2 = `What did ${name} dream about last night?`;
  const question3 = `What is ${name} greatest hope in life?`;
  const question4 = `What are the contents of ${name} trash right now?`;
  return `${question1} ${question2} ${question3} ${question4}`;
}

function generateQuestionsScript(questionData: QuestionData): string {
  const array = Object.values(questionData);
  return array.join(" ").trim();
}

type DataType = {
  profilePicture: string;
  basicData: BasicData;
  extraData: ExtraData;
  questionData: QuestionData;
};

function App() {
  const [data, setData] = React.useState<DataType>({
    profilePicture: "",
    basicData: {
      name: "",
      age: "",
      gender: "",
      occupation: "",
      countryResidence: ""
    },
    extraData: {
      countryOrigin: "",
      income: "",
      householdSize: "",
    },
    questionData: {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
    },
  });
  const [response, setResponse] = React.useState<string[]>([]);

  const submitForm = React.useCallback(() => {
    if (data.basicData.name.length === 0) {
      alert("At least a name is needed");
      return;
    }

    const scripts = generateScripts(data);
    console.log(scripts);

    handleRequest(scripts).then((response) => {
      if ("choices" in response) {
        const choices = response.choices;
        const array: string[] = [];

        choices.forEach((choice) => {
          const content = choice.message.content;
          if (content) {
            array.push(content);
          }
        });

        setResponse(array);
      } else {
        console.log(response);
      }
    });
  }, [data, setResponse]);

  const updateData = React.useCallback(
    (entry: Partial<DataType>) => {
      const prevData = data;
      setData({
        ...prevData,
        ...entry,
      });
    },
    [data],
  );

  console.log(process.env.API_ID);

  return (
    <FluentProvider theme={webDarkTheme} className="container">
      <div className="content">
        <div className="row">
          <div className="column">
            <ProfilePicture profilePicture={data.profilePicture} />
          </div>
          <div className="column">
            <BasicInformation updateData={updateData} data={data.basicData} />
            <ExtraInformation updateData={updateData} data={data.extraData} />
          </div>
          <div className="column">
            <DemographicData />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Questions updateData={updateData} data={data.questionData} />
          </div>
          <div className="column">
            <Uploads />
          </div>
        </div>
        <div className="submit">
          <Button size="large" appearance="primary" onClick={submitForm}>
            Submit
          </Button>
        </div>
        <div>
          {response.length > 0 ? (
            <Response title="Character Profile" content={response} />
          ) : null}
        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
