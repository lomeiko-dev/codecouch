import { ApiClient } from "@/api/Client";
import { IAuth, IUser } from "../types/type";
import { IApiReturned } from "@/api/types/type";

export const login = async (email: string, password: string): Promise<IApiReturned<IAuth | null>> => {
  const user = await ApiClient<IUser[]>({ url: `http://localhost:5000/users?email=${email}`, method: "GET" });

  if (user.data.length === 0 || (user.data[0] as IUser).password !== password) {
    return { data: null, isError: true, message: "Логин или пароль неверну" };
  }

  return {
    data: { email: (user.data[0] as IUser).email, userId: (user.data[0] as IUser).id },
    isError: false,
    message: "success",
  };
};
