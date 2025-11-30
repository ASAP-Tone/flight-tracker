import React from 'react';
import { Flight } from '@/app/api/flights/route';

interface FlightCardProps {
    flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
    const formatTime = (dateString: string) => {
        return new Date(dateString).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'On Time': return '#10b981'; // Emerald 500
            case 'Delayed': return '#f59e0b'; // Amber 500
            case 'Cancelled': return '#ef4444'; // Red 500
            default: return '#a1a1aa';
        }
    };

    return (
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1rem', animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--primary)' }}>{flight.flightNumber}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>• {flight.airline}</span>
                </div>
                <div style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: `${getStatusColor(flight.status)}20`,
                    color: getStatusColor(flight.status),
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    border: `1px solid ${getStatusColor(flight.status)}40`
                }}>
                    {flight.status}
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                {/* Origin */}
                <div style={{ textAlign: 'left', flex: 1 }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{flight.origin.split('(')[1].replace(')', '')}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{flight.origin.split('(')[0].trim()}</div>
                    <div style={{ marginTop: '0.5rem', fontSize: '1.125rem', fontWeight: 600 }}>{formatTime(flight.startTime)}</div>
                </div>

                {/* Path Visual */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Duration: 8h 30m</div>
                    <div style={{ width: '100%', height: '2px', background: 'var(--border)', position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: 'var(--background)',
                            padding: '0 0.5rem'
                        }}>
                            ✈
                        </div>
                    </div>
                </div>

                {/* Destination */}
                <div style={{ textAlign: 'right', flex: 1 }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{flight.destination.split('(')[1].replace(')', '')}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{flight.destination.split('(')[0].trim()}</div>
                    <div style={{ marginTop: '0.5rem', fontSize: '1.125rem', fontWeight: 600 }}>{formatTime(flight.endTime)}</div>
                </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <div>Terminal {flight.terminal} • Gate {flight.gate}</div>
                <div>Timezone: EST (GMT-5)</div>
            </div>
        </div>
    );
}
