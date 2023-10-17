import inquirer from "inquirer";
import { Responses } from "../../@types/index.js";
import { clearShell } from "../../commands/index.js";
import { choices } from "../../config/index.js";

export default async function useInquirer() {
  clearShell();
  const choice = await inquirer.prompt({
    name: "choices_",
    type: "list",
    message: "What do you want to go for.",
    choices: [...choices],
  });
  return choice.choices_ as Responses;
}
