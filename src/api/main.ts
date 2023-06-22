import express, { Express, Request, Response } from 'express'
import { CreditBlockDataDto } from './types/CreditBlockDataDto'
import { ProjectType } from './enums/ProjectType'
import { ProjectLocation } from './enums/ProjectLocation'
import { SDG } from './enums/SDG'
import { RetirementRequestDto } from './types/RetirementRequestDto'
import { RetirementRequestResponseDto } from './types/RetirementRequestResponseDto '
import { UnbridgingRequestDto } from './types/UnbridgingRequestDto'
import { UnbridgingRequestResponseDto } from './types/UnbridgingRequestResponseDto '

const app: Express = express()
const port = 8080

/**
 * if `serial_number` is undefined: get information about all credit blocks transferred
 * if `serial_number` is valid: return information about that specific block
 */
app.get('/credits/block/:serial_number', async (req: Request, res: Response) => {
    const response: CreditBlockDataDto[] = [{
        serial_number: 'serial_number',
        quantity: '500',
        project: {
            name: 'Hebrides Windfarm',
            type: ProjectType.RENEWABLES,
            location: ProjectLocation.UNITED_KINGDOM,
            description: 'A windfarm on the coast of the Outer Hebrides',
            url: 'https://fake-registry.com/99disue4',
            id: '99disue4',
            sdgs: [
                SDG.CLEAN_ENERGY,
                SDG.LIFE_BELOW_WATER,
            ],
        },
        vintage: {
            year: 2023,
            url: 'https://fake-registry.com/99disue4/2023'
        }
    }]
    res.json(response)
})

/**
 * perform retirement of `amount_to_retire` from block with `serial_number`
 * process request and return your internal reference ID as the `external_id`
 * 
 * You can notify Thallo of the completed retirement via a webhook API call
 * For an example, please look at `retirementComplete` in [httpRequest](../requests/httpRequests.ts)
 */
app.post('/credits/retire', async (req: Request, res: Response) => {
    const body: RetirementRequestDto = req.body

    const response: RetirementRequestResponseDto = {
        retirement_request_id: '00c7qpby5eqk470euc',
        external_id: '60b9c035-0173-47e9-bcc6-4bd2359d084b'
    }
    res.json(response)
})

/**
 * perform retirement of `amount_to_retire` from block with `serial_number`
 * process request and return your internal reference ID as the `external_id`
 * 
 * You can notify Thallo of the completed unbridging event via a webhook API call
 * For an example, please look at `unbridgingComplete` in [httpRequest](../requests/httpRequests.ts)
 */
app.post('/credits/transfer', async (req: Request, res: Response) => {
    const body: UnbridgingRequestDto = req.body

    const response: UnbridgingRequestResponseDto = {
        unbridging_request_id: '00c7qpby5eqk470euc',
        external_id: 'd9f588f9-28c9-479c-a538-6acdabff8bcf'
    }
    res.json(response)
})

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})
