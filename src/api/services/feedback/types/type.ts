export interface IFeedback {
  id: number;
  mentorId: number;
  mentorName: string;
  avatar: string;
  fullname: string;
  comment: string;
}

export interface IFeedbackResult {
  data: IFeedback[];
  message: string;
}
