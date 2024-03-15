import OpenAI from "openai";
import { ChatCompletion } from "openai/resources";
import {
  ChatCompletionChunk,
  ChatCompletionCreateParamsBase,
} from "openai/resources/chat/completions";
import { Stream } from "openai/streaming";

const model = "gpt-3.5-turbo";
const openAI = new OpenAI({ apiKey: process.env.REACT_APP_API_TOKEN, dangerouslyAllowBrowser: true });

export async function handleRequest(
  requests: string[],
): Promise<Stream<ChatCompletionChunk> | ChatCompletion> {
  const messages: ChatCompletionCreateParamsBase["messages"] = requests.map(
    (request) => ({
      role: "system",
      content: request,
    }),
  );

  const apiRequest: ChatCompletionCreateParamsBase = {
    messages,
    model,
  };

  const response = await openAI.chat.completions.create(apiRequest);
  return response;
}
