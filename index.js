const { inquirerMenu, leerInputs, loading, continuar } = require("./helpers/inquirer");
const { resetJobBookmark, triggerGlue } = require("./helpers/runcommands");
// const { readDB } = require("./helpers/saveFile");


// const Tools = require('./models/tools');

const main = async () => {

    let opt = "";

    do {
        // Espera a que mostarmenu tenga una respuesta por parte del usuario
        opt = await inquirerMenu();

        // RESET JOB BOOKMARK
        if (opt == 'reset' ) {

            const dataset = await leerInputs("dataset:");
            const unitbusiness = await leerInputs("unitbusiness:");
            // const date = await leerInputs("date:");

            await resetJobBookmark( dataset, unitbusiness, done = true );

        }

        // TRIGGER GLUE JOB
        if (opt == 'trigger' ) {

            const dataset = await leerInputs("dataset:");
            const unitbusiness = await leerInputs("unitbusiness:");
            const date = await leerInputs("date:");
            // const bucket_profile = await leerInputs("bucket_profile (dev):");

            await triggerGlue( dataset, unitbusiness, date, done = true )

        }

        // ALL
        if ( opt.includes( 'reset' ) && opt.includes( 'trigger' ) ) {

            const dataset = await leerInputs("dataset:");
            const unitbusiness = await leerInputs("unitbusiness:");
            const date = await leerInputs("date:");
            // const bucket_profile = await leerInputs("bucket_profile (dev):");

            Promise.all( [ resetJobBookmark( dataset, unitbusiness, done = false ), triggerGlue( dataset, unitbusiness, date, done = true ) ] )
        }

        await loading();

    } while (opt !== "0");
};

main();