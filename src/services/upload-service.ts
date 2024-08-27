import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { UploadRequestBody } from '@/types';



export async function validateImage(req: UploadRequestBody, res: Response) {
        try {
            const { image, customer_code, measure_datetime, measure_type } = req
      
          if (!image || !measure_type) {
            return res.status(400).json({ error: 'Image base64 and type are required.' });
          }
      
          // Validação do formato base64
          const validBase64Pattern = /^data:image\/[a-zA-Z]+;base64,/;
          if (!validBase64Pattern.test(image)) {
            return res.status(400).json({ error: 'Imagem base64 não valida    .' });
          }
      
          // Checcando se a consulta ja existe
          const readingExists = await readingService.checkReadingExists(type);
          if (readingExists) {
            return res.status(409).json({ error: 'Leitura do mês já realizada.' });
          }
      
          // Chamando a LLM para processar a imagem
          const { link, guid, value } = await llmService.processImage(imageBase64);
      
          
          res.status(httpStatus.OK).json({ link, guid, value });
        } catch (error) {
          console.error('Error:', error);
          res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error.' });
        }
}