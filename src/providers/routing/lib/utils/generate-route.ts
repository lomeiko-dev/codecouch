import { RouteRecordRaw } from "vue-router";
import { typeRoute } from "../types/type";
import { useAuthStore } from "@/shared/store/auth";
import { router } from "../../router";

export const generateRoute = (pages: typeRoute[]) => {
  const routes: RouteRecordRaw[] = [];

  pages.forEach((page) => {
    routes.push({
      path: page.path,
      name: page.name,
      component: page.component as any,
      beforeEnter: (to, from, next) => {
        if (page.isRequired) {
          const store = useAuthStore();
          if (store.authData === null) router.push({ path: "/auth-client/student" });
        }
        to;
        from;
        next();
      },
    });
  });

  return routes;
};
