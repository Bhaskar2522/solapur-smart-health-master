import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    PhoneCall,
    Video,
    Calendar,
    BellRing,
    Heart,
    ShieldPlus,
    MessageSquare,
    Languages,
    ArrowRight,
    MapPinned,
    Activity,
    CheckCircle2,
    X,
    Loader2
} from 'lucide-react';

const services = [
    { id: 'tele', title: 'Telemedicine Support', desc: 'Consult with specialist doctors from home.', icon: <Video className="text-sky-400" />, action: 'Book Now', color: '#0ea5e9' },
    { id: 'vac', title: 'Vaccination Slot', desc: 'Schedule immunization for adults & children.', icon: <ShieldPlus className="text-emerald-400" />, action: 'Find Center', color: '#10b981' },
    { id: 'emergency', title: 'Emergency Contact', desc: 'Quick 24/7 medical rescue services.', icon: <PhoneCall className="text-rose-400" />, action: 'Call 108', color: '#f43f5e' },
    { id: 'blood', title: 'Blood Availability', desc: 'Check real-time stock in city blood banks.', icon: <Activity className="text-purple-400" />, action: 'Check Stock', color: '#a855f7' },
];

const healthTips = [
    { title: ' monsoon Safety', desc: 'Avoid stagnant water near your home to prevent Dengue.', tag: 'Safety' },
    { title: 'SMC Wellness Camp', desc: 'Free health checkup at Ashok Chowk clinic this Sunday.', tag: 'Events' },
    { title: 'Mental Health Matter', desc: 'Join our weekly yoga session at Hutatma Baug.', tag: 'Wellness' },
];

