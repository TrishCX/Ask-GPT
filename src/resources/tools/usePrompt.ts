import type { Choices } from "../../@types/index.js";
import inquirer from "inquirer";
import { simulateChat } from "../../commands/index.js";
import { getResponse, useOpenAI } from "../../handler/index.js";
import ora from "ora";

export default async function usePrompt(initialChoice: Choices) {
  const { isFree } = initialChoice;
  const initialInput = await inquirer.prompt({
    name: "message_",
    type: "input",
    message: "Send a message: ",
  });

  const spinner = ora().start();

  if (isFree === false) {
    const openAIResponse = (await useOpenAI(initialInput.message_)) as string;
    spinner.stop();
    return simulateChat(openAIResponse);
  } else {
    const hercAPIResponse = (await getResponse(
      initialInput.message_
    )) as string;
    spinner.stop();
    await simulateChat(hercAPIResponse);
  }
}
