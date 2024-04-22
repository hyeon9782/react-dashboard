import { HttpResponse, http } from "msw";

export const loginHandlers = [
  http.get("/login", ({ request, params, cokies }) => {
    return HttpResponse.json(["Tom", "Jerry", "Spike"]);
  }),
];