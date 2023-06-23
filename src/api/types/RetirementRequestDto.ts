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
     * Amount to retire from credit block in tonnes
     */
    public amount_to_retire!: string
    /**
     * The name of the retiree
     */
    public retiree_name!: string
    /**
     * Description of the retirement event
     */
    public description!: string
}