import * as prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "name",
    message: "Enter the number:",
  });

  console.log(`Hi, ${response.name}! Nice to see you here 😊`);
})();
