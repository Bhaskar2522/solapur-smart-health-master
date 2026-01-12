import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
    HeartPulse,
    User,
    Mail,
    Lock,
    Shield,
    Building,
    ArrowRight,
    CheckCircle
} from 'lucide-react';

const Signup = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const handleSignup = (e) => {
        e.preventDefault();
        if (step < 2) {
            setStep(step + 1);
        } else {
            navigate('/login');
        }
    };

    return (
        <div style={{
            backgroundColor: '#020617',
            color: 'white',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorations */}
            <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '30%', height: '30%', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent)', zIndex: 0 }} />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    width: '100%',
                    maxWidth: '520px',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'white' }}>
                        <div style={{ background: 'var(--secondary)', padding: '8px', borderRadius: '10px' }}>
                            <HeartPulse color="white" size={24} />
                        </div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Personnel Registration</h2>
                    </Link>
                </div>

                <div className="glass-card" style={{ padding: '40px' }}>
                    {/* Progress Bar */}
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
                        <div style={{ height: '4px', flex: 1, background: 'var(--primary)', borderRadius: '2px' }} />
                        <div style={{ height: '4px', flex: 1, background: step >= 2 ? 'var(--primary)' : 'rgba(255,255,255,0.1)', borderRadius: '2px' }} />
                    </div>

                    <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {step === 1 ? (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>Basic Information</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>First Name</label>
                                        <input type="text" placeholder="Dr. Sanjay" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '10px', color: 'white' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Last Name</label>
                                        <input type="text" placeholder="Patil" required style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '10px', color: 'white' }} />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Health Council Reg. No</label>
                                    <div style={{ position: 'relative' }}>
                                        <Shield size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                                        <input type="text" placeholder="SMC/MED/2024/042" required style={{ width: '100%', padding: '12px 12px 12px 40px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '10px', color: 'white' }} />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Department / Facility</label>
                                    <div style={{ position: 'relative' }}>
                                        <Building size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                                        <select style={{ width: '100%', padding: '12px 12px 12px 40px', background: '#1e293b', border: '1px solid var(--border)', borderRadius: '10px', color: 'white', appearance: 'none' }}>
                                            <option>North Solapur SMC Clinic</option>
                                            <option>Civil Hospital</option>
                                            <option>Surveillance Unit</option>
                                            <option>Admin HQ</option>
                                        </select>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>Security Credentials</h3>
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Work Email</label>
                                    <div style={{ position: 'relative' }}>
                                        <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                                        <input type="email" placeholder="s.patil@solapurcorporation.gov.in" required style={{ width: '100%', padding: '12px 12px 12px 40px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '10px', color: 'white' }} />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Create Password</label>
                                    <div style={{ position: 'relative' }}>
                                        <Lock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                                        <input type="password" placeholder="••••••••" required style={{ width: '100%', padding: '12px 12px 12px 40px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '10px', color: 'white' }} />
                                    </div>
                                </div>
                                <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--success)', display: 'flex', gap: '8px' }}>
                                        <CheckCircle size={14} /> Your request will be sent to the SMC IT Dept for verification.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            className="primary-btn"
                            style={{
                                background: 'var(--primary)',
                                padding: '14px',
                                marginTop: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px'
                            }}
                        >
                            {step === 1 ? 'Save & Continue' : 'Submit Registration Request'} <ArrowRight size={18} />
                        </button>
                    </form>
                </div>

                <div style={{ textAlign: 'center', marginTop: '32px' }}>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                        Already have access? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Log In</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
