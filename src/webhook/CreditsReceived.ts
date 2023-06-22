import axios, { AxiosResponse } from "axios"
import { CreditsReceviedRequestDto } from "./types/CreditsReceivedRequestDto"
import { CreditsReceivedResponseDto } from "./types/CreditsReceivedResponseDto"

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

    return await axiosInstance.post<CreditsReceivedResponseDto>('/{{your registered webhook}}', requestBody)
}