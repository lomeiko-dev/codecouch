import { AxiosError } from "axios";
import { ApiClient } from "../../Client";

interface PasswordRecoveryResult {
  data: {
    email: string;
    hash: string;
  } | null;
  code: number;
  message: string;
}

export const passwordRecoveryFirstStage = async (
  email: string
): Promise<PasswordRecoveryResult> => {
  const loginData = { email };

  try {
    const { data: response } = await ApiClient({
      data: loginData,
      method: "POST",
      url: "/recover-pass",
    });

    const { data, code, message } = response;

    if (code === 200) {
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
