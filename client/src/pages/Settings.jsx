import React from 'react';
import { motion } from 'framer-motion';
import {
    User,
    Bell,
    Shield,
    Database,
    Globe,
    HelpCircle,
    ChevronRight,
    Camera,
    CreditCard
} from 'lucide-react';

const Settings = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1000px' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '4px' }}>Account Settings</h1>
                <p style={{ color: 'var(--text-dim)' }}>Manage your SMC medical personnel profile and portal preferences</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {[
                        { icon: <User size={20} />, label: 'Profile Information', active: true },
                        { icon: <Bell size={20} />, label: 'Notifications' },
                        { icon: <Shield size={20} />, label: 'Security & Auth' },
                        { icon: <Database size={20} />, label: 'Data Connectivity' },
                        { icon: <Globe size={20} />, label: 'Language & Region' },
                        { icon: <HelpCircle size={20} />, label: 'Help & Support' },
                    ].map((item, i) => (
                        <button
                            key={i}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '12px 16px',
                                background: item.active ? 'rgba(14, 165, 233, 0.1)' : 'none',
                                border: 'none',
                                borderRadius: '12px',
                                color: item.active ? 'var(--primary)' : 'var(--text-dim)',
                                fontWeight: 500,
                                textAlign: 'left',
                                cursor: 'pointer'
                            }}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className="glass-card" style={{ padding: '32px' }}>
                        <h3 style={{ fontWeight: 600, marginBottom: '24px' }}>Profile Information</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
                            <div style={{ position: 'relative' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'var(--bg-sidebar)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800 }}>
                                    A
                                </div>
                                <button style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '28px', height: '28px', borderRadius: '50%', background: 'var(--primary)', border: '2px solid var(--bg-main)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <Camera size={14} />
                                </button>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '1.1rem' }}>Dr. Sanjay Patil</h4>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>s.patil@solapurcorporation.gov.in</p>
                                <div className="badge stable" style={{ marginTop: '8px', fontSize: '0.7rem' }}>SMC VERIFIED PERSONNEL</div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div>
                                <label style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'block', marginBottom: '8px' }}>Specialization</label>
                                <input type="text" defaultValue="Epidemiologist" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '10px', color: 'white' }} />
                            </div>
                            <div>
                                <label style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'block', marginBottom: '8px' }}>Employee ID</label>
                                <input type="text" defaultValue="SMC-EMP-8842" disabled style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border)', borderRadius: '10px', color: 'var(--text-muted)', cursor: 'not-allowed' }} />
                            </div>
                            <div className="full-width" style={{ gridColumn: '1 / span 2' }}>
                                <label style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'block', marginBottom: '8px' }}>Bio / Clinical Focus</label>
                                <textarea style={{ width: '100%', height: '100px', padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '10px', color: 'white', resize: 'none' }}>Active monitoring of water-borne diseases in Central Solapur. Overlooking digital integration of private pharmacies into the SMC network.</textarea>
                            </div>
                        </div>

                        <button className="primary-btn" style={{ background: 'var(--primary)', marginTop: '24px' }}>Save Profile Changes</button>
                    </div>

                    <div className="glass-card" style={{ padding: '32px' }}>
                        <h3 style={{ fontWeight: 600, marginBottom: '24px' }}>Authentication & Security</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                { title: 'Two-Factor Authentication (2FA)', status: 'Enabled', msg: 'Secure your account with OTP via SMC App.' },
                                { title: 'Single Sign-On (SSO)', status: 'Configured', msg: 'Linked to National Health Stack credentials.' }
                            ].map((s, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                    <div>
                                        <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{s.title}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '4px' }}>{s.msg}</div>
                                    </div>
                                    <button style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '8px', color: 'var(--success)', fontWeight: 600, fontSize: '0.8rem' }}>{s.status}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
