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

export const registerUserSecondStage = async (
  email: string,
  hash: string,
  auth_code: number
): Promise<RegisterResult> => {
  const loginData = { email, hash, auth_code };

  try {
    const { data: response } = await ApiClient({
      data: loginData,
      method: "POST",
      url: "/sign-up/confirm",
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
