import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import { IpLokupResponse } from '../../entity/ipLookup.entity';
import { IpLookupService } from '../../services/ipLookup.service';

export class IpLookupRoute {

  /**
   *
   * Route for authenticate
   * @param req
   * @param res
   * @param next
   */
  static async getIpLokup(req: Request, res: Response, next: NextFunction) {
    const { ip } = req.body;

    if (!ip) {
      res.status(400).send('Bad Request').end();
      return;
    }

    const ipAddress = await IpLookupService.GetIpAddress(ip);

    if (ipAddress) {
      res.status(200).send(ipAddress).end();
      return;
    }

    try {
      const ipData: IpLokupResponse = await axios.get(`http://ipwho.is/${ip}`);

      if (!ipData || !ipData.success) {
        res.status(500).send(ipData?.message || 'IP Lokup server error').end();
      }

      await IpLookupService.CreateIpAddress(ipData);

      res.status(200).send(ipData).end();
    } catch (err) {
      res.status(500).end();
    }
  }

  /**
   *
   * Route for delete IP
   * @param req
   * @param res
   * @param next
   */
  static async deleteIp(req: Request, res: Response, next: NextFunction) {
    const { ip } = req.params;

    if (!ip) {
      res.status(400).send('Bad Request').end();
      return;
    }

    try {
      const count = await IpLookupService.deleteIp(ip);

      res.status(200).send(`deleted row(s): ${count}`).end();
    } catch (err) {
      res.status(500).end();
    }
  }
}
