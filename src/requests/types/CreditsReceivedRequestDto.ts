export class CreditsReceivedRequestDto {
    /**
     * The sender ID of the user on the registry that Thallo can use to match against expected transfers
     */
    public sender_id!: string
    /**
     * Serial number of credit block
     */
    public serial_number!: string
    /**
     * Registry event ID for Thallo's reference
     */
    public external_id!: string
}