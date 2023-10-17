import { Hercai } from "hercai";

// New instance
const apiInstance = new Hercai();

export async function getResponse(input: string) {
  const serverRequest = await apiInstance.question({
    model: "v2",
    content: input,
  });
  const { reply } = serverRequest;
  return reply;
}
