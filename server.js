const express = require(`express`);
const path = require(`path`);
const logger = require(`./middleware/logger`);
const morgan = require(`morgan`);
const colors = require(`colors`);
const cookieParser = require(`cookie-parser`);
const fileupload = require(`express-fileupload`);
const connectDB = require(`./config/db`);
const errorHandler = require(`./middleware/error`);

require(`dotenv`).config({path: `./config/config.env`}); // for environment variables

connectDB();

// route files
const bootcamps = require(`./routes/bootcamps`);
const courses = require(`./routes/courses`);
const auth = require(`./routes/auth`);

const app = express();

// Body Parsere
app.use(express.json());

app.use(cookieParser());

// loggere in dev environment
if(process.env.NODE_ENV === `development`) {
    app.use(morgan(`dev`));
}

// file upload
app.use(fileupload());

app.use(express.static(path.join(__dirname,`public`)));


// Mount routers
app.use(`/api/v1/bootcamps` , bootcamps);
app.use(`/api/v1/courses` , courses);
app.use(`/api/v1/auth` , auth);


app.get("/" , (req , res) => {
    res.sendStatus(400);
})

app.use(errorHandler);

const server = app.listen(process.env.PORT || 5000 , () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold)
});

// Handle unhandled promise rejection
process.on(`unhandledRejection`, (err, promise) => {
    console.log(`Error =====> ${err.message}`.red);
    // close server and exit process
    server.close(() => process.exit(1));
})