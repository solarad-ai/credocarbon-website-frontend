import { useState, useEffect } from 'react';
import { X, Send, User, Phone, Mail, MessageSquare, Loader2, CheckCircle } from 'lucide-react';

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [charCount, setCharCount] = useState(0);

    const MAX_CHARS = 2000;

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'message' && value.length > MAX_CHARS) return;

        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === 'message') {
            setCharCount(value.length);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create mailto link with form data
        const subject = encodeURIComponent(`Contact from ${formData.name} - CredoCarbon Website`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n\n` +
            `Message:\n${formData.message}`
        );

        // Open mailto link
        window.location.href = `mailto:info@credocarbon.com?subject=${subject}&body=${body}`;

        // Show success state
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ name: '', phone: '', email: '', message: '' });
                setCharCount(0);
                onClose();
            }, 2000);
        }, 500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-2xl shadow-emerald-500/10">
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-700/50 bg-slate-900/95 backdrop-blur-sm px-6 py-5">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-50">Get in Touch</h2>
                        <p className="text-sm text-slate-400 mt-1">We'd love to hear from you</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl border border-slate-600 text-slate-400 hover:text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-all duration-200"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                            <User className="w-4 h-4 text-emerald-400" />
                            Full Name <span className="text-emerald-400">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                            <Mail className="w-4 h-4 text-emerald-400" />
                            Email Address <span className="text-emerald-400">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200"
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                            <Phone className="w-4 h-4 text-emerald-400" />
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                                <MessageSquare className="w-4 h-4 text-emerald-400" />
                                Your Message <span className="text-emerald-400">*</span>
                            </label>
                            <span className={`text-xs ${charCount > MAX_CHARS * 0.9 ? 'text-amber-400' : 'text-slate-500'}`}>
                                {charCount}/{MAX_CHARS} characters
                            </span>
                        </div>
                        <textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project, requirements, or how we can help you..."
                            rows={8}
                            className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-800/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${isSubmitted
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02]'
                                } disabled:opacity-70 disabled:cursor-not-allowed`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Opening Email Client...
                                </>
                            ) : isSubmitted ? (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    Email Client Opened!
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </div>

                    {/* Info text */}
                    <p className="text-center text-xs text-slate-500 pt-2">
                        This will open your default email client with the form details pre-filled.
                        <br />
                        Alternatively, email us directly at{' '}
                        <a href="mailto:info@credocarbon.com" className="text-emerald-400 hover:underline">
                            info@credocarbon.com
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
