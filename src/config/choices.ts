import { ChoiceOptions } from "inquirer";

export const choices: ChoiceOptions[] = [
  {
    name: "Use your the OpenAI API Key? (GPT 3.5)",
    value: "option_1",
    type: "choice",
  },
  {
    name: "Search with the free? (Includes Herc.AI)",
    value: "option_2",
    type: "choice",
  },
];
