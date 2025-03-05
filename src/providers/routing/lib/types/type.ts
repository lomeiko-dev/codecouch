import { RouteRecordRaw } from "vue-router";

export type typeRoute = RouteRecordRaw & { isRequired?: boolean; role?: string };
