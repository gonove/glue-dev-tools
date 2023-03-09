// https://www.npmjs.com/package/inquirer
const inquirer = require('inquirer');
const inquirerPrompt = require('inquirer-autocomplete-prompt');
const { searchDataset, searchUnitBusiness } = require('./searchs');
require("colors");

inquirer.registerPrompt('autocomplete', inquirerPrompt);

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
const leerInputs = async ( option ) => {

  if (option === 'all') {
    const data = [
      {
        type: 'autocomplete',
        suggestOnly: false,
        searchText: 'Buscando en db...',
        emptyText: 'No se encontro resultados, verificar db.',
        name: "dataset",
        message : "dataset:",
        validate(value) {
          if (value.length === 0) {
            return "Por favor ingrese un valor 🤖";
          } else {
            return true
          }
        },
        source: searchDataset,
      },
      {
        type: 'autocomplete',
        suggestOnly: false,
        searchText: 'Buscando en db...',
        emptyText: 'No se encontro resultados, verificar db.',
        name: "unitbusiness",
        message : "unitbusiness:",
        validate(value) {
          if (value.length === 0) {
            return "Por favor ingrese un valor 🤖";
          } else {
            return true;
          }
        },
        source: searchUnitBusiness
      },
      {
        type: 'input',
        name: "date",
        message : "date:",
        validate(value) {
          if (value.length === 0) {
            return "Por favor ingrese un valor 🤖";
          } else {
            return true;
          }
        },
      },
    ];

    const up = await inquirer.prompt(data);
    return up;
  }

  const data = [
    {
      type: 'autocomplete',
      suggestOnly: false,
      searchText: 'Buscando en db...',
      emptyText: 'No se encontro resultados, verificar db.',
      name: "dataset",
      message : "dataset:",
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor 🤖";
        } else {
          return true
        }
      },
      source: searchDataset,
    },
    {
      type: 'autocomplete',
      suggestOnly: false,
      searchText: 'Buscando en db...',
      emptyText: 'No se encontro resultados, verificar db.',
      name: "unitbusiness",
      message : "unitbusiness:",
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor 🤖";
        } else {
          return true;
        }
      },
      source: searchUnitBusiness
    },
  ];

  const up = await inquirer.prompt(data);
  return up;
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
