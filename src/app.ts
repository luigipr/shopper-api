import 'express-async-errors';
import express from 'express';
import cors from "cors";
import {uploadRouter} from '@/routers/upload-router';



const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/upload', uploadRouter)
  .use('/auth', authenticationRouter)
  .use(handleApplicationErrors);

const port = process.env.PORT ?? 4000;

app.listen(port, () => {
      /* eslint-disable-next-line no-console */
      console.log(`Server is listening on port ${port}.`);
    });

