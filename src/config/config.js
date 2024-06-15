import dotenv from 'dotenv'
import program from '../utils/commander';

const { mode } = program.opts
dotenv.config();

export default {
    port: process.env.PORT,
    mongoUrl,
    adminName,
    adminPassword,
}