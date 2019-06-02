const winston = require('winston');

const printLogFormat = winston.format.printf((info) => {
    // return `[${info.timestamp}] ${info.level}: ${info.message}`;
    return `${info.level}: ${info.message}`;
})

const options = {
    levels: {
        fatal: 0,
        error: 1,
        warn: 2,
        success: 3,
        info: 4,
        debug: 5
    },
    colors: {
        fatal: 'red',
        error: 'red',
        warn: 'orange',
        success: 'green',
        info: 'blue',
        debug: 'blue'
    }
}

const transports = {
    console: new winston.transports.Console({
        level: 'debug',
        format: winston.format.combine(
            winston.format.timestamp({ format: `YYYY-MM-DD HH:mm:ss` }),
            winston.format.colorize(),
            winston.format.splat({ fillExcept: ['message', 'level', 'timestamp'] }),
            printLogFormat
        )
    })
}

const logger = winston.createLogger({
    levels: options.levels,
    transports: transports.console
})

module.exports = logger