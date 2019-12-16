const express = require(`express`);

// route files
const bootcamps = require(`./routes/bootcamps`);

require(`dotenv`).config({path: `./config/config.env`}); // for environment variables

const logger = require(`./middleware/logger`);
const morgan = require(`morgan`);

const app = express();

// loggere in dev environment
if(process.env.NODE_ENV === `development`) {
    app.use(morgan(`dev`));
}


// Mount routers
app.use(`/api/v1/bootcamps` , bootcamps);

app.get("/" , (req , res) => {
    res.sendStatus(400);
})

app.listen(process.env.PORT || 5000 , () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
});