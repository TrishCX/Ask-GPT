export default async function simulateChat(message: string) {
  for (let i = 0; i < message.length; i++) {
    setTimeout(() => {
      process.stdout.write(message[i]);

      if (i === message.length - 1) {
        process.stdout.write("\n");
      }
    }, i * 10);
  }
}
