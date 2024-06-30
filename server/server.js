import express from 'express';
import cors from 'cors';
import miRuta from './src/routes/jobRoutes.js';
import { serverLog } from './src/middleware/middleware.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(serverLog);
app.use(cors());
app.use(express.json());
app.use('/', miRuta);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/usuarios`);
});