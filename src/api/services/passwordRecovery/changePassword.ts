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

export const changePassword = async (): Promise<PasswordRecoveryResult> => {
  try {
    const { data: response } = await ApiClient({
      method: "GET",
      url: "/change-pass",
    });

    const { data, code, message } = response;

    if (code === 200) {
      console.log("change password data \n\n", data);
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
