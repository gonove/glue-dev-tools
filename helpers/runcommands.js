const { exec } = require('node:child_process');
const { continuar } = require('./inquirer');
require('dotenv').config()

const resetJobBookmark = async( dataset, unitbusiness, done ) => {

    const command = `aws glue reset-job-bookmark --job-name sdlf-rnormativos-${dataset}-${unitbusiness}-glue-job --profile ${process.env.PROFILE_DEV}`;

    exec( command, (err, output) => {
        // once the command has completed, the callback function is called
        if (err) {
            console.error("No se pudo ejecutar el comando 💔: ", err)
            done ? continuar() : true
            return
        }

        console.log("\n Reset Bookmark ✅: \n".bold, output)
        done ? continuar() : true
    })


}

const triggerGlue = ( dataset, unitbusiness, date, done ) => {

    const command = `aws s3 cp s3://br-dm-dev-us-east-1-516175858025-raw/rnormativos/${dataset}/${unitbusiness}/DATE=${date}/${dataset}_${unitbusiness}_${date}.parquet \
    s3://br-dm-dev-us-east-1-516175858025-raw/rnormativos/${dataset}/${unitbusiness}/DATE=${date}/${dataset}_${unitbusiness}_${date}.parquet \
    --profile ${process.env.PROFILE_DEV}`

    exec( command, (err, output) => {
        // once the command has completed, the callback function is called
        if (err) {
            // log and return if we encounter an error
            console.error("No se pudo ejecutar el comando 💔: ", err)
            return
        }
        // log the output received from the command
        console.log("\n Trigger Glue Job ✅: \n".bold, output)
        done ? continuar() : true
    })

}

module.exports = { resetJobBookmark, triggerGlue }