import { ProjectLocation } from "../enums/ProjectLocation"
import { ProjectType } from "../enums/ProjectType"
import { SDG } from "../enums/SDG"

export class Project {
    /**
     * The name of the project on the registry
     */
    public name!: string
    /**
     * The type of the project
     */
    public type!: ProjectType
    /**
     * The country the project is based in
     */
    public location!: ProjectLocation
    /**
     * Description of the project
     */
    public description!: string
    /**
     * Url to the project on the registry
     */
    public url!: string
    /**
     * The id of the project on the registry
     */
    public id!: string
    /**
     * A list of all the SDGs that apply to this project
     */
    public sdgs!: SDG[]
}