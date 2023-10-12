import { AccountResponseModel } from "../Account/account-response.model"
import { PointsResponseModel } from "../Points/points-response.model"

export interface LocationResponseModel {
    id: string,
    profile: string,
    Abbreviation: string
    Address: string
    Phone: string
    Contact1: string
    PositionContact1: string
    EmailContact1: string
    PhoneContact1: string
    Contact2: string
    PositionContact2: string
    EmailContact2: string
    PhoneContact2: string
    Account: AccountResponseModel | string
    Points: PointsResponseModel | string[]
}