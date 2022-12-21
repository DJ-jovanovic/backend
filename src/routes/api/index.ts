import express, { Router } from 'express';
import { deleteIpLookupSanitizer, ipLookupSanitizer } from '../sanitizers/ipLookup.sanitizer';
import { IpLookupRoute } from './ipLookup.route';

const v1 = Router();
const baseUrl = '/api/backend/v1';

v1.use(express.json());

v1.post(`${baseUrl}/ip_lookup`, ipLookupSanitizer, IpLookupRoute.getIpLokup);
v1.delete(`${baseUrl}/ip_lookup/:ip`, deleteIpLookupSanitizer, IpLookupRoute.deleteIp);

export default v1;