const CitizenServices = () => {
    const [language, setLanguage] = useState('English');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [symptomText, setSymptomText] = useState('');
    const [activeModal, setActiveModal] = useState(null);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'English' ? 'मराठी' : 'English');
    };

    const handleAnalyze = () => {
        if (!symptomText.trim()) return;
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setAnalysisResult({
                triage: 'Low Risk',
                advice: 'Your symptoms match mild seasonal viral patterns. Stay hydrated and monitor temperature.',
                action: 'Consult a primary care physician if symptoms persist beyond 3 days.'
            });
        }, 2000);
    };

    const handleAction = (id) => {
        setActiveModal(id);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '4px' }}>
                        {language === 'English' ? 'Citizen Health Portal' : 'नागरिक आरोग्य पोर्टल'}
                    </h1>
                    <p style={{ color: 'var(--text-dim)' }}>
                        {language === 'English' ? 'Access decentralized healthcare services instantly' : 'विकेंद्रित आरोग्य सेवांमध्ये त्वरित प्रवेश करा'}
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                        onClick={toggleLanguage}
                        className="icon-btn"
                        style={{ width: 'auto', padding: '0 16px', borderRadius: '10px', gap: '8px', border: '1px solid var(--primary)', color: 'var(--primary)' }}
                    >
                        <Languages size={18} /> {language}
                    </button>
                    <button className="primary-btn" style={{ background: 'var(--secondary)', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}>
                        User Dashboard
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="glass-card"
                        style={{ borderBottom: `4px solid ${service.color}` }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: `${service.color}15`,
                            color: service.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px'
                        }}>
                            {service.icon}
                        </div>
                        <h3 style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '8px' }}>{service.title}</h3>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', marginBottom: '24px', lineHeight: '1.5' }}>{service.desc}</p>
                        <button
                            onClick={() => handleAction(service.id)}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '10px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border)',
                                color: 'white',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                transition: '0.2s'
                            }}
                        >
                            {service.action} <ArrowRight size={16} />
                        </button>
                    </motion.div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
                <div className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h3 style={{ fontWeight: 600 }}>Active Health Initiatives</h3>
                        <span className="badge stable" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>UPDATED TODAY</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {healthTips.map((tip, i) => (
                            <div key={i} style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid var(--border)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                <div style={{ padding: '12px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', color: 'var(--primary)' }}>
                                    {tip.tag === 'Safety' ? <BellRing size={24} /> : tip.tag === 'Events' ? <Calendar size={24} /> : <Heart size={24} />}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                        <h4 style={{ fontWeight: 600 }}>{tip.title}</h4>
                                        <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>{tip.tag}</span>
                                    </div>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>{tip.desc}</p>
                                </div>
                                <button className="icon-btn" style={{ alignSelf: 'center' }}><ArrowRight size={18} /></button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontWeight: 600, marginBottom: '24px' }}>Emergency Hubs Near You</h3>
                    <div style={{ flex: 1, minHeight: '200px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px dashed var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}>
                        <MapPinned size={48} color="var(--text-dim)" style={{ marginBottom: '16px' }} />
                        <p style={{ fontWeight: 500, marginBottom: '8px' }}>Location Access Required</p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', marginBottom: '20px' }}>Enable GPS to find the nearest SMC clinic and emergency centers in Solapur.</p>
                        <button
                            className="primary-btn"
                            style={{ background: 'var(--primary)' }}
                            onClick={() => alert('GPS location enabled. Nearest hub: SMC Clinic #4 (Ashok Chowk)')}
                        >
                            Enable Location
                        </button>
                    </div>
                    <div style={{ marginTop: '24px' }}>
                        <a href="tel:18002334000" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'rgba(244, 63, 94, 0.05)', borderRadius: '12px', border: '1px solid rgba(244, 63, 94, 0.2)', color: 'inherit' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--danger)', animation: 'pulse 2s infinite' }} />
                            <div style={{ flex: 1, fontSize: '0.875rem', fontWeight: 500 }}>SMC Helpline: 1800 233 4000</div>
                            <PhoneCall size={16} color="var(--danger)" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(14, 165, 233, 0.1))' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>AI Medical Symptom Checker</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Describe your symptoms in English or Marathi and get immediate guidance based on SMC health protocols.</p>

                        <AnimatePresence mode="wait">
                            {!analysisResult ? (
                                <motion.div
                                    key="input"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    style={{ display: 'flex', gap: '12px' }}
                                >
                                    <input
                                        type="text"
                                        value={symptomText}
                                        onChange={(e) => setSymptomText(e.target.value)}
                                        placeholder="E.g. I have mild fever and headache since morning..."
                                        style={{ flex: 1, background: 'rgba(2, 6, 23, 0.5)', border: '1px solid var(--border)', borderRadius: '10px', padding: '12px 16px', color: 'white' }}
                                    />
                                    <button
                                        className="primary-btn"
                                        style={{ background: 'var(--primary)', minWidth: '120px' }}
                                        onClick={handleAnalyze}
                                        disabled={isAnalyzing}
                                    >
                                        {isAnalyzing ? <Loader2 className="animate-spin" size={20} /> : 'Analyze'}
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid var(--success)' }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                        <div style={{ color: 'var(--success)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <CheckCircle2 size={18} /> {analysisResult.triage}
                                        </div>
                                        <button onClick={() => setAnalysisResult(null)} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}><X size={16} /></button>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>{analysisResult.advice}</p>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{analysisResult.action}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div style={{ width: '120px', height: '120px', borderRadius: '24px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MessageSquare size={64} color="var(--primary)" style={{ margin: 'auto' }} />
                    </div>
                </div>
            </div>

            {/* Service Selection Modal */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(5px)' }}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
                            className="glass-card"
                            style={{ width: '100%', maxWidth: '400px', padding: '32px', textAlign: 'center' }}
                        >
                            <h3 style={{ marginBottom: '16px' }}>{services.find(s => s.id === activeModal)?.title}</h3>
                            <p style={{ color: 'var(--text-dim)', marginBottom: '24px' }}>Connecting to SMC Centralized Reservation System...</p>
                            <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden', marginBottom: '24px' }}>
                                <motion.div
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    style={{ width: '40%', height: '100%', background: 'var(--primary)' }}
                                />
                            </div>
                            <button
                                onClick={() => setActiveModal(null)}
                                className="primary-btn"
                                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @keyframes pulse {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(244, 63, 94, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(244, 63, 94, 0); }
                }
                .animate-spin { animation: spin 1s linear infinite; }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
};

export default CitizenServices;
