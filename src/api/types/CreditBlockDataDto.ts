import { Project } from './Project';
import { Vintage } from './Vintage';

export class CreditBlockDataDto {
  /**
   * Serial number passed as param to endpoint
   */
  public block_serial_number!: string;
  /**
   * Number of credits in block
   */
  public quantity!: string;
  /**
   * Project information of credit block
   */
  public project!: Project;
  /**
   * Vintage information of credit block
   */
  public vintage!: Vintage;
}
