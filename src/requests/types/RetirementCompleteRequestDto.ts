export class RetirementCompleteRequestDto {
  /**
   * Serial number for which credits have been retired
   */
  public block_serial_number!: string;
  /**
   * Amount retired from credit block
   */
  public amount_retired!: string;
  /**
   * Amount left over in credit block after retirement
   */
  public amount_remaning!: string;
  /**
   * New serial number for remaining credits (can be the same as original serial number)
   * @returns `undefined` if a full block is retired
   */
  public remaining_serial!: string | undefined;
  /**
   * New serial number for retired credits after block split
   * @returns `undefined` if a full block is retired
   */
  public retired_serial!: string | undefined;
  /**
   * Registry event ID for Thallo's reference
   */
  public external_id!: string;
  /**
   * Thallo's retirement request ID
   */
  public retirement_request_id!: string;
  /**
   * Status of retirement on registry
   */
  public status!: 'SUCCESS' | 'FAILED';
  /**
   * Reason for `FAILURE` on registry
   */
  public reason!: string | undefined;
}
