import { AxiosError } from "axios";
import { ApiClient } from "../../Client";

interface RegisterResult {
  data: {
    email: string;
    hash: string;
  } | null;
  code: number;
  message: string;
}

export const passwordRecoverySecondStage = async (
  email: string,
  hash: string,
  auth_code: number
): Promise<RegisterResult> => {
  const loginData = { email, hash, auth_code };

  try {
    const { data: response } = await ApiClient({
      data: loginData,
      method: "POST",
      url: "/recover-pass/confirm",
    });

    const { data, code, message } = response;

    if (code === 200) {
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
