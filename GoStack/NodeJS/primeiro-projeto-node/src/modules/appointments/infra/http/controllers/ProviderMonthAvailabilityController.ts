import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { month, year } = request.body;
    const { provider_id } = request.params;

    const listProviderMonthAvailability = container.resolve(
      ListProviderMonthAvailabilityService,
    );
    const availabolity = await listProviderMonthAvailability.execute({
      provider_id,
      month,
      year,
    });

    return response.status(201).json(availabolity);
  }
}
