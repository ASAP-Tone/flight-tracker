"use client";

import React, { useState } from 'react';
import FlightCard from './FlightCard';
import { Flight } from '@/app/api/flights/route';

export default function FlightSearch() {
    const [query, setQuery] = useState('');
    const [flights, setFlights] = useState<Flight[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setHasSearched(true);
        try {
            const res = await fetch(`/api/flights?query=${encodeURIComponent(query)}`);
            const data = await res.json();
            setFlights(data);
        } catch (error) {
            console.error('Failed to fetch flights', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleSearch} style={{ marginBottom: '2rem' }}>
                <div style={{ position: 'relative', marginBottom: '1rem' }}>
                    <input
                        type="text"
                        className="glass-input"
                        placeholder="Enter flight number (e.g., AA123)"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{ paddingRight: '100px' }}
                    />
                    <button
                        type="submit"
                        className="btn-primary"
                        style={{
                            position: 'absolute',
                            right: '4px',
                            top: '4px',
                            bottom: '4px',
                            padding: '0 1.5rem'
                        }}
                    >
                        {loading ? '...' : 'Search'}
                    </button>
                </div>
            </form>

            <div style={{ minHeight: '200px' }}>
                {loading && (
                    <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
                        Searching flights...
                    </div>
                )}

                {!loading && hasSearched && flights.length === 0 && (
                    <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✈️</div>
                        <p>No flights found for "{query}"</p>
                        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Try searching for AA123, UA456, or DL789</p>
                    </div>
                )}

                {!loading && flights.map((flight) => (
                    <FlightCard key={flight.id} flight={flight} />
                ))}
            </div>
        </div>
    );
}
