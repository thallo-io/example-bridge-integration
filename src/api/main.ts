import express, { Express, Request, Response } from 'express';
import { CreditBlockDataDto } from './types/CreditBlockDataDto';
import { ProjectType } from './enums/ProjectType';
import { ProjectLocation } from './enums/ProjectLocation';
import { SDG } from './enums/SDG';
import { RetirementRequestDto } from './types/RetirementRequestDto';
import { RetirementRequestResponseDto } from './types/RetirementRequestResponseDto ';
import { UnbridgingRequestDto } from './types/UnbridgingRequestDto';
import { UnbridgingRequestResponseDto } from './types/UnbridgingRequestResponseDto ';
import { RetirementCompleteRequestDto } from '../requests/types/RetirementCompleteRequestDto';
import { UnbridgingCompleteRequestDto } from '../requests/types/UnbridgingCompleteRequestDto';

const app: Express = express();
const port = 8080;

/**
 * @description
 * ## BRIDGING
 * Get the block details given a serial number
 *
 * @argument `serial_number`
 * - if `undefined`: get information about all credit blocks transferred that are owned by Thallo
 * - if valid: return information about that specific block
 */
app.get(
  '/credits/block/:serial_number',
  async (req: Request, res: Response) => {
    const response: CreditBlockDataDto[] = [
      {
        serial_number: 'serial_number',
        quantity: '500',
        project: {
          name: 'Hebrides Windfarm',
          type: ProjectType.RENEWABLES,
          location: ProjectLocation.UNITED_KINGDOM,
          description: 'A windfarm on the coast of the Outer Hebrides',
          url: 'https://mock-registry.com/99disue4',
          id: '99disue4',
          sdgs: [SDG.CLEAN_ENERGY, SDG.LIFE_BELOW_WATER],
        },
        vintage: {
          year: 2023,
          url: 'https://mock-registry.com/99disue4/2023',
        },
      },
    ];
    res.json(response);
  }
);

/**
 * @description
 * ## RETIREMENT - async
 * For when a registry's internal retirement processes are async:
 *
 * perform retirement of `amount_to_retire` from block with `serial_number`
 *
 * @returns `RetirementRequestResponseDto`where the registry's internal reference ID is the `external_id`
 *
 * @callback
 * You can notify Thallo of the completed retirement via a webhook API call
 * For an example, please look at {@link ../requests/index.ts | retirementComplete}
 *
 * @async
 */
app.post('/credits/retire', async (req: Request, res: Response) => {
  const body: RetirementRequestDto = req.body;

  const response: RetirementRequestResponseDto = {
    retirement_request_id: '00c7qpby5eqk470euc',
    external_id: '60b9c035-0173-47e9-bcc6-4bd2359d084b',
  };
  res.json(response);
});

/**
 * @description
 * ## RETIREMENT - synchronous
 * For when a registry's internal retirement processes are synchronous:
 *
 * perform retirement of `amount_to_retire` from block with `serial_number`
 * @returns `RetirementCompleteRequestDto` where the registry's internal reference ID is the `external_id`
 */
app.post('/credits/retire', async (req: Request, res: Response) => {
  const body: RetirementRequestDto = req.body;

  const response: RetirementCompleteRequestDto = {
    serial_number: 'TEST-SERIAL-NUMBER',
    amount_retired: '300',
    amount_remaning: '50',
    remaining_serial: 'REMAINING-SERIAL',
    retired_serial: 'RETIRED-SERIAL',
    external_id: '60b9c035-0173-47e9-bcc6-4bd2359d084b',
    retirement_request_id: '00c7qpby5eqk470euc',
    status: 'SUCCESS',
    reason: undefined,
  };
  res.json(response);
});

/**
 * @description
 * ## UNBRIDGING - async
 * For when a registry's internal unbridging/transfer processes are async:
 *
 * perform retirement of `amount_to_retire` from block with `serial_number`
 * @returns `UnbridgingRequestResponseDto` where the registry's internal reference ID is the `external_id`
 *
 * @callback
 * You can notify Thallo of the completed unbridging event via a webhook API call
 * For an example, please look at {@link ../requests/index.ts | unbridgingComplete}
 *
 * @async
 */
app.post('/credits/transfer', async (req: Request, res: Response) => {
  const body: UnbridgingRequestDto = req.body;

  const response: UnbridgingRequestResponseDto = {
    unbridging_request_id: '00c7qpby5eqk470euc',
    external_id: 'd9f588f9-28c9-479c-a538-6acdabff8bcf',
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

/**
 * @description
 * ## UNBRIDGING - synchronous
 * For when a registry's internal unbridging/transfer processes are synchronous:
 *
 * perform retirement of `amount_to_retire` from block with `serial_number`
 * @returns `UnbridgingCompleteRequestDto` where the registry's internal reference ID is the `external_id`
 */
app.post('/credits/transfer', async (req: Request, res: Response) => {
  const body: UnbridgingRequestDto = req.body;

  const response: UnbridgingCompleteRequestDto = {
    external_id: 'd9f588f9-28c9-479c-a538-6acdabff8bcf',
    unbridging_request_id: '00m7qpby3oop470axj',
    status: 'SUCCESS',
    reason: undefined,
    transferred_serial: 'TRANSFERRED-SERIAL',
    remaining_serial: 'REMAINING-SERIAL',
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
