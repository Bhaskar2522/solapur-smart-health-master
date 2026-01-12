import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2,
    Bed,
    Zap,
    Package,
    Hospital,
    Search,
    ChevronDown,
    Plus,
    AlertTriangle,
    CheckCircle2,
    Settings,
    X,
    ClipboardList
} from 'lucide-react';

const initialAssets = [
    { id: 1, name: 'Oxygen Concentrators', total: 450, available: 412, status: 'Operational' },
    { id: 2, name: 'Ventilators', total: 85, available: 12, status: 'Critical' },
    { id: 3, name: 'X-Ray Machines', total: 12, available: 10, status: 'Operational' },
    { id: 4, name: 'Ambulances (BLS)', total: 24, available: 18, status: 'Operational' },
    { id: 5, name: 'Ambulances (ALS)', total: 8, available: 3, status: 'Maintenance' },
];

const medicineStock = [
    { name: 'Paracetamol 500mg', stock: '24,500', min: '10,000', status: 'Sufficient' },
    { name: 'Insulin Glargine', stock: '450', min: '1,000', status: 'Low Stock' },
    { name: 'Amoxicillin 250mg', stock: '12,000', min: '8,000', status: 'Sufficient' },
    { name: 'Vitamin C Drops', stock: '1,200', min: '5,000', status: 'Low Stock' },
    { name: 'DEXA Scans', stock: '200', min: '500', status: 'Moderate' },
];

