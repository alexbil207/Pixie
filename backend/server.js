const express = require('express');
const cors = require('cors');
const path = require('path');
const expressSession = require('express-session');
const logger = require('./services/logger.service')
const port = process.env.PORT || 3030
const app = express();
const http = require('http').createServer(app);

const session = expressSession({
    secret: 'coding is amazing',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})
// Express App Config
app.use(express.json());
app.use(session);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

const authRoutes = require('./api/auth/auth.routes');
const userRoutes = require('./api/user/user.routes');
const webRoutes = require('./api/web/web.routes');
const templateRoutes = require('./api/template/template.routes');

// routes
const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware');
app.all('*', setupAsyncLocalStorage);



app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/web', webRoutes);
app.use('/api/template', templateRoutes);



app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})
