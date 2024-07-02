import { configDotenv } from 'dotenv'
import winston, { transports } from 'winston'
const {node_env} =configDotenv

const niveles = {
    nivel: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5
    },
    colors: {
        fatal: "red",
        error: "yellow",
        warning: "blue",
        info: "green",
        http: "magenta",
        debug: "white"
    }
}
const loggerDevelopment = winston.createLogger({
    levels: niveles,
    transports: [
        new winston.transports.Console({
            level: "debug"
        })
    ]
})
const loggerProduction = winston.createLogger({
    levels: niveles,
    transports: [
        new winston.transports.Console({
            level: "http",
            format: winston.format.combine(
                winston.format.colorize({ colors: niveles.colors }),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: "./errors.log",
            level: "error"
        })

    ]
})
const logger = node_env === "production" ? loggerProduction: loggerDevelopment;

const addLogger = (req, res, next) => {
    req.logger = logger;
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
    next()
}
export default addLogger