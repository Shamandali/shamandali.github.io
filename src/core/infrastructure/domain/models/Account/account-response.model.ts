import { LocationResponseModel } from "../Location/location-response.model"

export interface AccountResponseModel {
    id: string,
    name: string
    Profile: string
    Abbreviation: string
    Address: string
    Phone: string
    BillName: string
    Nit: string
    Contact: string
    Position: string
    AdministratorContact: string
    Locations: LocationResponseModel[] | string[]
}