import { Project } from "./Project"
import { Vintage } from "./Vintage"

export class CreditBlockDataDto {
    public serial_number!: string
    public quantity!: string
    public project!: Project
    public vintage!: Vintage
}

