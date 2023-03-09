
const fuzzy = require('fuzzy');
const inquirer = require('inquirer');
const inquirerPrompt = require('inquirer-autocomplete-prompt');
const { dataset, unitbusiness } = require('../db/data');

inquirer.registerPrompt('autocomplete', inquirerPrompt);


const searchDataset = (answers, input = '') => {

    return new Promise((resolve) => {
      setTimeout(() => {
        const results = fuzzy.filter(input, dataset).map((el) => el.original);

        results.splice(5, 0, new inquirer.Separator());
        results.push(new inquirer.Separator());
        resolve(results);
      }, Math.random() * 470 + 30);
    });

}

const searchUnitBusiness = (answers, input = '') => {

  return new Promise((resolve) => {
    setTimeout(() => {
      const results = fuzzy.filter(input, unitbusiness).map((el) => el.original);

      results.splice(5, 0, new inquirer.Separator());
      results.push(new inquirer.Separator());

      resolve(results);

    }, Math.random() * 470 + 30);

  });

}


module.exports = { searchDataset, searchUnitBusiness }