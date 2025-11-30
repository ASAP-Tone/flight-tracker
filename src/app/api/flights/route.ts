import { NextResponse } from 'next/server';
import { fetchFlights, Flight } from '../../../utils/aviationStack';

export type { Flight };

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || undefined;

  const flights = await fetchFlights(query);

  return NextResponse.json(flights);
}
