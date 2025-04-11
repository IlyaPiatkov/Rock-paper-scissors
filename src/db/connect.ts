import config from "config";
import mongoose from "mongoose";

import {log} from "../logger"


const DB_URL = config.get('mongoUri') as string;

export const connect = async () => {
    try {
        await mongoose.connect(DB_URL)

        log.info("Database connected")

    } catch (error) {
        log.error("Database error", error)

        process.exit(1)
    }
}