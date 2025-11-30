import Image from 'next/image';
import FlightSearch from '@/components/FlightSearch';

export default function Home() {
  return (
    <main className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/logo.png"
            alt="Flight Tracker Logo"
            width={120}
            height={120}
            priority
          />
        </div>
        <h1 className="text-gradient" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
          Flight Tracker
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '500px', margin: '0 auto' }}>
          Track flights in real-time with our premium lookup tool. Enter your flight number below.
        </p>
      </div>

      <FlightSearch />

      <footer style={{ marginTop: 'auto', padding: '2rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        © 2023 Flight Tracker. Design by Antigravity.
      </footer>
    </main>
  );
}
