// src/app/api/greenhouse/departments/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ghSlug = searchParams.get('ghSlug') || "webflow";
  const url = `https://boards-api.greenhouse.io/v1/boards/${ghSlug}/departments/`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 } }); // cache for 60s
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
