import { NextRequest, NextResponse } from 'next/server';
import { updateNumberOfLikes } from '../../../lib/prisma-db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { mediaId, likes } = body;

    if (!mediaId || typeof likes !== 'number') {
      return NextResponse.json(
        { error: 'Missing required fields: mediaId and likes' },
        { status: 400 }
      );
    }

    const updatedMedia = await updateNumberOfLikes(Number(mediaId), likes);

    return NextResponse.json(updatedMedia);
  } catch (error) {
    console.error('Error updating likes:', error);
    return NextResponse.json(
      { error: 'Failed to update likes' },
      { status: 500 }
    );
  }
}