const Infrastructure = () => {
    const [assets, setAssets] = useState(initialAssets);
    const [searchQuery, setSearchQuery] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [newAsset, setNewAsset] = useState({ name: '', total: '', available: '', status: 'Operational' });

    const filteredAssets = assets.filter(a =>
        a.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddAsset = (e) => {
        e.preventDefault();
        setAssets([...assets, { ...newAsset, id: Date.now(), total: parseInt(newAsset.total), available: parseInt(newAsset.available) }]);
        setShowAddModal(false);
        setNewAsset({ name: '', total: '', available: '', status: 'Operational' });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '4px' }}>Infrastructure Monitoring</h1>
                    <p style={{ color: 'var(--text-dim)' }}>Real-time inventory and facility status</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button className="icon-btn" style={{ width: 'auto', padding: '0 16px', borderRadius: '10px', gap: '8px' }}>
                        <ClipboardList size={18} /> Asset Manager
                    </button>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="primary-btn"
                        style={{ background: 'var(--primary)', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)' }}
                    >
                        <Plus size={18} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> Add Asset
                    </button>
                </div>
            </div>

            <div className="grid-cols-4">
                {[
                    { label: 'Total Hospitals', value: '42', icon: <Hospital size={20} />, sub: '12 Govt | 30 Private' },
                    { label: 'ICU Bed Occupancy', value: '94%', icon: <Bed size={20} />, sub: '8 Reserved for SMC' },
                    { label: 'Medical Oxygen', value: '18.4', icon: <Zap size={20} />, sub: 'Metric Tons (MT)' },
                    { label: 'Supply Alerts', value: '08', icon: <Package size={20} />, sub: 'Require urgent restock' },
                ].map((stat, i) => (
                    <motion.div key={i} whileHover={{ y: -5 }} className="glass-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <div style={{ color: 'var(--primary)' }}>{stat.icon}</div>
                            <div className="trend-up" style={{ fontSize: '0.75rem' }}>Live</div>
                        </div>
                        <div style={{ fontSize: '1.875rem', fontWeight: '700' }}>{stat.value}</div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{stat.label}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>{stat.sub}</div>
                    </motion.div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h3 style={{ fontWeight: 600 }}>Medical Equipment Readiness</h3>
                        <div style={{ position: 'relative' }}>
                            <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                            <input
                                type="text"
                                placeholder="Search equipment"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', padding: '6px 12px 6px 32px', fontSize: '0.875rem', color: 'white' }}
                            />
                        </div>
                    </div>
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Equipment</th>
                                <th>Availability</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAssets.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>
                                        <div style={{ fontSize: '0.875rem' }}>{item.available} / {item.total}</div>
                                        <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '4px' }}>
                                            <div style={{ width: `${(item.available / item.total) * 100}%`, height: '100%', background: item.available / item.total < 0.3 ? 'var(--danger)' : 'var(--success)', borderRadius: '2px' }} />
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`badge ${item.status === 'Operational' ? 'stable' : item.status === 'Critical' ? 'critical' : 'warning'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h3 style={{ fontWeight: 600 }}>Medicine Stock (SMC Central Store)</h3>
                        <div className="badge warning">STOCKS LOW</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {medicineStock.map((med, i) => (
                            <div key={i} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span style={{ fontWeight: 500 }}>{med.name}</span>
                                    <span style={{ color: med.status === 'Low Stock' ? 'var(--danger)' : med.status === 'Moderate' ? 'var(--warning)' : 'var(--success)', fontWeight: 600 }}>{med.stock} units</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px' }}>
                                        <div style={{
                                            width: `${Math.min(100, (parseInt(med.stock.replace(',', '')) / 25000) * 100)}%`,
                                            height: '100%',
                                            background: med.status === 'Low Stock' ? 'var(--danger)' : med.status === 'Moderate' ? 'var(--warning)' : 'var(--success)',
                                            borderRadius: '3px'
                                        }} />
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Min: {med.min}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Maintenance Schedule with Details Action */}
            <div className="glass-card">
                <h3 style={{ fontWeight: 600, marginBottom: '20px' }}>Facility Maintenance Schedule</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {[
                        { hospital: 'Civil Hospital', task: 'Oxygen Generator Service', date: 'Tomorrow, 10:00 AM', priority: 'High', status: 'Pending' },
                        { hospital: 'SMC Clinic #12', task: 'Solar Inverter Inspection', date: '15 Jan 2026', priority: 'Normal', status: 'Scheduled' },
                        { hospital: 'ESIC Hospital', task: 'Ventilator Calibration', date: 'Ongoing', priority: 'High', status: 'In Progress' },
                    ].map((task, i) => (
                        <div key={i} style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: task.priority === 'High' ? 'var(--danger)' : 'var(--primary)' }} />
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '4px' }}>{task.hospital}</div>
                            <div style={{ fontWeight: 600, marginBottom: '8px' }}>{task.task}</div>
                            <div style={{ fontSize: '0.875rem', marginBottom: '12px' }}>{task.date}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}>{task.status}</span>
                                <button
                                    onClick={() => alert(`Showing technical specs for: ${task.task}`)}
                                    style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600 }}
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add Asset Modal */}
            <AnimatePresence>
                {showAddModal && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(5px)' }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                            className="glass-card"
                            style={{ width: '100%', maxWidth: '440px', padding: '32px' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                <h3 style={{ fontWeight: 600 }}>Provision New Medical Asset</h3>
                                <button onClick={() => setShowAddModal(false)} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}><X size={20} /></button>
                            </div>
                            <form onSubmit={handleAddAsset} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div>
                                    <label style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '8px', display: 'block' }}>Asset Name</label>
                                    <input required type="text" value={newAsset.name} onChange={e => setNewAsset({ ...newAsset, name: e.target.value })} style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '10px', color: 'white' }} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <div>
                                        <label style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '8px', display: 'block' }}>Total Units</label>
                                        <input required type="number" value={newAsset.total} onChange={e => setNewAsset({ ...newAsset, total: e.target.value })} style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '10px', color: 'white' }} />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '8px', display: 'block' }}>Available</label>
                                        <input required type="number" value={newAsset.available} onChange={e => setNewAsset({ ...newAsset, available: e.target.value })} style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '10px', color: 'white' }} />
                                    </div>
                                </div>
                                <button type="submit" className="primary-btn" style={{ background: 'var(--primary)', padding: '14px', marginTop: '12px' }}>Register Asset</button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Infrastructure;
