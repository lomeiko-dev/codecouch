import { IApiReturned } from "@/api/types/type";
import { IFeedback } from "../types/type";
import { ApiClient } from "@/api/Client";

export const sendFeedback = async (feedback: Omit<IFeedback, "id">): Promise<IApiReturned<IFeedback | null>> => {
  const result = await ApiClient<IFeedback>({ url: `http://localhost:5000/feedbacks`, method: "POST", data: feedback });

  if (result.status !== 201) {
    return { data: null, isError: true, message: "Ошибка при отправке отзыва" };
  }

  return { data: result.data as IFeedback, message: "success", isError: false };
};
