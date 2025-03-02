import { AxiosError } from "axios";
import { ApiClient } from "../Client";

interface LoginResult {
  data: {
    token: string;
    role: number;
  } | null;
  code: number;
  message: string;
}

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResult> => {
  const loginData = { email, password };

  try {
    const { data: response } = await ApiClient({
      data: loginData,
      method: "POST",
      url: "/sing-in",
    });

    const { data, code, message } = response;
    const { token } = data;

    if (code === 200) {
      localStorage.setItem("jwtToken", token);
      return { data, code, message };
    } else {
      console.error(`Ошибка при входе. Статус: ${code}`);
      return { data: null, code, message };
    }
  } catch (error) {
    console.error("Ошибка при входе:", error);
    const errorcode = (error as AxiosError)?.response?.status || 500;
    return { data: null, code: errorcode, message: "" };
  }
};
