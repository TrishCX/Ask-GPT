import OpenAI from "openai";
import { session } from "../config/index.js";

const AI = new OpenAI({
  apiKey: session.API_KEY,
});

export async function useOpenAI(input: string) {
  const serverRequest = await AI.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  });
  const extractingMessage = serverRequest.choices[0]?.message;
  const { content } = extractingMessage;
  return content;
}
