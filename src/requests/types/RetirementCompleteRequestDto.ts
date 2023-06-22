export class RetirementCompleteRequestDto {
    public serial_number!: string
    public amount_retired!: string
    public amount_remaning!: string
    public remaining_serial!: string | undefined
    public retired_serial!: string
    public external_id!: string
    public retirement_request_id!: string
    public status!: 'SUCCESS' | 'FAILED'
    public reason!: string | undefined
}