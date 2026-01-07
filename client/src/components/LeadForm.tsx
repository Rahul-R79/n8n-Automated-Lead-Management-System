import React, { useState } from 'react';
import axios from 'axios';

const LeadForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(false);
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/leads`, formData);
            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (err: any) {
            setError(err.response?.data?.message || 'Something went wrong. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-lg p-8 space-y-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 relative overflow-hidden ring-1 ring-gray-900/5">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            <div className="text-center relative z-10">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight">
                    Get in Touch
                </h2>
                <p className="mt-3 text-gray-500 text-lg font-medium leading-relaxed">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1 ml-1 transition-colors group-focus-within:text-indigo-600">Full Name</label>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all duration-300 outline-none hover:bg-white text-gray-900 placeholder-gray-400"
                            placeholder="Ex. John Doe"
                        />
                    </div>
                </div>

                <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1 ml-1 transition-colors group-focus-within:text-indigo-600">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all duration-300 outline-none hover:bg-white text-gray-900 placeholder-gray-400"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1 ml-1 transition-colors group-focus-within:text-indigo-600">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all duration-300 outline-none hover:bg-white text-gray-900 placeholder-gray-400 resize-none"
                        placeholder="How can we help you?"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-bold text-white tracking-wide
            ${isLoading
                            ? 'bg-indigo-400 cursor-not-allowed transform-none'
                            : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200'}
          `}
                >
                    {isLoading ? (
                        <span className="flex items-center space-x-2">
                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                        </span>
                    ) : 'Send Message'}
                </button>

                {success && (
                    <div className="mt-4 p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl text-sm font-medium flex items-center justify-between animate-fade-in shadow-sm">
                        <div className="flex items-center">
                            <span className="mr-2 text-xl">✨</span> Message sent successfully! We'll get back to you soon.
                        </div>
                        <button
                            type="button"
                            onClick={() => setSuccess(false)}
                            className="ml-4 p-1 rounded-full hover:bg-green-100 text-green-500 hover:text-green-700 transition-colors"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}
                {error && (
                    <div className="mt-4 p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl text-sm font-medium flex items-center justify-between animate-fade-in shadow-sm">
                        <div className="flex items-center">
                            <span className="mr-2 text-xl">🚨</span> {error}
                        </div>
                        <button
                            type="button"
                            onClick={() => setError(null)}
                            className="ml-4 p-1 rounded-full hover:bg-red-100 text-red-500 hover:text-red-700 transition-colors"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default LeadForm;
