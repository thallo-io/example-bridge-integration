export class RetirementRequestDto {
    /**
     * Retirement request ID passed in to endpoint by Thallo
     */
    public retirement_request_id!: string
    /**
     * Serial number to retire from passed in by Thallo
     */
    public serial_number!: string
    /**
     * Amount to retire from credit block
     */
    public amount_to_retire!: string
}