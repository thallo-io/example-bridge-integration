export class UnbridgingCompleteRequestDto {
    public external_id!: string
    public unbridging_request_id!: string
    public status!: 'SUCCESS' | 'FAILED'
    public reason!: string | undefined
}