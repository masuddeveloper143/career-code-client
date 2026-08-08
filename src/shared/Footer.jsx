import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
    const resources = ["About us", "Our Team", "Products", "Contact"];
    const community = ["Feature", "Pricing", "Credit", "FAQ"];
    const quickLinks = ["iOS", "Android", "Microsoft", "Desktop"];
    const more = ["Privacy", "Help", "Terms", "FAQ"];

    const FooterColumn = ({ title, links }) => (
        <div>
            <h4 className="font-semibold text-slate-900 mb-4">{title}</h4>
            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link}>
                        <a
                            href="#"
                            className="text-slate-500 hover:text-slate-800 transition-colors text-sm"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer className="bg-white px-6 py-12 md:px-16 relative mb-0">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-7 gap-8">
                {/* Brand */}
                <div className="col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-md bg-indigo-500" />
                        <span className="text-xl font-bold text-slate-900">JobBox</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
                        JobBox is the heart of the design community and the best resource
                        to discover and connect with designers and jobs worldwide.
                    </p>
                    <div className="flex gap-3">
                        {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                            >
                                <Icon size={14} />
                            </a>
                        ))}
                    </div>
                </div>


                <FooterColumn title="Resources" links={resources} />
                <FooterColumn title="Community" links={community} />
                <FooterColumn title="Quick links" links={quickLinks} />
                <FooterColumn title="More" links={more} />
                {/* Download App */}
                <div className="col-span-2 md:col-span-1">
                    <h4 className="font-semibold text-slate-900 mb-4">Download App</h4>
                    <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                        Download our Apps and get extra 15% Discount on your first
                        Order...!
                    </p>
                    <div className="flex flex-col gap-2">
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 transition-colors text-white text-xs rounded-md px-3 py-1.5"
                        >
                            <FaApple size={20} />
                            <span>
                                Download on the
                                <br />
                                <span className="font-semibold text-sm">App Store</span>
                            </span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 transition-colors text-white text-xs rounded-md px-3 py-1.5"
                        >
                            <FaGooglePlay size={16} />
                            <span>
                                GET IT ON
                                <br />
                                <span className="font-semibold text-sm">Google Play</span>
                            </span>
                        </a>
                    </div>
                </div>



            </div>

            <div className="max-w-7xl mx-auto border-t border-slate-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-sm">
                    Copyright © 2026. JobBox all right reserved
                </p>
                <div className="flex gap-6 text-sm text-slate-500">
                    <a href="#" className="hover:text-slate-800 transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-slate-800 transition-colors">
                        Terms &amp; Conditions
                    </a>
                    <a href="#" className="hover:text-slate-800 transition-colors">
                        Security
                    </a>
                </div>
            </div>

            <a
                href="#top"
                className="absolute right-6 bottom-6 md:right-16 w-11 h-11 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors flex items-center justify-center text-white shadow-lg"
            >
                <ArrowUp size={20} />
            </a>
        </footer>
    );
};

export default Footer;