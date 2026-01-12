import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Activity,
    Users,
    AlertTriangle,
    BedDouble,
    TrendingUp,
    MapPin,
    Stethoscope,
    Hospital,
    ArrowUpRight,
    ArrowDownRight,
    Search,
    Filter,
    ChevronRight
} from 'lucide-react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';

const data = [
    { name: 'Mon', value: 400, trend: 240 },
    { name: 'Tue', value: 300, trend: 139 },
    { name: 'Wed', value: 200, trend: 980 },
    { name: 'Thu', value: 278, trend: 390 },
    { name: 'Fri', value: 189, trend: 480 },
    { name: 'Sat', value: 239, trend: 380 },
    { name: 'Sun', value: 349, trend: 430 },
];

const Dashboard = () => {
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        activeIncidents: 42,
        criticalZones: 5,
        hospitalBeds: '82%',
        recoveries: 1240
    });

    return (
        <div className="space-y-8">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '4px' }}>Health Command Center</h1>
                    <p style={{ color: 'var(--text-dim)' }}>Real-time health monitoring for Solapur City</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Last updated: Just now</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)', fontSize: '0.875rem' }}>
                            <div style={{ width: '8px', height: '8px', background: 'var(--success)', borderRadius: '50%' }} />
                            System Online
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid-cols-4">
                {[
                    { title: 'Total Active Outbreaks', value: stats.activeIncidents, trend: '+12%', color: 'var(--primary)', path: '/dashboard/surveillance' },
                    { title: 'Critical Hotspots', value: stats.criticalZones, trend: '-2', color: 'var(--accent)', path: '/dashboard/surveillance' },
                    { title: 'Hospital Bed Capacity', value: stats.hospitalBeds, trend: '8 Locked', color: 'var(--success)', path: '/dashboard/infrastructure' },
                    { title: 'Vulnerability Index', value: '0.24', trend: 'Low Risk', color: 'var(--secondary)', path: '/dashboard/reports' }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="glass-card"
                        onClick={() => navigate(stat.path)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="stat-title">{stat.title}</div>
                        <div className="stat-value" style={{ color: stat.color }}>
                            {stat.value}
                            <span className="stat-trend" style={{ background: `${stat.color}15`, color: stat.color }}>{stat.trend}</span>
                        </div>
                        <div style={{ height: '40px', marginTop: '12px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <Area type="monotone" dataKey="value" stroke={stat.color} fill={stat.color} fillOpacity={0.1} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginTop: '32px' }}>
                <div className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h3 style={{ fontWeight: 600 }}>Disease Transmission Trend</h3>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button className="icon-btn" style={{ padding: '4px 12px', fontSize: '0.75rem' }}>Weekly</button>
                            <button className="icon-btn" style={{ padding: '4px 12px', fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)' }}>Monthly</button>
                        </div>
                    </div>
                    <div style={{ height: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                <XAxis dataKey="name" stroke="var(--text-dim)" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="var(--text-dim)" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ background: 'var(--bg-sidebar)', border: '1px solid var(--border)', borderRadius: '8px' }}
                                    itemStyle={{ color: 'var(--primary)' }}
                                />
                                <Line type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={3} dot={{ r: 4, fill: 'var(--primary)', strokeWidth: 2, stroke: 'var(--bg-main)' }} />
                                <Line type="monotone" dataKey="trend" stroke="var(--secondary)" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h3 style={{ fontWeight: 600 }}>Top Critical Hotspots</h3>
                        <button className="icon-btn" onClick={() => navigate('/dashboard/surveillance')}><ChevronRight size={16} /></button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            { name: 'Ashok Chowk', count: 12, risk: 'High' },
                            { name: 'Navi Peth', count: 8, risk: 'Medium' },
                            { name: 'Saat Rasta', count: 5, risk: 'Medium' },
                            { name: 'Bhavani Peth', count: 3, risk: 'Low' },
                        ].map((zone, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(14, 165, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                    <MapPin size={20} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 500 }}>{zone.name}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{zone.count} active cases</div>
                                </div>
                                <div className={`badge ${zone.risk.toLowerCase()}`}>
                                    {zone.risk}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="primary-btn" style={{ width: '100%', marginTop: '20px', background: 'rgba(255,255,255,0.03)', color: 'white' }} onClick={() => navigate('/dashboard/surveillance')}>
                        View Geo-Mapping
                    </button>
                </div>
            </div>

            <div className="glass-card" style={{ marginTop: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ fontWeight: 600 }}>Recent Medical Infrastructure Alerts</h3>
                    <button
                        onClick={() => navigate('/dashboard/infrastructure')}
                        style={{ color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                        View All Tracking <ArrowUpRight size={14} />
                    </button>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table className="custom-table" style={{ textAlign: 'left' }}>
                        <thead>
                            <tr>
                                <th>Facility Name</th>
                                <th>Category</th>
                                <th>Oxygen Level</th>
                                <th>Beds Available</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: 'Civil Hospital Solapur', cat: 'Government', oxygen: 92, beds: '45/500', status: 'CRITICAL', color: 'var(--danger)' },
                                { name: 'SMC General Hospital', cat: 'Municipal', oxygen: 75, beds: '124/200', status: 'STABLE', color: 'var(--success)' },
                                { name: 'Ashwini Rugnalaya', cat: 'Private', oxygen: 88, beds: '12/150', status: 'CRITICAL', color: 'var(--danger)' }
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td>{row.name}</td>
                                    <td style={{ color: 'var(--text-dim)', fontSize: '0.875rem' }}>{row.cat}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ width: '60px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                                                <div style={{ width: `${row.oxygen}%`, height: '100%', background: row.oxygen < 80 ? 'var(--warning)' : 'var(--success)' }} />
                                            </div>
                                            {row.oxygen}%
                                        </div>
                                    </td>
                                    <td>{row.beds}</td>
                                    <td><span className="badge" style={{ background: `${row.color}15`, color: row.color }}>{row.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;
