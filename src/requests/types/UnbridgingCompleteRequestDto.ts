export class UnbridgingCompleteRequestDto {
    /**
     * Registry event ID for Thallo's reference
     */
    public external_id!: string
    /**
     * Thallo's unbridging request ID
     */
    public unbridging_request_id!: string
    /**
     * Status of registry unbridging event
     */
    public status!: 'SUCCESS' | 'FAILED'
    /**
     * Reason for `FAILURE` on registry
     */
    public reason!: string | undefined
}