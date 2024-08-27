const llmService = require('../services/llmService');
const readingService = require('../services/readingService');
import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { UploadRequestBody } from '@/types';


export async function uploadImage(req: UploadRequestBody, res: Response) {
    const { image, customer_code, measure_datetime, measure_type } = req
  

    await uploadService.validateImage(req)


    // Call LLM service to process the image
    const { link, guid, value } = await llmService.processImage(image, measure_type);

    
    return res.status(httpStatus.OK).send({ link, guid, value });
  }
  



const uploadImage = async (req, res) => {
  try {
    const { imageBase64, type } = req.body;

    if (!imageBase64 || !type) {
      return res.status(400).json({ error: 'Image base64 and type are required.' });
    }

    // Validate base64 format
    const validBase64Pattern = /^data:image\/[a-zA-Z]+;base64,/;
    if (!validBase64Pattern.test(imageBase64)) {
      return res.status(400).json({ error: 'Imagem base64 não valida    .' });
    }

    // Check if reading already exists for this month and type
    const readingExists = await readingService.checkReadingExists(type);
    if (readingExists) {
      return res.status(409).json({ error: 'Leitura do mês já realizada.' });
    }

    // Call LLM service to process the image
    const { link, guid, value } = await llmService.processImage(imageBase64);

    // Respond with the result
    res.json({ link, guid, value });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

export = {
  uploadImage
}; 