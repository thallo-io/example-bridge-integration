import axios, { AxiosResponse } from 'axios';
import { CreditsReceivedRequestDto } from './types/CreditsReceivedRequestDto';
import { CreditsReceivedResponseDto } from './types/CreditsReceivedResponseDto';
import { RetirementCompleteResponseDto } from './types/RetirementCompleteResponseDto';
import { RetirementCompleteRequestDto } from './types/RetirementCompleteRequestDto';
import { UnbridgingCompleteRequestDto } from './types/UnbridgingCompleteRequestDto';
import { UnbridgingCompleteResponseDto } from './types/UnbridgingCompleteResponseDto';

/**
 * @description
 * ## JWT
 * This can either be a valid JWT or an API Key. PLease inform Thallo which mechanism you
 * plan to use
 *
 * @kind JWT
 * Please supply Thallo with your public key used to generate the JWT in order for us to verify
 * the sender
 *
 * @kind API Key
 * Please generate one of these through the bridge
 */
const JWT = 'your-jwt-token';

const axiosInstance = axios.create({
  baseURL: 'https://bridge.api.thallo.io',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${JWT}`,
  },
});

/**
 * @description
 * ## Credits Received Webhook
 * This is intended to be used by the registry to notify Thallo that some credits are ready
 * to be bridged.
 *
 * @fires ${THALLO_REGISTERED_CREDITS_RECEIVED_WEBHOOK} with `CreditsReceivedResponseDto` body
 */
export async function creditsReceived(): Promise<
  AxiosResponse<CreditsReceivedResponseDto>
> {
  const requestBody: CreditsReceivedRequestDto = {
    sender_id: 'kkdj98-884j-922m-165uud9',
    serial_number: 'TEST-SERIAL-NUMBER',
    external_id: 'xx98dy-4545-332f-954iut1',
  };

  return await axiosInstance.post<CreditsReceivedResponseDto>(
    '/${THALLO_REGISTERED_CREDITS_RECEIVED_WEBHOOK}',
    requestBody
  );
}

/**
 * @description
 * ## Retirement Complete Webhook
 * This is intended to be used by the registry to notify Thallo that a retirement request has been completed
 *
 * Only to be used when registry retirement process is async
 *
 * @fires ${THALLO_REGISTERED_CREDITS_RECEIVED_WEBHOOK} with `RetirementCompleteRequestDto[]` body
 */
export async function retirementComplete(): Promise<
  AxiosResponse<RetirementCompleteResponseDto>
> {
  const requestBody: RetirementCompleteRequestDto[] = [
    {
      serial_number: 'TEST-SERIAL-NUMBER',
      amount_retired: '300',
      amount_remaning: '50',
      remaining_serial: 'REMAINING-SERIAL',
      retired_serial: 'RETIRED-SERIAL',
      external_id: '60b9c035-0173-47e9-bcc6-4bd2359d084b', // this matches the value the registry returned from the `/credits/retire` API call
      retirement_request_id: '00c7qpby5eqk470euc',
      status: 'SUCCESS',
      reason: undefined,
    },
  ];
  return await axiosInstance.post<RetirementCompleteResponseDto>(
    '/${THALLO_REGISTERED_RETIREMENT_WEBHOOK}',
    requestBody
  );
}

/**
 * @description
 * ## Unbridging Complete Webhook
 * This is intended to be used by the registry to notify Thallo that an unbridging request has been completed
 *
 * Only to be used when registry unbridging/transfer process is async
 *
 * @fires ${THALLO_REGISTERED_UNBRIDGING_WEBHOOK} with `UnbridgingCompleteRequestDto` body
 */
export async function unbridgingComplete(): Promise<
  AxiosResponse<UnbridgingCompleteResponseDto>
> {
  const requestBody: UnbridgingCompleteRequestDto = {
    external_id: 'd9f588f9-28c9-479c-a538-6acdabff8bcf', // this matches the value the registry returned from the `/credits/transfer` API call
    unbridging_request_id: '00m7qpby3oop470axj',
    status: 'SUCCESS',
    reason: undefined,
    transferred_serial: 'TRANSFERRED-SERIAL',
    remaining_serial: 'REMAINING-SERIAL',
  };
  return await axiosInstance.post<UnbridgingCompleteResponseDto>(
    '/${THALLO_REGISTERED_UNBRIDGING_WEBHOOK}',
    requestBody
  );
}
