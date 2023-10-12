import { LocationResponseModel } from "../Location/location-response.model"

export interface PointsResponseModel {
    id: string,
    name: string
    Abbreviation: string
    CTA: string,
    Type: string,
    Latitud: string,
    Longitud: string
    Location: LocationResponseModel | string

}