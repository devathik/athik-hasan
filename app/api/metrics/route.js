import { getMetrics } from "@/app/utils/metrics";

export async function GET() {
  const metrics = getMetrics();
  return Response.json(metrics);
}
