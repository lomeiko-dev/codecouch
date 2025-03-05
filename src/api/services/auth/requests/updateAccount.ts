import { ApiClient } from "@/api/Client";
import { IUserAccount } from "../types/type";
import { IApiReturned } from "@/api/types/type";

export const updateAccount = async (account: IUserAccount): Promise<IApiReturned<IUserAccount | null>> => {
  const result = await ApiClient<IUserAccount>({
    url: `http://localhost:5000/user-account/${account.id}`,
    method: "PUT",
    data: account,
  });

  console.log(result);

  if (result.status !== 200) {
    return { data: null, isError: true, message: "Ошибка при изменении аккаунта" };
  }

  return { data: result.data as IUserAccount, isError: false, message: "success" };
};
