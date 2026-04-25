const express = require('express');
const app = express();

app.use(express.json());

const swaggerUi = require('swagger-ui-express');
const specs = require('./docs/swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// routes
const userRoutes = require('./routes/user.routes');
app.use('/api', userRoutes);

module.exports = app;