export interface AviationStackPagination {
    limit: number;
    offset: number;
    count: number;
    total: number;
}

export interface AviationStackFlightDeparture {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: string | null;
    gate: string | null;
    delay: number | null;
    scheduled: string;
    estimated: string;
    actual: string | null;
    estimated_runway: string | null;
    actual_runway: string | null;
}

export interface AviationStackFlightArrival {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: string | null;
    gate: string | null;
    baggage: string | null;
    scheduled: string;
    delay: number | null;
    estimated: string | null;
    actual: string | null;
    estimated_runway: string | null;
    actual_runway: string | null;
}

export interface AviationStackAirline {
    name: string;
    iata: string;
    icao: string;
}

export interface AviationStackFlightInfo {
    number: string;
    iata: string;
    icao: string;
    codeshared: any | null;
}

export interface AviationStackFlightData {
    flight_date: string;
    flight_status: string;
    departure: AviationStackFlightDeparture;
    arrival: AviationStackFlightArrival;
    airline: AviationStackAirline;
    flight: AviationStackFlightInfo;
    aircraft: any | null;
    live: any | null;
}

export interface AviationStackResponse {
    pagination: AviationStackPagination;
    data: AviationStackFlightData[];
}
