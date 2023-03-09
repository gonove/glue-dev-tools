const { inquirerMenu, leerInputs, loading, continuar } = require("./helpers/inquirer");
const { resetJobBookmark, triggerGlue } = require("./helpers/runcommands");

const main = async () => {

    let opt = "";

    do {
        // Espera a que mostarmenu tenga una respuesta por parte del usuario
        opt = await inquirerMenu();

        // RESET JOB BOOKMARK
        if (opt == 'reset' ) {

            const { dataset, unitbusiness } = await leerInputs(option='one');
            await resetJobBookmark( dataset, unitbusiness, done = true );
            await loading();
        }

        // TRIGGER GLUE JOB
        if (opt == 'trigger' ) {

            const { dataset, unitbusiness, date } = await leerInputs(option='one');
            await triggerGlue( dataset, unitbusiness, date, done = true )
            await loading();

        }

        // ALL
        if ( opt.includes( 'reset' ) && opt.includes( 'trigger' ) ) {

            const {dataset, unitbusiness, date } = await leerInputs(option='all');

            Promise.all(
                [
                    resetJobBookmark( dataset, unitbusiness, done = false ),
                    triggerGlue( dataset, unitbusiness, date, done = true )
                ])
            await loading();
        }

    } while (opt !== 0);
};

main();