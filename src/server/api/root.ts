import { createTRPCRouter } from "@/server/api/trpc";
import { dataRouter } from "./routers/data";
import { stateRouter } from "./routers/state";

export const appRouter = createTRPCRouter({
  data: dataRouter,
  state: stateRouter,
});

export type AppRouter = typeof appRouter;
