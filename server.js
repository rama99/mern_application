const express = require(`express`);
require(`dotenv`).config({path: `./config/config.env`}); // for environment variables

const app = express();

app.listen(process.env.PORT || 5000 , () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
});