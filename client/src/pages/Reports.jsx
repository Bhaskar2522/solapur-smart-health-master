import React from 'react';
import { motion } from 'framer-motion';
import {
    Download,
    Calendar,
    Filter,
    FileText,
    TrendingUp,
    BarChart2,
    PieChart as PieChartIcon,
    Table as TableIcon
} from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    ComposedChart,
    Line,
    Area
} from 'recharts';

const reportData = [
    { month: 'Jan', morbidity: 45, mortality: 2, outpatient: 1200 },
    { month: 'Feb', morbidity: 52, mortality: 1, outpatient: 1350 },
    { month: 'Mar', morbidity: 48, mortality: 3, outpatient: 1100 },
    { month: 'Apr', morbidity: 70, mortality: 5, outpatient: 1600 },
    { month: 'May', morbidity: 85, mortality: 6, outpatient: 1900 },
    { month: 'Jun', morbidity: 65, mortality: 4, outpatient: 1450 },
];

const Reports = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '4px' }}>Advanced Health Analytics</h1>
                    <p style={{ color: 'var(--text-dim)' }}>Comprehensive data modeling for SMC administrative planning</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button className="icon-btn" style={{ width: 'auto', padding: '0 16px', borderRadius: '10px', gap: '8px' }}>
                        <Calendar size={18} /> Last 6 Months
                    </button>
                    <button className="primary-btn" style={{ background: 'var(--primary)', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Download size={18} /> Export PDF
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                {[
                    { title: 'Data Integrity', value: '99.8%', trend: '+0.2%', icon: <ShieldCheck color="var(--success)" /> },
                    { title: 'Validation Rate', value: '1,240/d', trend: '+12%', icon: <CheckCircle color="var(--primary)" /> },
                    { title: 'Report Requests', value: '45', trend: 'Monthly', icon: <FileText color="var(--secondary)" /> },
                ].map((stat, i) => (
                    <div key={i} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-dim)', marginBottom: '8px' }}>{stat.title}</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--success)', marginTop: '4px' }}>{stat.trend} from baseline</div>
                        </div>
                        <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                    <h3 style={{ fontWeight: 600 }}>Health Indicator Comparison</h3>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="badge stable" style={{ background: 'rgba(14, 165, 233, 0.1)', border: 'none', cursor: 'pointer' }}>Morbidity</button>
                        <button className="badge" style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-dim)', border: 'none', cursor: 'pointer' }}>Outpatient</button>
                    </div>
                </div>
                <div style={{ height: '400px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={reportData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                            <XAxis dataKey="month" stroke="var(--text-dim)" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis yAxisId="left" stroke="var(--text-dim)" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis yAxisId="right" orientation="right" stroke="var(--text-dim)" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip contentStyle={{ background: 'var(--bg-sidebar)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                            <Legend verticalAlign="top" height={36} />
                            <Area yAxisId="right" type="monotone" dataKey="outpatient" fill="rgba(99, 102, 241, 0.1)" stroke="var(--secondary)" />
                            <Bar yAxisId="left" dataKey="morbidity" barSize={40} fill="var(--primary)" radius={[4, 4, 0, 0]} />
                            <Line yAxisId="left" type="monotone" dataKey="mortality" stroke="var(--danger)" strokeWidth={3} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div className="glass-card">
                    <h3 style={{ fontWeight: 600, marginBottom: '24px' }}>Report History</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            { name: 'Weekly Epidemiology Brief - W42', size: '2.4 MB', date: 'Oct 24, 2024' },
                            { name: 'SMC Hospital Bed Audit Q3', size: '1.8 MB', date: 'Oct 20, 2024' },
                            { name: 'Dengue Outbreak Prediction Re-cap', size: '4.5 MB', date: 'Oct 15, 2024' },
                            { name: 'Medical Asset Depreciation List', size: '1.1 MB', date: 'Oct 02, 2024' },
                        ].map((file, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <FileText color="var(--primary)" />
                                    <div>
                                        <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>{file.name}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{file.date} • {file.size}</div>
                                    </div>
                                </div>
                                <button className="icon-btn" style={{ borderRadius: '8px' }}><Download size={16} /></button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card">
                    <h3 style={{ fontWeight: 600, marginBottom: '24px' }}>Analytical Breakdown</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {[
                            { label: 'Mortality Rate', value: '1.2%', sub: 'Avg per 1000' },
                            { label: 'Bed Turnaround', value: '4.2d', sub: 'Occupancy Cycle' },
                            { label: 'Vaccination Coverage', value: '92%', sub: 'Target: 95%' },
                            { label: 'Emergency Response', value: '9.4m', sub: 'City Avg' },
                        ].map((m, i) => (
                            <div key={i} style={{ padding: '20px', background: 'rgba(14, 165, 233, 0.03)', borderRadius: '16px', border: '1px solid var(--border)' }}>
                                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>{m.value}</div>
                                <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{m.label}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{m.sub}</div>
                            </div>
                        ))}
                    </div>
                    <button className="primary-btn" style={{ width: '100%', marginTop: '24px', background: 'rgba(255,255,255,0.05)', color: 'white' }}>
                        Request Custom Data Extraction
                    </button>
                </div>
            </div>
        </div>
    );
};

// Helper components for imports
const ShieldCheck = ({ color }) => <FileText color={color} size={20} />;
const CheckCircle = ({ color }) => <TrendingUp color={color} size={20} />;

export default Reports;
