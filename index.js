const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

app.use(express.json());

/* ---------------- Swagger Config ---------------- */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nirob Backend API',
      version: '1.0.0',
      description: 'Simple API with Swagger',
    },
  },

  // 🔥 IMPORTANT FIX
  apis: ["./index.js"]
};

const specs = swaggerJsdoc(options);
console.log(JSON.stringify(specs, null, 2));

/* ---------------- Swagger UI ---------------- */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, { swaggerOptions: { url: '/swagger.json' } }));
app.get('/swagger.json', (req, res) => res.json(specs));

/* ---------------- Routes ---------------- */

/**
 * @swagger
 * /hi:
 *   get:
 *     summary: Get Home
 *     responses:
 *       200:
 *         description: OK
 */
app.get('/hi', (req, res) => {
  res.send('Hello Backend 🚀');
});

/**
 * @swagger
 * /about:
 *   get:
 *     summary: About Page
 *     responses:
 *       200:
 *         description: OK
 */
app.get('/about', (req, res) => {
  res.send('About Page');
});

/**
 * @swagger
 * /contact:
 *   get:
 *     summary: Contact Page
 *     responses:
 *       200:
 *         description: OK
 */
app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create User
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
 *         description: User created
 */
app.post('/user', (req, res) => {
  res.json({
    message: 'User received',
    data: req.body,
  });
});

/* ---------------- Server ---------------- */
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});