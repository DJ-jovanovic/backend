import { body, param, ValidationChain } from 'express-validator';

export const ipLookupSanitizer: ValidationChain[] = [
  body('ip')
    .isIP().withMessage('the IP address is not valid')
];

export const deleteIpLookupSanitizer: ValidationChain[] = [
  param('ip')
    .isIP().withMessage('the IP address is not valid')
];
