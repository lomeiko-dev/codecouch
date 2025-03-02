import { ApiClient } from "@/api/Client";
import { IFeedback } from "../types/type";
import { IApiReturned } from "@/api/types/type";

export const getFeedbackList = async (page: number, limit: number): Promise<IApiReturned<IFeedback[]>> => {
  const result = await ApiClient<IFeedback[]>({ method: "GET", url: `/feedbacks?_page=${page}&_limit=${limit}` });

  if (result.status === 200) {
    return { data: result.data as IFeedback[], message: "success", isError: false };
  }

  return { data: [], message: "error", isError: true };
};
