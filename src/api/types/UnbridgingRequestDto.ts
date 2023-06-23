export class UnbridgingRequestDto {
    /**
     * Thallo's unbridging request ID
     */
    public unbridging_request_id!: string
    /**
     * Serial number to unbridge
     */
    public serial_number!: string
    /**
     * Amount to unbridge from credit block in tonnes
     */
    public amount_to_unbridge!: string
    /**
     * Recipient's ID on registry
     */
    public recipient_id!: string
}