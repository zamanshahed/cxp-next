// hooks/useStravaActivities.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Strava API base
const STRAVA_API_URL = "https://www.strava.com/api/v3";

// Types
export interface Activity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  type: string;
  start_date: string;
  [key: string]: any;
}

interface GetActivitiesParams {
  per_page?: number;
  page?: number;
}

// Utility fetch function
const fetchStrava = async <T>(
  accessToken: string,
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const res = await fetch(`${STRAVA_API_URL}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Strava API Error");
  }

  return res.json();
};

// Hook
export const useStravaActivities = (accessToken: string) => {
  const queryClient = useQueryClient();

  // Fetch activities
  const activitiesQuery = (params: GetActivitiesParams = {}) =>
    useQuery<Activity[], Error>(["activities", params], () =>
      fetchStrava<Activity[]>(
        accessToken,
        `/athlete/activities?per_page=${params.per_page || 30}&page=${
          params.page || 1
        }`
      )
    );
  return { activitiesQuery };
};
