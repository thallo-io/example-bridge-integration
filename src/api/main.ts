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
 * get information about all credit blocks transferred
 * starting from and including `last_serial_number`
 */
app.get('/credits/block/:last_serial_number', async (req: Request, res: Response) => {
    const response: CreditBlockDataDto[] = [{
        serial_number: 'last_serial_number',
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
        external_id: 'ju98dy-4345-366f-954ijjd'
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
app.post('/credits/unbridge', async (req: Request, res: Response) => {
    const body: UnbridgingRequestDto = req.body

    const response: UnbridgingRequestResponseDto = {
        unbridging_request_id: '00c7qpby5eqk470euc',
        external_id: 'hdsj99-5555-366f-ppodl9'
    }
    res.json(response)
})

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})
