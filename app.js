// npm i express dotenv ejs mongoes multer cookie-parser validator jsonwebtoken bcrypt http-errors

// external imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

// internal imports
const {
    notFoundHandler,
    errorHandler
} = require('./middleware/common/errorHandler');
const loginRouter = require('./router/loginRouter');
const registerRouter = require('./router/userRouter');
const inboxRouter = require('./router/inboxRouter');

const app = express();
dotenv.config();

// mongoose connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Request parsers
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// express session
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: true
    })
);

// enable flash messages
app.use(flash());

// routing setup
app.use('/', loginRouter);
app.use('/users', registerRouter);
app.use('/inbox', inboxRouter);

// 404 not found handling 
app.use(notFoundHandler);
// default error handling
app.use(errorHandler);

// app listening
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});