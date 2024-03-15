import OpenAI from "openai";
import { ChatCompletion } from "openai/resources";
import {
  ChatCompletionChunk,
  ChatCompletionCreateParamsBase,
} from "openai/resources/chat/completions";
import { Stream } from "openai/streaming";
import { API_KEY, MODEL } from "./constants.ts";

const openAI = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

export async function handleRequest(
  requests: string[],
): Promise<Stream<ChatCompletionChunk> | ChatCompletion> {
  const messages: ChatCompletionCreateParamsBase["messages"] = requests.map((request) => ({
    role: "system", content: request 
  }));
  
  const apiRequest: ChatCompletionCreateParamsBase = {
    messages,
    model: MODEL,
  };

  const response = await openAI.chat.completions.create(apiRequest);
  return response;
}