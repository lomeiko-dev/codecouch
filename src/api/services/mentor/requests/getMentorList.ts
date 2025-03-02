import { ApiClient } from "@/api/Client";
import { GetMentorListResult, IMentor } from "../types/type";

export const getMentorList = async (page: number, limit: number): Promise<GetMentorListResult> => {
  const data = await ApiClient<IMentor>({ method: "GET", url: `/mentors?_page=${page}&_limit=${limit}` });
  return data;
};
