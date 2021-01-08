import * as dotenv from 'dotenv';

dotenv.config({
   path: '.env',
});

const config = {
   port: process.env.PORT,
   mongoURL: process.env.MONGO_URL,
}

export default config;
