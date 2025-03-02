import { ApiClient } from "@/api/Client";
import { GetMentorListResult, IMentor } from "../types/type";

export const getMentorList = async (page: number, limit: number): Promise<GetMentorListResult> => {
  const result = await ApiClient<IMentor[]>({ method: "GET", url: `/mentors?_page=${page}&_limit=${limit}` });

  if (result.status === 200) {
    return { data: result.data as IMentor[], message: "Success" };
  }

  return { data: [], message: "Error" };
};
