"use client";

import { useStravaActivities } from "./hooks/useStravaActivities";
import { useAuthStore } from "@/lib/store/authStore";

export default function Home() {
  const activitiesQuery = useStravaActivities(
    useAuthStore.getState().authToken
  );
  console.log({ activitiesQuery });

  return <div className="text-3xl font-bold">HOME: CXP</div>;
}
