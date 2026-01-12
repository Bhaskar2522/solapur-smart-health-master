import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Activity,
    ShieldAlert,
    LocateFixed,
    Thermometer,
    Microscope,
    AlertCircle,
    TrendingUp,
    Filter,
    MapPin,
    Search,
    Download,
    X,
    CheckCircle2
} from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts';

const diseaseData = [
    { name: 'Dengue', current: 120, predicted: 150 },
    { name: 'Malaria', current: 80, predicted: 70 },
    { name: 'Typhoid', current: 45, predicted: 60 },
    { name: 'Chikungunya', current: 30, predicted: 45 },
    { name: 'Influenza', current: 200, predicted: 180 },
];

const vulnerabilityData = [
    { name: 'North Solapur', value: 400, color: '#f43f5e' },
    { name: 'South Solapur', value: 300, color: '#f59e0b' },
    { name: 'Central Solapur', value: 200, color: '#0ea5e9' },
    { name: 'East Solapur', value: 278, color: '#10b981' },
];

const Surveillance = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [selectedZone, setSelectedZone] = useState('All Zones');

    const handleGenerateReport = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            alert('Surveillance Report Generated: SMC-SURV-2024-Q4.pdf');
        }, 2000);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '4px' }}>Disease Surveillance</h1>
                    <p style={{ color: 'var(--text-dim)' }}>Predictive analytics and early outbreak detection</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className="icon-btn"
                            style={{ width: 'auto', padding: '0 16px', borderRadius: '10px', gap: '8px', background: showFilter ? 'rgba(255,255,255,0.05)' : 'transparent' }}
                        >
                            <Filter size={18} /> {selectedZone}
                        </button>

                        <AnimatePresence>
                            {showFilter && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                                    style={{ position: 'absolute', top: '50px', right: 0, width: '200px', background: 'var(--bg-sidebar)', border: '1px solid var(--border)', borderRadius: '12px', padding: '8px', zIndex: 100 }}
                                >
                                    {['All Zones', 'North Solapur', 'South Solapur', 'Central Solapur', 'East Solapur'].map(zone => (
                                        <button
                                            key={zone}
                                            onClick={() => { setSelectedZone(zone); setShowFilter(false); }}
                                            style={{ width: '100%', padding: '10px', textAlign: 'left', background: 'none', border: 'none', color: selectedZone === zone ? 'var(--primary)' : 'white', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem' }}
                                        >
                                            {zone}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={handleGenerateReport}
                        className="primary-btn"
                        style={{ background: 'var(--primary)', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        {isGenerating ? <div className="animate-spin-fast"><Activity size={18} /></div> : <Download size={18} />}
                        Report
                    </button>
                </div>
            </div>

            <div className="grid-cols-4">
                {[
                    { label: 'Surveillance Points', value: '158', icon: <LocateFixed size={20} />, color: 'var(--primary)' },
                    { label: 'Active Alerts', value: '12', icon: <AlertCircle size={20} />, color: 'var(--accent)' },
                    { label: 'Lab Reports Today', value: '450', icon: <Microscope size={20} />, color: 'var(--secondary)' },
                    { label: 'High Risk Zones', value: '3', icon: <ShieldAlert size={20} />, color: 'var(--warning)' },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -3 }}
                        className="glass-card"
                        style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: `${item.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: item.color
                        }}>
                            {item.icon}
                        </div>
                        <div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{item.label}</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>{item.value}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
                <div className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h3 style={{ fontWeight: 600 }}>Outbreak Prediction Model (Next 14 Days)</h3>
                        <div className="badge warning">AI PREDICTION ACTIVE</div>
                    </div>
                    <div style={{ height: '350px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={diseaseData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                <XAxis dataKey="name" stroke="var(--text-dim)" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="var(--text-dim)" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ background: 'var(--bg-sidebar)', border: '1px solid var(--border)', borderRadius: '8px' }}
                                />
                                <Legend verticalAlign="top" height={36} />
                                <Bar dataKey="current" fill="var(--primary)" radius={[4, 4, 0, 0]} name="Current Cases" />
                                <Bar dataKey="predicted" fill="rgba(255,255,255,0.05)" stroke="var(--border)" radius={[4, 4, 0, 0]} name="Predicted Cases" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(244, 63, 94, 0.05)', borderRadius: '10px', border: '1px solid rgba(244, 63, 94, 0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <TrendingUp size={20} color="var(--danger)" />
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>
                            Forecast indicates a <b>15% rise</b> in Dengue cases due to seasonal patterns in North Solapur.
                        </span>
                    </div>
                </div>

                <div className="glass-card">
                    <h3 style={{ fontWeight: 600, marginBottom: '24px' }}>Zone Vulnerability Map</h3>
                    <div style={{ height: '280px', position: 'relative' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={vulnerabilityData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={90}
                                    paddingAngle={8}
                                    dataKey="value"
                                >
                                    {vulnerabilityData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Major Risk</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--danger)' }}>North</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
                        {vulnerabilityData.map((zone, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: zone.color }} />
                                    <span style={{ fontSize: '0.9rem' }}>{zone.name}</span>
                                </div>
                                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{Math.round(zone.value / 11.78)}% Risk</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="glass-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontWeight: 600 }}>Active Surveillance Alerts</h3>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <span className="badge" style={{ background: 'rgba(244, 63, 94, 0.1)', color: 'var(--danger)' }}>2 High Priority</span>
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                    {[
                        { title: 'Cluster Detected', location: 'Ashok Chowk', level: 'High', msg: 'Multiple Dengue cases reported within 500m radius.', time: '2h ago' },
                        { title: 'Waste Management Alert', location: 'Navi Peth', level: 'Medium', msg: 'Accumulated water reports increasing risk factor.', time: '5h ago' },
                        { title: 'Unusual Fever Spike', location: 'Bhavani Peth', level: 'High', msg: '15 fever cases reported in 24 hours at SMC Clinic #4.', time: '1d ago' },
                    ].map((alert, i) => (
                        <div key={i} className="hover-lift" style={{
                            padding: '20px',
                            borderRadius: '16px',
                            background: alert.level === 'High' ? 'rgba(244, 63, 94, 0.03)' : 'rgba(245, 158, 11, 0.03)',
                            border: `1px solid ${alert.level === 'High' ? 'rgba(244, 63, 94, 0.15)' : 'rgba(245, 158, 11, 0.15)'}`,
                            cursor: 'pointer'
                        }} onClick={() => window.confirm(`Acknowledge alert at ${alert.location}?`)}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <span style={{ fontWeight: 700, fontSize: '1rem' }}>{alert.title}</span>
                                <span className={`badge ${alert.level.toLowerCase()}`}>{alert.level}</span>
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <MapPin size={14} /> {alert.location}
                            </div>
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-dim)' }}>{alert.msg}</p>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
                                <span>{alert.time}</span>
                                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Manage Response →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .animate-spin-fast { animation: spin 0.8s linear infinite; }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .hover-lift { transition: transform 0.2s, background 0.2s; }
                .hover-lift:hover { transform: translateY(-4px); background: rgba(255,255,255,0.05) !important; }
            `}</style>
        </div>
    );
};

export default Surveillance;
