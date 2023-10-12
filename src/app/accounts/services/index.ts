import { RestAdapter } from "@/core/infrastructure/adapters/rest/rest.adapter";
import { AccountResponseModel } from "@/core/infrastructure/domain/models/Account/account-response.model";

export class AccountService {

    public static async listAccounts() {
        try {
            return await RestAdapter.get<any, AccountResponseModel[]>({ url: 'http://localhost:9001/api/V1/CheckPoint/accounts/listAccounts' })
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public static async CreateAccount(data: AccountResponseModel): Promise<AccountResponseModel> {
        try {
            return await RestAdapter.post<AccountResponseModel, AccountResponseModel>({ url: 'http://localhost:9001/api/V1/CheckPoint/accounts/createAccount', body: data, })
        } catch (error: any) {
            throw new Error(error);
        }
    }
}