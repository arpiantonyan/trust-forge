import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Target,
  TrendingUp,
  Monitor,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  BarChart3,
  Clock,
  DollarSign,
  Zap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "./components/Logo";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#process"
                className="text-slate-600 hover:text-blue-800 transition-colors"
              >
                Process
              </a>
              <a
                href="#results"
                className="text-slate-600 hover:text-blue-800 transition-colors"
              >
                Results
              </a>
              <a
                href="#demo"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 text-orange-300">
                  <Zap className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">
                    Enterprise AI Validation Platform
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  AI failures in production cost you
                  <span className="text-orange-400">
                    {" "}
                    customers, credibility, and millions
                  </span>
                </h1>

                <p className="text-xl text-blue-100 leading-relaxed">
                  TrustForge AI eliminates costly AI failures through rigorous,
                  scientific validation.
                  <strong className="text-white">
                    {" "}
                    Where AI Reliability is Forged.
                  </strong>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#demo"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center group transition-all"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                >
                  View Case Studies
                </motion.button> */}
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">
                    99.7%
                  </div>
                  <div className="text-sm text-blue-200">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">
                    -77.5%
                  </div>
                  <div className="text-sm text-blue-200">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">
                    $2.4M
                  </div>
                  <div className="text-sm text-blue-200">Avg. Savings</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      AI Validation Dashboard
                    </h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-200">Accuracy</span>
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="text-2xl font-bold text-green-400">
                        94.7%
                      </div>
                      <div className="text-xs text-green-300">
                        ↑ 12.3% from last week
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-200">Latency</span>
                        <Clock className="w-4 h-4 text-orange-400" />
                      </div>
                      <div className="text-2xl font-bold text-orange-400">
                        127ms
                      </div>
                      <div className="text-xs text-orange-300">
                        ↓ 45ms from baseline
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-blue-200">
                        Model Performance
                      </span>
                      <BarChart3 className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Precision</span>
                        <span className="text-green-400">96.2%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-green-400 h-2 rounded-full"
                          style={{ width: "96.2%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Recall</span>
                        <span className="text-blue-400">93.8%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-blue-400 h-2 rounded-full"
                          style={{ width: "93.8%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Measurable Outcomes That Matter
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stop guessing if your AI works. Get scientific validation with
              quantifiable results that drive business impact and engineering
              confidence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Reduce AI Failures",
                metric: "Up to 89%",
                description:
                  "Eliminate production failures through comprehensive validation testing",
                color: "text-blue-600",
              },
              {
                icon: Target,
                title: "Increase Accuracy",
                metric: "Average +41.9%",
                description:
                  "Scientifically proven accuracy improvements across model implementations",
                color: "text-indigo-600",
              },
              {
                icon: DollarSign,
                title: "Cut Operational Costs",
                metric: "Save $2.4M+",
                description:
                  "Reduce infrastructure costs and prevent expensive production incidents",
                color: "text-orange-600",
              },
              {
                icon: Monitor,
                title: "Real-time Monitoring",
                metric: "24/7 Coverage",
                description:
                  "Continuous performance tracking with instant alerting and diagnostics",
                color: "text-green-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-slate-200"
              >
                <div
                  className={`w-12 h-12 ${item.color} bg-current/10 rounded-lg flex items-center justify-center mb-6`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <div className={`text-2xl font-bold ${item.color} mb-3`}>
                  {item.metric}
                </div>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our 5-Phase Validation Process
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Rigorous, scientific methodology that transforms unreliable AI
              into enterprise-grade systems
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                phase: "01",
                title: "Ground Truth Collection",
                description:
                  "Establish comprehensive baseline datasets with domain expert validation",
                details: [
                  "Expert-curated datasets",
                  "Multi-source validation",
                  "Quality assurance protocols",
                ],
              },
              {
                phase: "02",
                title: "Baseline Testing",
                description:
                  "Comprehensive performance analysis across all critical metrics and edge cases",
                details: [
                  "Performance benchmarking",
                  "Edge case identification",
                  "Failure mode analysis",
                ],
              },
              {
                phase: "03",
                title: "Metrics Development",
                description:
                  "Custom KPIs aligned with business objectives and technical requirements",
                details: [
                  "Business-aligned KPIs",
                  "Technical metrics",
                  "ROI measurement framework",
                ],
              },
              {
                phase: "04",
                title: "Enhancement",
                description:
                  "Systematic optimization using data-driven insights and proven methodologies",
                details: [
                  "Model optimization",
                  "Architecture improvements",
                  "Performance tuning",
                ],
              },
              {
                phase: "05",
                title: "Continuous Monitoring",
                description:
                  "Real-time tracking with automated alerting and performance drift detection",
                details: [
                  "24/7 monitoring",
                  "Automated alerts",
                  "Drift detection",
                ],
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {step.phase}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-blue-100 text-lg mb-4">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <span
                        key={detailIndex}
                        className="bg-white/10 text-white px-3 py-1 rounded-full text-sm border border-white/20"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
                {index < 4 && (
                  <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-orange-500 to-transparent absolute right-8 mt-16"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Proven Results
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              B2B SaaS Sales AI Transformation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How we helped a leading B2B SaaS company achieve breakthrough AI
              performance in their sales automation platform
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-slate-200">
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  +41.9%
                </div>
                <div className="text-lg font-semibold text-slate-900 mb-2">
                  Accuracy Improvement
                </div>
                <p className="text-slate-600">
                  From 67.3% to 95.5% in lead scoring accuracy
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  -77.5%
                </div>
                <div className="text-lg font-semibold text-slate-900 mb-2">
                  Response Time
                </div>
                <p className="text-slate-600">
                  From 2.4s to 540ms average response time
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  -56.4%
                </div>
                <div className="text-lg font-semibold text-slate-900 mb-2">
                  Cost Reduction
                </div>
                <p className="text-slate-600">
                  $1.2M annual savings in infrastructure costs
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 bg-white rounded-xl p-8 border border-slate-200"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    The Challenge
                  </h3>
                  <p className="text-slate-600 mb-4">
                    A rapidly growing B2B SaaS company was losing $2.3M annually
                    due to AI model failures in their sales automation platform.
                    Lead scoring accuracy was inconsistent, response times were
                    unpredictable, and customer trust was eroding.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "67.3% accuracy in lead scoring",
                      "2.4s average response time",
                      "$2.3M annual revenue impact",
                      "Customer churn increasing 23%",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-slate-600"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    The Solution
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Through our 5-phase validation process, we rebuilt their AI
                    foundation with scientific rigor, comprehensive testing, and
                    continuous monitoring to ensure sustained performance
                    improvements.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "95.5% validated lead scoring accuracy",
                      "540ms consistent response time",
                      "$1.2M annual cost savings",
                      "99.7% uptime with monitoring",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-slate-600"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      {/* <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Trusted by Engineering Leaders
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              CTOs, VPs of Engineering, and AI Product Managers rely on
              TrustForge AI to eliminate AI uncertainty and drive measurable
              business outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "50+ Enterprise Clients",
                description:
                  "Leading B2B SaaS companies trust our validation methodology",
              },
              {
                icon: Award,
                title: "99.7% Success Rate",
                description:
                  "Proven track record of successful AI model validations",
              },
              {
                icon: Shield,
                title: "SOC 2 Compliant",
                description:
                  "Enterprise-grade security and compliance standards",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
 */}
          {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <blockquote className="text-center">
                <p className="text-2xl text-slate-700 mb-6 italic">
                  "TrustForge AI transformed our approach to AI validation. We
                  went from constant production fires to predictable, reliable AI
                  performance. The ROI was evident within the first quarter."
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full"></div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">Sarah Chen</div>
                    <div className="text-slate-600">
                      VP of Engineering, TechFlow Solutions
                    </div>
                  </div>
                </div>
              </blockquote>
            </motion.div> */}
        {/* </div>
      </section> */}

      {/* Demo Form */}
      <section
        id="demo"
        className="py-20 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Forge Reliable AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Schedule a personalized demo to see how TrustForge AI can
                eliminate your AI failures and drive measurable business
                outcomes.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      30-Minute Technical Deep Dive
                    </h3>
                    <p className="text-blue-200">
                      Comprehensive analysis of your current AI challenges
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Custom ROI Assessment
                    </h3>
                    <p className="text-blue-200">
                      Quantified impact analysis for your specific use case
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Implementation Roadmap
                    </h3>
                    <p className="text-blue-200">
                      Clear path to AI reliability with timeline and milestones
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <form
                name={"trustforge-demo-request"}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const formData = new FormData(form);

                  try {
                    await fetch("/", {
                      method: "POST",
                      headers: { "Content-Type": "application/x-www-form-urlencoded" },
                      body: new URLSearchParams(formData as any).toString(),
                    });
                    setIsSubmitted(true);
                    form.reset();
                  } catch (error) {
                    alert("Submission failed. Please try again.");
                  }
                }}
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="trustforge-demo-request"
                />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Book Your Demo
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                      placeholder="CTO, VP Engineering, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tell us about your AI challenges
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    placeholder="Describe your current AI reliability challenges..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitted ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${isSubmitted
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-orange-500 hover:bg-orange-600 text-white"
                    }`}
                >
                  {isSubmitted ? "✓ Demo Requested!" : "Schedule Demo"}
                </motion.button>
                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy.
                  We'll contact you within 24 hours to schedule your demo.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <Logo variant="white" className="mb-6" />
              <p className="text-slate-400 mb-6 max-w-md">
                Where AI Reliability is Forged. We help enterprise engineering
                teams eliminate costly AI failures through rigorous, scientific
                validation.
              </p>
              {/* <div className="flex space-x-4"> */}
              {/* <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <Github className="w-5 h-5" />
                </a> */}
              {/* </div> */}
            </div>
            {/* <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Validation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Performance Testing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Continuous Monitoring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise Support</a></li>
              </ul>
            </div> */}
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
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400">
                © 2025 TrustForge AI. All rights reserved.
              </p>
              <p className="text-slate-400">Powered by <a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href="https://tesvan.com" className="text-slate-400 hover:text-white transition-colors">Tesvan</a>
              </p>
              {/* <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Security</a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
