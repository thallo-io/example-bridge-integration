# Example Bridge Integration

The purpose of this repo is to demonstrate how a registry could implement their API and webhooks in order to allow Thallo to integrate their [Two-Way Bridge](https://docs.thallo.io/) with that registry.
This repo is not intended to be consumed within an app, just to highlight the commincation required between Thallo and
the registry.

Here, you will find some example endpoints a registry needs to configure for Thallo to call into to either retrieve information about credits, or initiate an event such as a retirement or unbridge/transfer of credits. These endpoint examples can be found in [src/api/main.ts](./src/api/main.ts)

You can also find some example [webhook requests](./src/requests/index.ts) that will need to be performed to notify Thallo of certain events:
* Credits received (into the Thallo account on the registry)
* Retirement complete - implemented only if the registry retirement is an async process (result not returned during API call made by Thallo to initiate retirmeent) - this is the retirement on the registry
* Unbridging complete - implemented only if the registry unbridging/transfer credits is an async process (result not returned during API call made by Thallo to initiate transfer) - this is the transfer on the registry

## Structure

### API

This contains all the endpoints a registry is required to implement in order to integraten with the Thallo 2-way bridge.

Endpoints include:

* Fetching block data by serial number
* Creating a retirement event
    * There are 2 versions, async and sync. In the async version, you will be required to implement the webhook callback to complete the retirement process
* Creating an unbridging event
    * There are 2 versions, async and sync. In the async version, you will be required to implement the webhook callback to complete the unbridging process


### Requests

This contains all the http requests a registry will need to perform to webhooks setup by Thallo. These are:

* Credits received - notify Thallo to bridge credits
* Retirement Complete - notify Thallo retirement has been processed by registry and has a status of either `SUCCESS` or `FAILURE` - only to be implemeneted for an async architecture on registry side
* Unbridging Complete - notify Thallo unbirgding has been processed by registry and has a status of either `SUCCESS` or `FAILURE` - only to be implemeneted for an async architecture on registry side