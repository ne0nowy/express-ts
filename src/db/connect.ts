import mongoose from "mongoose";
import config from "config";
import log from '../logger';

function connect() {
    const dbUri = config.get('dbUri') as string;

    return mongoose.connect(dbUri, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            log.info('Mongoose database connected!');
        })
        .catch(err => {
            log.error("Database error:", err);
            process.exit(1);
        })
}

export default connect;