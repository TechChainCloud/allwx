import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent, NotFoundComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const raw = import.meta.env.BASE_URL;
  const basepath = !raw || raw === "/" ? undefined : raw.replace(/\/$/, "");
  return createRouter({
    routeTree,
    ...(basepath ? { basepath } : {}),
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFoundComponent,
  });
}
