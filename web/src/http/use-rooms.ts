import { useQuery } from "@tanstack/react-query";
import type { GetRoomsResponse } from "./types/get-rooms-response";
import { env } from "@/env";

export function useRooms() {
  return useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch(`${env.VITE_BACKEND_URL}/rooms`);
      const result: GetRoomsResponse = await response.json();
      return result;
    },
  });
}
