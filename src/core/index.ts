import clearShell from "../commands/clear.js";
import { useInquirer, usePrompt } from "../resources/index.js";

export async function implement() {
  const choice = await useInquirer();
  clearShell();
  return choice === "option_1"
    ? usePrompt({ isFree: false })
    : usePrompt({ isFree: true });
}
