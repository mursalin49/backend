const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const PORT = 3000;

app.use(express.json());

// Swagger config
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nirob Backend API',
      version: '1.0.0',
      description: 'Simple API with Swagger',
    },
  },
  apis: ['./index.js'], // IMPORTANT: same file
};

const specs = swaggerJsdoc(options);

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /hi:
 *   get:
 *     summary: Home route
 *     responses:
 *       200:
 *         description: Success
 */
app.get('/hi', (req, res) => {
  res.send('Hello Backend 🚀');
});

/**
 * @swagger
 * /about:
 *   get:
 *     summary: About page
 *     responses:
 *       200:
 *         description: Success
 */
app.get('/about', (req, res) => {
  res.send('This is About Page');
});

/**
 * @swagger
 * /contact:
 *   get:
 *     summary: Contact page
 *     responses:
 *       200:
 *         description: Success
 */
app.get('/contact', (req, res) => {
  res.send('My name is Nirob');
});

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       200:
 *         description: User created successfully
 */
app.post('/user', (req, res) => {
  const data = req.body;

  res.json({
    message: 'User received',
    data: data,
  });
});

// Server start (always last)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});