# Example Bridge Integration

## Structure

### API

This contains all the endpoints a registry is required to implement in order to integraten with the Thallo 2-way bridge.

Endpoints include:

* Fetching block data by serial number
* Creating a retirement event
* Creating an unbridging event



### Requests

This contains all the http requests a registry will need to perform to webhooks setup by Thallo. These are:

* Credits received - notify Thallo to bridge credits
* Retirement Complete - notify Thallo retirement has been processed by registry and has a status of either `SUCCESS` or `FAILURE`
* Unbridging Complete - notify Thallo unbirgding has been processed by registry and has a status of either `SUCCESS` or `FAILURE`