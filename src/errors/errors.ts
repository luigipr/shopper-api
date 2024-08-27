import { ResponseError } from '@/types';

export function invalidData(dado: string): ResponseError {
  return {
    error_code: 'INVALID_DATA',
    error_description: `O ${dado} fornecidos no corpo da requisição é inválido`,
  }
}

export function doubleReport(): ResponseError {
    return {
        error_code: "DOUBLE_REPORT",
        error_description: "Leitura do mês já realizada"
    }
}

export function measureNotFound(): ResponseError {
    return {
        error_code: "MEASURE_NOT_FOUND",
        error_description: "Nenhuma leitura encontrada"
    }
}

export function measuresNotFound(): ResponseError {
    return {
        error_code: "MEASURES_NOT_FOUND",
        error_description: "Nenhuma leitura encontrada"
    }
}

export function ConfirmationDuplicate(): ResponseError {
    return {
        error_code: "CONFIRMATION_DUPLICATE",
        error_description: "Leitura do mês já realizada"
    }
}

export function invalidType(): ResponseError {
    return {
        error_code: "INVALID_TYPE",
        error_description: "Tipo de medição não permitida"
    }
}