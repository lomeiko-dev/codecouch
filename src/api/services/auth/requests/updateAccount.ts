import { ApiClient } from "@/api/Client";
import { IUser, IUserAccount } from "../types/type";
import { IApiReturned } from "@/api/types/type";

export const updateAccount = async (account: IUserAccount): Promise<IApiReturned<IUserAccount | null>> => {
  const result = await ApiClient<IUserAccount>({
    url: `http://localhost:5000/user-account/${account.id}`,
    method: "PUT",
    data: account,
  });

  if (result.status !== 200) {
    return { data: null, isError: true, message: "Ошибка при изменении аккаунта" };
  }

  const user = await ApiClient<IUser[]>({ url: `http://localhost:5000/users?id=${account.userId}`, method: "GET" });

  if (user.data.length === 0) {
    return { data: null, isError: true, message: "Пользователь не найден" };
  }

  const newUser: IUser = {
    ...(user.data[0] as IUser),
    email: account.email,
  };

  const finallyResult = await ApiClient<IUser>({
    url: `http://localhost:5000/users/${newUser.id}`,
    method: "PUT",
    data: newUser,
  });

  if (finallyResult.status !== 200) {
    return { data: null, isError: true, message: "Ошибка при изменении пользователя" };
  }

  return { data: result.data as IUserAccount, isError: false, message: "success" };
};
