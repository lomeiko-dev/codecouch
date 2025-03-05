export interface IAuth {
  userId: string;
  email: string;
}

export interface IUser {
  id: string;
  fullname: string;
  email: string;
  password: string;
  role: "student" | "mentor";
}

export interface IConsultation {
  userId: string;
  data: string;
  time: string;
  avatar: string;
  name: string;
  position: string;
}

export interface IUserAccount {
  id: string;
  userId: string;
  avatar: string;
  fullname: string;
  email: string;
  ConsultationsComing: IConsultation[];
  ConsultationsPrevious: IConsultation[];
  users: {
    userId: string;
    avatar: string;
    name: string;
  }[];
}
