const express = require(`express`);
const path = require(`path`);
const logger = require(`./middleware/logger`);
const morgan = require(`morgan`);
const colors = require(`colors`);
const cookieParser = require(`cookie-parser`);
const fileupload = require(`express-fileupload`);
const mongoSanitize = require(`express-mongo-sanitize`);
const helmet = require(`helmet`);
const xssClean = require(`xss-clean`);
const rateLimit = require(`express-rate-limit`);
const hpp = require(`hpp`);
const CORS = require(`cors`);

const connectDB = require(`./config/db`);
const errorHandler = require(`./middleware/error`);

require(`dotenv`).config({path: `./config/config.env`}); // for environment variables

connectDB();

// route files
const bootcamps = require(`./routes/bootcamps`);
const courses = require(`./routes/courses`);
const auth = require(`./routes/auth`);
const users = require(`./routes/users`);
const reviews = require(`./routes/reviews`);

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

// mongo sanitize
app.use(mongoSanitize());

// security headers
app.use(helmet());

// xss clean
app.use(xssClean());

// rate limit
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100000
})

app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// enable CORS
app.use(CORS());

app.use(express.static(path.join(__dirname,`public`)));


// Mount routers
app.use(`/api/v1/bootcamps` , bootcamps);
app.use(`/api/v1/courses` , courses);
app.use(`/api/v1/auth` , auth);
app.use(`/api/v1/users` , users);
app.use(`/api/v1/reviews` , reviews);

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