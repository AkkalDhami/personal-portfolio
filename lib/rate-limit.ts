import { NextRequest } from "next/server";

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 4;

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function getClientIP(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

export function checkRateLimit(clientIP: string) {
  const now = Date.now();
  const data = rateLimitStore.get(clientIP);

  if (!data || now > data.resetTime) {
    rateLimitStore.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if (data.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  data.count++;
  rateLimitStore.set(clientIP, data);

  return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - data.count };
}

export function resetRateLimit(clientIP: string) {
  rateLimitStore.delete(clientIP);
}
