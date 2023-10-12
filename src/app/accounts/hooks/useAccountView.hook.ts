"use client"
import { useEffect, useState } from "react";
import { AccountResponseModel } from "@/core/infrastructure/domain/models/Account/account-response.model";
import { AccountService } from "../services";


interface UseAccountView {
    data: AccountResponseModel[]
}

export const useAccountView = (): UseAccountView => {
    const [data, setData] = useState<AccountResponseModel[]>([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await AccountService.listAccounts()
        setData(res)
    }
    return {
        data
    }

}