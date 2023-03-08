// https://www.npmjs.com/package/inquirer
const inquirer = require('inquirer');
require("colors");

const preguntas = [
  {
    type: "checkbox",
    name: "opcion",
    message: "¿Qué desea hacer? [Ctrl + c para salir]\n",
    choices: [
      {
        value: "reset",
        name: ` ${"1.".green} Reset Job Bookmark`,
      },
      {
        value: "trigger",
        name: ` ${"2.".green} Trigger Glue Job`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("\n");
  console.log("=====================".cyan);
  console.log("❤️  GLUE-DEV-TOOLS ❤️ ".white.bold);
  console.log("=====================\n".cyan);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const loading = async () => {
  const questions = [
    {
      type: "message",
      name: "enter",
      message: `${"Loading".rainbow} ⌛️\n`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(questions);
};

// Leer lo que el usuario escribe al crear una lista
const leerInputs = async (message) => {
  const question = [
    {
      type: "input",
      name: "info",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor 🤖";
        } else {
          return true;
        }
      },
    },
  ];

  const { info } = await inquirer.prompt(question);
  return info;
};

const continuar = async() => {

  const question = [
    {
      type : 'input',
      name : 'enter',
      message: `Presione ${"enter".green} para continuar.`,
    }
  ];

  console.log("\n");
  await inquirer.prompt(question);

}


module.exports = {
  continuar,
  inquirerMenu,
  loading,
  leerInputs,
};
