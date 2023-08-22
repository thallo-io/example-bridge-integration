export class CreditsReceivedResponseDto {
    /**
     * Thallo's Credits received event ID
     */
    public credits_received_id!: string
    /**
     * Registry's event ID
     */
    public external_id!: string
    /**
      The id of the project developer in Thallo's system. Represents the same as the sender_id in the request
    */
    public tenant_customer_id?: string
}
