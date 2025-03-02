import { ApiClient } from "@/api/Client";
import { IFeedback, IFeedbackResult } from "../types/type";

export const getFeedbackList = async (page: number, limit: number): Promise<IFeedbackResult> => {
  const result = await ApiClient<IFeedback[]>({ method: "GET", url: `/feedbacks?_page=${page}&_limit=${limit}` });

  if (result.status === 200) {
    return { data: result.data as IFeedback[], message: "success" };
  }

  return { data: [], message: "error" };
};
