import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
    HeartPulse,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Chrome,
    ArrowRight,
    UserCircle,
    Shield
} from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Redirect to dashboard
        navigate('/dashboard');
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
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1), transparent)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent)', zIndex: 0 }} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    width: '100%',
                    maxWidth: '440px',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'white' }}>
                        <div style={{ background: 'var(--primary)', padding: '10px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)' }}>
                            <HeartPulse color="white" size={32} />
                        </div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Portal Access</h2>
                    </Link>
                    <p style={{ color: 'var(--text-dim)', marginTop: '12px' }}>Secure health monitoring for Solapur City</p>
                </div>

                <div className="glass-card" style={{ padding: '40px' }}>
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px', color: 'var(--text-muted)' }}>Email/Health ID</label>
                            <div style={{ position: 'relative' }}>
                                <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                                <input
                                    type="text"
                                    placeholder="Enter your registered email"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px 14px 48px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '12px',
                                        color: 'white',
                                        outline: 'none',
                                        transition: '0.2s',
                                        fontSize: '0.95rem'
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)' }}>Password</label>
                                <a href="#" style={{ fontSize: '0.825rem', color: 'var(--primary)', textDecoration: 'none' }}>Forgot?</a>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '14px 48px 14px 48px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '12px',
                                        color: 'white',
                                        outline: 'none',
                                        transition: '0.2s',
                                        fontSize: '0.95rem'
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ background: 'none', border: 'none', position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)', cursor: 'pointer' }}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input type="checkbox" id="remember" style={{ accentColor: 'var(--primary)' }} />
                            <label htmlFor="remember" style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Remember this device</label>
                        </div>

                        <button
                            type="submit"
                            className="primary-btn"
                            style={{
                                background: 'var(--primary)',
                                padding: '14px',
                                fontSize: '1rem',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                boxShadow: '0 4px 15px rgba(14, 165, 233, 0.4)'
                            }}
                        >
                            Log In to Portal <ArrowRight size={18} />
                        </button>
                    </form>

                    <div style={{ margin: '32px 0', position: 'relative', textAlign: 'center' }}>
                        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--border)', zIndex: 0 }} />
                        <span style={{ position: 'relative', background: '#0f172a', padding: '0 16px', color: 'var(--text-dim)', fontSize: '0.8rem', zIndex: 1 }}>OR USE OTHER METHODS</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <button style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '12px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '0.875rem', cursor: 'pointer' }}>
                            <UserCircle size={18} /> ABHA ID
                        </button>
                        <button style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '12px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '0.875rem', cursor: 'pointer' }}>
                            <Shield size={18} /> GOV.IN
                        </button>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '32px' }}>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                        New department user? <Link to="/signup" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Request Registration</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
