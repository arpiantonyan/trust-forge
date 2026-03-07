import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../components/Logo";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <Logo />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/#process"
                className="text-slate-600 hover:text-blue-800 transition-colors"
              >
                Process
              </Link>
              <Link
                to="/#results"
                className="text-slate-600 hover:text-blue-800 transition-colors"
              >
                Results
              </Link>
              <Link
                to="/#demo"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
        >
          <div className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 text-white px-8 py-12">
            <h1 className="text-3xl md:text-4xl font-bold">
              Terms of Use & Privacy Policy
            </h1>
          
          </div>

          <div className="p-8 md:p-12 prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Welcome to Trust-Forge.ai.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                This document describes the terms governing your use of the
                platform and explains how we collect, use, and protect
                information when you access or use our services.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By creating an account or using the platform, you agree to these
                Terms and the data practices described below.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                1. Description of the Service
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Trust-Forge.ai provides tools and infrastructure for evaluating
                and validating artificial intelligence systems. The platform may
                include features for prompt testing, model evaluation, dataset
                analysis, and experiment tracking.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Features and functionality may change or evolve over time.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                2. User Accounts
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                To access certain features, you may need to create an account.
              </p>
              <p className="text-slate-600 leading-relaxed mb-2">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>provide accurate information during registration</li>
                <li>maintain the security of your account</li>
                <li>notify us of any unauthorized access</li>
                <li>accept responsibility for activities performed under your account</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                Authentication may be provided through third-party services such
                as Google or GitHub.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                3. Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                When using the platform, we may collect the following
                information:
              </p>
              <div className="space-y-4 mb-4">
                <div>
                  <h3 className="font-medium text-slate-800 mb-2">
                    Account Information
                  </h3>
                  <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>name</li>
                    <li>email address</li>
                    <li>authentication provider information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 mb-2">
                    Usage Information
                  </h3>
                  <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>prompts, datasets, or configurations submitted to the platform</li>
                    <li>experiment results and logs</li>
                    <li>device and browser information</li>
                    <li>IP address and session data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 mb-2">
                    Communication Information
                  </h3>
                  <p className="text-slate-600">
                    If you contact us, we may collect your email address, name,
                    and the content of your message.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                4. How We Use Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-2">
                We use collected information to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>provide and maintain the platform</li>
                <li>authenticate users</li>
                <li>run AI validation and evaluation workflows</li>
                <li>improve system performance and reliability</li>
                <li>respond to support requests</li>
                <li>protect the security and integrity of the service</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                5. Data Retention
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We retain information only as long as necessary to operate the
                service, maintain security, and comply with legal obligations.
                When data is no longer needed, it may be deleted or anonymized.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                6. Third-Party Services
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Trust-Forge.ai may integrate with third-party providers,
                including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>authentication providers</li>
                <li>cloud infrastructure services</li>
                <li>analytics tools</li>
                <li>AI model providers</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                These providers operate under their own privacy policies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                7. Acceptable Use
              </h2>
              <p className="text-slate-600 leading-relaxed mb-2">
                You agree not to use the platform to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>violate applicable laws or regulations</li>
                <li>attempt unauthorized access to systems</li>
                <li>interfere with platform operations</li>
                <li>distribute malicious software</li>
                <li>misuse the platform in ways that may harm others</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                Accounts that violate these rules may be suspended or
                terminated.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                8. User Content
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You may submit prompts, datasets, or other content while using
                the platform.
              </p>
              <p className="text-slate-600 leading-relaxed">
                You retain ownership of your content. By submitting content, you
                grant Trust-Forge.ai a limited license to process and analyze
                that content solely for the purpose of providing platform
                functionality.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                9. Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We implement reasonable technical and organizational safeguards
                designed to protect information from unauthorized access, loss,
                or misuse. However, no system can guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                10. Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The platform is provided “as is” without warranties of any kind.
                To the maximum extent permitted by law, Trust-Forge.ai shall
                not be liable for damages arising from the use or inability to
                use the service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                11. Changes to These Terms
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may update this document from time to time. Updated versions
                will be posted on this page with a revised effective date.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Continued use of the platform after changes indicates acceptance
                of the updated terms.
              </p>
            </section>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium transition-colors"
          >
            ← Back to home
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <Link to="/">
                <Logo variant="white" className="mb-6" />
              </Link>
              <p className="text-slate-400 mb-6 max-w-md">
                Where AI Reliability is Forged. We help enterprise engineering
                teams eliminate costly AI failures through rigorous, scientific
                validation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" />
                  <a
                    href="mailto:info@trust-forge.ai"
                    className="hover:text-white transition-colors"
                  >
                    info@trust-forge.ai
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+(374) 99 790 270</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>Sevan, Armenia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400">
                © 2025 TrustForge AI. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/privacy_policy"
                  className="text-white hover:underline transition-colors"
                >
                  Terms of Use & Privacy Policy
                </Link>
                <p className="text-slate-400">
                  Powered by{" "}
                  <a
                    href="https://tesvan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    Tesvan
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
