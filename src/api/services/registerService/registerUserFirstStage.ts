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

export const registerUserFirstStage = async (
  email: string,
  password: string
): Promise<RegisterResult> => {
  const loginData = { email, password };

  try {
    const { data: response } = await ApiClient({
      data: loginData,
      method: "POST",
      url: "/sign-up",
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
