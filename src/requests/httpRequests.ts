import axios, { AxiosResponse } from "axios"
import { CreditsReceviedRequestDto } from "./types/CreditsReceivedRequestDto"
import { CreditsReceivedResponseDto } from "./types/CreditsReceivedResponseDto"
import { RetirementCompleteResponseDto } from "./types/RetirementCompleteResponseDto"
import { RetirementCompleteRequestDto } from "./types/RetirementCompleteRequestDto"
import { UnbridgingCompleteRequestDto } from "./types/UnbridgingCompleteRequestDto"
import { UnbridgingCompleteResponseDto } from "./types/UnbridgingCompleteResponseDto"

const JWT = 'your-jwt-token'

const axiosInstance = axios.create({
    baseURL: 'https://bridge.api.thallo.io',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JWT}`
    }
})

export async function creditsReceived(): Promise<AxiosResponse<CreditsReceivedResponseDto>> {
    const requestBody: CreditsReceviedRequestDto = {
        serial_number: 'TEST-SERIAL-NUMBER',
        external_id: 'xx98dy-4545-332f-954iut1',
    }

    return await axiosInstance.post<CreditsReceivedResponseDto>('/{{Thallo registered cedits received webhook}}', requestBody)
}

export async function retirementComplete(): Promise<AxiosResponse<RetirementCompleteResponseDto>> {
    const requestBody: RetirementCompleteRequestDto[] = [{
        serial_number: 'TEST-SERIAL-NUMBER',
        amount_retired: '300',
        amount_remaning: '50',
        remaining_serial: 'REMAINING-SERIAL',
        retired_serial: 'RETIRED_SERIAL',
        external_id: 'ju98dy-4345-366f-954ijjd',
        retirement_request_id: '00c7qpby5eqk470euc',
        status: 'SUCCESS',
        reason: undefined,
    }]
    return await axiosInstance.post<RetirementCompleteResponseDto>('/{{Thallo registered retirement webhook}}', requestBody)
}

export async function unbridgingComplete(): Promise<AxiosResponse<UnbridgingCompleteResponseDto>> {
    const requestBody: UnbridgingCompleteRequestDto = {
        external_id: 'ju98dy-4345-366f-954ijjd',
        unbridging_request_id: '00c7qpby5eqk470euc',
        status: 'SUCCESS',
        reason: undefined,
    }
    return await axiosInstance.post<UnbridgingCompleteResponseDto>('/{{Thallo registered unbridging webhook}}', requestBody)
}