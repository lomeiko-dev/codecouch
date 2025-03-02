import { AxiosError } from "axios";
import { ApiClient } from "../../Client";

interface RegisterResult {
  data: {
    role: number;
    token: string;
  } | null;
  code: number;
  message: string;
}

export const passwordRecoveryThirdStage = async (
  email: string,
  password: string,
  first_hash: string,
  second_hash: string
): Promise<RegisterResult> => {
  const loginData = { email, password, first_hash, second_hash };

  try {
    const { data: response } = await ApiClient({
      data: loginData,
      method: "POST",
      url: "/recover-pass/new",
    });

    const { data, code, message } = response;

    if (code === 200) {
      const { token } = data;
      localStorage.setItem("jwtToken", token);
      return { data, code, message };
    } else {
      console.error(`Ошибка при регистрации. Статус: ${code}`);
      return { data: null, code, message };
    }
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, code: errorStatus, message: "" };
  }
};
