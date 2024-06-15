import dotenv from 'dotenv'

dotenv.config();

export default {
    port: process.env.PORT,
    mongoUrl,
    adminName,
    adminPassword,
}