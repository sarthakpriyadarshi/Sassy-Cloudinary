import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client.js"; // Adjust the import path as necessary

const prisma = new PrismaClient();

export async function GET(requests: NextRequest) {
  try {
    console.log("Fetching videos with requests...", requests);
    const videos = await prisma.video.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch videos" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
