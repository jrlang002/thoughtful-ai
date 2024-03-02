import yargs from 'yargs';
import { sort } from './index'

// Define command-line options and arguments using yargs
const argv = yargs
    .option('width', {
        alias: 'w',
        description: 'Width',
        type: 'string',
        demandOption: true
    })
    .option('height', {
        alias: 'h',
        description: 'Height',
        type: 'string',
        demandOption: true
    })
    .option('length', {
        alias: 'l',
        description: 'Length',
        type: 'string',
        demandOption: true
    })
    .option('mass', {
        alias: 'm',
        description: 'Mass',
        type: 'string',
        demandOption: true
    })
    .argv;

const params = {
    // @ts-expect-error argv type cast
    width: argv.width as string,
    // @ts-expect-error argv type cast
    height: argv.height as string,
    // @ts-expect-error argv type cast
    length: argv.length as string,
    // @ts-expect-error argv type cast
    mass: argv.mass as string,
};

sort( Number( params.width ), Number( params.height ), Number( params.length ), Number( params.mass ) )