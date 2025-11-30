import { AviationStackResponse, AviationStackFlightData } from '../types/aviation';

const API_KEY = process.env.AVIATION_STACK_API_KEY;
const BASE_URL = 'http://api.aviationstack.com/v1';

export interface Flight {
    id: string;
    flightNumber: string;
    airline: string;
    origin: string;
    destination: string;
    startTime: string;
    endTime: string;
    status: 'On Time' | 'Delayed' | 'Cancelled';
    gate: string;
    terminal: string;
}

export async function fetchFlights(query?: string): Promise<Flight[]> {
    if (!API_KEY) {
        console.error('AVIATION_STACK_API_KEY is not set');
        return [];
    }

    const url = new URL(`${BASE_URL}/flights`);
    url.searchParams.append('access_key', API_KEY);

    if (query) {
        // Aviation Stack allows filtering by flight_iata or flight_icao
        // We'll try to guess if it's an IATA code (e.g. AA123)
        url.searchParams.append('flight_iata', query);
    }

    url.searchParams.append('limit', '10'); // Limit to 10 results for now

    try {
        const res = await fetch(url.toString());

        if (!res.ok) {
            throw new Error(`Failed to fetch flights: ${res.statusText}`);
        }

        const data: AviationStackResponse = await res.json();

        if (!data.data) {
            return [];
        }

        return data.data.map((flightData: AviationStackFlightData) => mapToFlight(flightData));
    } catch (error) {
        console.error('Error fetching flights:', error);
        return [];
    }
}

function mapToFlight(data: AviationStackFlightData): Flight {
    return {
        id: `${data.flight.iata}-${data.flight_date}`,
        flightNumber: data.flight.iata || data.flight.icao || 'Unknown',
        airline: data.airline.name,
        origin: `${data.departure.airport} (${data.departure.iata})`,
        destination: `${data.arrival.airport} (${data.arrival.iata})`,
        startTime: data.departure.scheduled,
        endTime: data.arrival.scheduled,
        status: mapStatus(data.flight_status, data.departure.delay),
        gate: data.departure.gate || 'TBD',
        terminal: data.departure.terminal || 'TBD',
    };
}

function mapStatus(status: string, delay: number | null): 'On Time' | 'Delayed' | 'Cancelled' {
    if (status === 'cancelled') return 'Cancelled';
    if (status === 'active' || status === 'scheduled' || status === 'landed') {
        if (delay && delay > 15) return 'Delayed';
        return 'On Time';
    }
    return 'On Time'; // Default
}
