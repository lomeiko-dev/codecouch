import { ApiClient } from "@/api/Client";
import { IAuth, IUser, IUserAccount } from "../types/type";
import { IApiReturned } from "@/api/types/type";

export const register = async (
  email: string,
  password: string,
  fullname: string,
  role: string
): Promise<IApiReturned<IAuth | null>> => {
  const user = await ApiClient<IUser[]>({ url: `http://localhost:5000/users?email=${email}`, method: "GET" });

  if (user.data.length !== 0) {
    return { data: null, isError: true, message: "Такой логин уже используется" };
  }

  const newUser: Omit<IUser, "id"> = {
    email,
    fullname: fullname,
    password,
    role,
  };

  const resultRegister = await ApiClient<IUser>({ url: `http://localhost:5000/users`, method: "POST", data: newUser });

  if (resultRegister.status !== 201) {
    return { data: null, isError: true, message: "Ошибка регистрации" };
  }

  const newAccount: Omit<IUserAccount, "id"> = {
    email: newUser.email,
    fullname: newUser.fullname,
    userId: (resultRegister.data as IUser).id,
    avatar: "",
    ConsultationsComing: [],
    ConsultationsPrevious: [],
    users: [],
  };

  const resultAccount = await ApiClient<IUserAccount>({
    url: `http://localhost:5000/user-account`,
    method: "POST",
    data: newAccount,
  });

  if (resultAccount.status !== 201) {
    return { data: null, isError: true, message: "Ошибка регистрации" };
  }

  return {
    data: { email: (resultRegister.data as IUser).email, userId: (resultRegister.data as IUser).id },
    isError: false,
    message: "success",
  };
};
