import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
    HeartPulse,
    ShieldCheck,
    Activity,
    Zap,
    ArrowRight,
    Globe,
    PhoneCall,
    Search,
    ChevronRight,
    MapPin,
    Menu,
    X,
    MessageSquare,
    Video,
    ShieldPlus
} from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', overflowX: 'hidden' }}>
            {/* Navigation */}
            <nav style={{
                height: '80px',
                padding: '0 5%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                background: 'rgba(2, 6, 23, 0.8)'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'white' }}>
                    <div style={{ background: 'var(--primary)', padding: '8px', borderRadius: '10px' }}>
                        <HeartPulse color="white" size={24} />
                    </div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.5px' }}>SMC SMART HEALTH</span>
                </Link>

                <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="nav-links-desktop">
                    <a href="#features" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Features</a>
                    <a href="#services" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Services</a>
                    <a href="#about" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>About SMC</a>
                    <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Login</Link>
                    <Link to="/signup" className="primary-btn" style={{ background: 'var(--primary)', boxShadow: '0 4px 15px rgba(14, 165, 233, 0.4)' }}>
                        Register Now
                    </Link>
                </div>

                <button className="icon-btn mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{ position: 'fixed', top: '80px', left: 0, right: 0, background: 'var(--bg-main)', padding: '24px', zIndex: 999, borderBottom: '1px solid var(--border)' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <a href="#features" onClick={() => setIsMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Features</a>
                            <a href="#services" onClick={() => setIsMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Services</a>
                            <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Login</Link>
                            <Link to="/signup" className="primary-btn" style={{ textAlign: 'center' }}>Register Now</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section style={{
                padding: '100px 5% 60px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '60px',
                alignItems: 'center',
                position: 'relative'
            }} className="hero-grid">
                <div style={{ position: 'absolute', top: '10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15), transparent 70%)', zIndex: 0 }} />

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="badge stable" style={{ marginBottom: '24px', display: 'inline-flex', padding: '6px 16px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}>
                        SOLAPUR MUNICIPAL CORPORATION INITIATIVE
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
                        Transforming <span style={{ background: 'linear-gradient(to right, #0ea5e9, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Healthcare</span> for Solapur.
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '600px' }}>
                        An integrated, technology-enabled public health ecosystem providing real-time disease surveillance,
                        emergency response, and digital health services to every citizen.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <Link to="/dashboard" className="primary-btn" style={{ padding: '16px 32px', fontSize: '1.1rem', background: 'var(--primary)' }}>
                            Launch Dashboard
                        </Link>
                        <button className="icon-btn" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })} style={{ width: 'auto', padding: '0 32px', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)' }}>
                            Learn More
                        </button>
                    </div>

                    <div style={{ marginTop: '60px', display: 'flex', gap: '40px' }}>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 800 }}>8.5L+</div>
                            <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Citizens Covered</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 800 }}>150+</div>
                            <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Health Centers</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ position: 'relative' }}
                >
                    <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                            {[
                                { icon: <Activity color="#0ea5e9" />, title: 'Surveillance', desc: 'Real-time tracking' },
                                { icon: <ShieldCheck color="#10b981" />, title: 'Smart Records', desc: 'Unified citizen data' },
                                { icon: <PhoneCall color="#f43f5e" />, title: 'Emergency', desc: 'Instant response' },
                                { icon: <Zap color="#f59e0b" />, title: 'Infrastructure', desc: 'Asset monitoring' }
                            ].map((feature, i) => (
                                <div key={i} style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid var(--border)' }}>
                                    <div style={{ marginBottom: '12px' }}>{feature.icon}</div>
                                    <div style={{ fontWeight: 700, marginBottom: '4px' }}>{feature.title}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{feature.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Emergency Ribbon */}
            <div style={{
                background: 'linear-gradient(90deg, #f43f5e, #be123c)',
                padding: '20px 0',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                position: 'relative'
            }}>
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    style={{ display: 'inline-flex', gap: '60px' }}
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.25rem', fontWeight: 800 }}>
                            <ShieldCheck /> EMERGENCY HELPLINE: 1800 233 4000
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Features Section */}
            <section id="features" style={{ padding: '100px 5%' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="service-showcase">
                    <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ padding: '40px', background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), transparent)' }}>
                            <div className="badge stable" style={{ marginBottom: '16px' }}>REAL-TIME MONITORING</div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px' }}>Integrated Command Center</h2>
                            <p style={{ color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: '24px' }}>
                                SMC's health department now operates via a centralized digital twin, monitoring everything from oxygen tank levels in Esic Hospital to outbreak clusters in North Solapur.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {['Predictive Analytics for Outbreaks', 'Live Bed Occupancy Tracking', 'Emergency Service Dispatch'].map((li, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem' }}>
                                        <CheckCircle2 size={16} color="var(--success)" /> {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px' }}>Smart City. <br /><span style={{ color: 'var(--primary)' }}>Smarter Health.</span></h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '32px' }}>We are bridging the gap between municipal data and citizen wellness through transparent, real-time technology.</p>
                        <button className="primary-btn" onClick={() => navigate('/signup')}>Join Personnel Network</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '80px 5% 40px', borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '60px' }} className="footer-grid">
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <HeartPulse color="var(--primary)" size={32} />
                            <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>SMC Smart Health</span>
                        </div>
                        <p style={{ color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: '24px' }}>
                            An initiative by Solapur Municipal Corporation for world-class healthcare monitoring.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '24px' }}>Quick Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['Health Dept.', 'SMC Portal', 'Smart City Mission'].map(l => <a href="#" key={l} style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem' }}>{l}</a>)}
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid var(--border)', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                    © 2026 Solapur Municipal Corporation.
                </div>
            </footer>

            <style>{`
                @media (max-width: 968px) {
                    .hero-grid, .service-showcase, .footer-grid { grid-template-columns: 1fr !important; }
                    .nav-links-desktop { display: none !important; }
                    .mobile-menu-toggle { display: flex !important; }
                }
                @media (min-width: 969px) {
                    .nav-links-desktop { display: flex !important; }
                    .mobile-menu-toggle { display: none !important; }
                }
            `}</style>
        </div>
    );
};

const CheckCircle2 = ({ size, color }) => (
    <div style={{ width: size, height: size, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Zap size={size * 0.6} color="white" />
    </div>
);

export default Home;
