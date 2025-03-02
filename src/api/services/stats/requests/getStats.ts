import { ApiClient } from "@/api/Client";
import { IStats } from "../types/type";

export const getStats = async (): Promise<IStats> => {
  const result = await ApiClient<IStats>({ method: "GET", url: `/stats` });

  if (result.status === 200) {
    return result.data as IStats;
  }
  return { lessonCount: -1, studentCount: -1, studentReturned: -1 };
};
