export interface UploadRequestBody {
    image: string;
    customer_code: string;
    measure_datetime: string;
    measure_type: 'WATER' | 'GAS';
}
  
export interface ResponseSuccess {
    image_url: string;
    measure_value: number;
    measure_uuid: string;
}
  
export interface RequestError {
    error_code: string;
    error_description: string;
}

