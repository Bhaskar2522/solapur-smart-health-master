import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Activity,
    Building2,
    Users,
    Menu,
    Bell,
    X,
    Search,
    HeartPulse,
    ShieldAlert,
    LogOut,
    ExternalLink,
    LineChart,
    Settings,
    AlertTriangle,
    CheckCircle2,
    Info
} from 'lucide-react';

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showEmergencyModal, setShowEmergencyModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const navItems = [
        { path: '/dashboard', label: 'Overview', icon: <LayoutDashboard size={20} /> },
        { path: '/dashboard/surveillance', label: 'Disease Surveillance', icon: <Activity size={20} /> },
        { path: '/dashboard/infrastructure', label: 'Infrastructure', icon: <Building2 size={20} /> },
        { path: '/dashboard/citizen-services', label: 'Citizen Services', icon: <Users size={20} /> },
    ];

    const notifications = [
        { id: 1, title: 'Critical Alert', msg: 'Oxygen supply low at Civil Hospital.', type: 'critical', time: '5m ago' },
        { id: 2, title: 'System Update', msg: 'Weekly surveillance report is ready.', type: 'info', time: '1h ago' },
        { id: 3, title: 'New Case Detected', msg: 'Cluster spike in North Solapur (Zone 4).', type: 'warning', time: '2h ago' },
    ];

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // Simple navigation search mockup
        if (e.target.value.toLowerCase().includes('report')) navigate('/dashboard/reports');
        if (e.target.value.toLowerCase().includes('set')) navigate('/dashboard/settings');
    };

    return (
        <div className="layout">
            <AnimatePresence mode="wait">
                {isSidebarOpen && (
                    <motion.aside
                        initial={{ x: -280 }}
                        animate={{ x: 0 }}
                        exit={{ x: -280 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                        className="sidebar"
                    >
                        <div className="logo-container">
                            <div className="logo-icon-wrapper">
                                <HeartPulse size={24} color="#fff" />
                            </div>
                            <div className="logo-text">
                                <div style={{ fontSize: '0.75rem', opacity: 0.7, fontWeight: 500 }}>SMC SMART</div>
                                <div>HEALTH</div>
                            </div>
                        </div>

                        <nav className="nav-menu">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                                >
                                    <span style={{ color: location.pathname === item.path ? 'var(--primary)' : 'inherit' }}>
                                        {item.icon}
                                    </span>
                                    <span>{item.label}</span>
                                </Link>
                            ))}

                            <div style={{ marginTop: '24px', padding: '0 16px', fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600, letterSpacing: '0.05em' }}>PREFERENCES</div>

                            <Link to="/dashboard/reports" className={`nav-item ${location.pathname === '/dashboard/reports' ? 'active' : ''}`}>
                                <LineChart size={20} />
                                <span>Advanced Reports</span>
                            </Link>
                            <Link to="/dashboard/settings" className={`nav-item ${location.pathname === '/dashboard/settings' ? 'active' : ''}`}>
                                <Settings size={20} />
                                <span>Settings</span>
                            </Link>
                        </nav>

                        <div style={{ padding: '0 16px 20px' }}>
                            <Link to="/" className="nav-item" style={{ color: 'var(--accent)', background: 'rgba(244, 63, 94, 0.05)' }}>
                                <ExternalLink size={20} />
                                <span>Public Portal</span>
                            </Link>
                        </div>

                        <div className="user-profile">
                            <div className="avatar">A</div>
                            <div className="user-info" style={{ flex: 1 }}>
                                <p className="name">Dr. Sanjay Patil</p>
                                <p className="role">Chief Health Officer</p>
                            </div>
                            <Link to="/login" title="Logout" style={{ color: 'var(--text-dim)' }}><LogOut size={18} /></Link>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            <div className="main-content">
                <header className="top-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <button
                            className="icon-btn"
                            onClick={() => setSidebarOpen(!isSidebarOpen)}
                        >
                            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                        <div style={{ position: 'relative', marginLeft: '16px' }}>
                            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                            <input
                                type="text"
                                placeholder="Search medical data..."
                                value={searchQuery}
                                onChange={handleSearch}
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '10px',
                                    padding: '10px 16px 10px 40px',
                                    color: 'white',
                                    width: '300px',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </div>

                    <div className="header-actions">
                        <div style={{ position: 'relative' }}>
                            <button className="icon-btn" onClick={() => setShowNotifications(!showNotifications)}>
                                <Bell size={20} />
                                <span style={{
                                    position: 'absolute',
                                    top: '8px',
                                    right: '8px',
                                    width: '8px',
                                    height: '8px',
                                    background: 'var(--accent)',
                                    borderRadius: '50%',
                                    border: '2px solid var(--bg-main)'
                                }} />
                            </button>

                            <AnimatePresence>
                                {showNotifications && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="glass-card"
                                        style={{ position: 'absolute', top: '50px', right: 0, width: '320px', padding: '16px', zIndex: 1000, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                            <h4 style={{ fontWeight: 600 }}>Notifications</h4>
                                            <button onClick={() => setShowNotifications(false)} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}><X size={16} /></button>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            {notifications.map(n => (
                                                <div key={n.id} style={{ display: 'flex', gap: '12px', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                                                    <div style={{ color: n.type === 'critical' ? 'var(--danger)' : n.type === 'warning' ? 'var(--warning)' : 'var(--primary)' }}>
                                                        {n.type === 'critical' ? <AlertTriangle size={16} /> : <Info size={16} />}
                                                    </div>
                                                    <div>
                                                        <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{n.title}</div>
                                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{n.msg}</div>
                                                        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '4px' }}>{n.time}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            className="primary-btn"
                            onClick={() => setShowEmergencyModal(true)}
                            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <ShieldAlert size={18} />
                            Emergency Alert
                        </button>
                    </div>
                </header>

                <main className="page-content">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Outlet />
                    </motion.div>
                </main>
            </div>

            {/* Emergency Modal */}
            <AnimatePresence>
                {showEmergencyModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, backdropFilter: 'blur(5px)' }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="glass-card"
                            style={{ width: '100%', maxWidth: '500px', padding: '40px', textAlign: 'center', border: '2px solid var(--danger)' }}
                        >
                            <div style={{ width: '80px', height: '80px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--danger)' }}>
                                <ShieldAlert size={48} />
                            </div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '16px' }}>Public Health Emergency?</h2>
                            <p style={{ color: 'var(--text-dim)', marginBottom: '32px', lineHeight: 1.6 }}>
                                You are about to trigger a city-wide health emergency alert. This will notify all department heads and emergency services immediately.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <button
                                    onClick={() => setShowEmergencyModal(false)}
                                    style={{ padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '12px', color: 'white', fontWeight: 600, cursor: 'pointer' }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        alert('EMERGENCY BROADCAST SENT TO SMC COMMAND CENTER');
                                        setShowEmergencyModal(false);
                                    }}
                                    style={{ padding: '14px', background: 'var(--danger)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 20px rgba(239, 68, 68, 0.4)' }}
                                >
                                    BROADCAST ALERT
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Layout;
