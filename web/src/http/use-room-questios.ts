import { useQuery } from "@tanstack/react-query";
import type { GetRoomsQuestionsResponse } from "./types/get-room-questions-response";
import { env } from "@/env";

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: ["get-questions", roomId],
    queryFn: async () => {
      const response = await fetch(
        `${env.VITE_BACKEND_URL}/rooms/${roomId}/questions`
      );
      const result: GetRoomsQuestionsResponse = await response.json();
      return result;
    },
  });
}
