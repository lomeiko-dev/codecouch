import { IApiReturned } from "@/api/types/type";
import { ApiClient } from "@/api/Client";
import { IUserAccount } from "../types/type";

export const getAccountById = async (id: string): Promise<IApiReturned<IUserAccount | null>> => {
  const result = await await ApiClient<IUserAccount[]>({ url: `http://localhost:5000/user-account?userId=${id}` });

  if (result.data.length === 0) {
    return { data: null, isError: true, message: "Пользователь не найден" };
  }

  return {
    data: result.data[0] as IUserAccount,
    message: "success",
    isError: false,
  };
};
