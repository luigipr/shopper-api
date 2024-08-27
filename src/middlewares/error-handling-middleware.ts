import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { RequestError} from '@/types';

export function handleApplicationErrors(
  err: RequestError,
  _req: Request,
  res: Response,
  next: NextFunction,
) {

  if (err.error_code === 'INVALID_TYPE') {
    return res.status(httpStatus.BAD_REQUEST).send({
        error_code: err.error_code,
        error_description: err.error_description,
    });
  }

  if (err.error_code === 'INVALID_DATA') {
    return res.status(httpStatus.BAD_REQUEST).send({
        error_code: err.error_code,
        error_description: err.error_description,
    });
  }

  if (err.error_code === 'INVALID_DATA') {
    return res.status(httpStatus.BAD_REQUEST).send({
        error_code: err.error_code,
        error_description: err.error_description,
    });
  }

  if (err.error_code === 'CONFIRMATION_DUPLICATE' || 'DOUBLE_REPORT') {
    return res.status(httpStatus.CONFLICT).send({
        error_code: err.error_code,
        error_description: err.error_description,
    });
  }
  if (err.error_code === "MEASURE_NOT_FOUND" || "MEASURES_NOT_FOUND") {
    return res.status(httpStatus.NOT_FOUND).send({
        error_code: err.error_code,
        error_description: err.error_description,
    });
  }
}


