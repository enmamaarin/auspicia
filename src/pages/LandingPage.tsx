import { ArrowRight, Menu, X, ChevronDown, Shield, Cloud, Cpu, Database, TrendingUp, Users, CheckCircle, Mail, Phone, Linkedin, Twitter, Github } from "lucide-react"
import { useState } from "react"

export default function AuspiciaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)

  const services = [
    { icon: Cloud, name: "Cloud Solutions", desc: "Scalable infrastructure" },
    { icon: Shield, name: "Cybersecurity", desc: "Enterprise protection" },
    { icon: Cpu, name: "Digital Transformation", desc: "Modern workflows" },
    { icon: Database, name: "Managed IT Services", desc: "24/7 support" },
  ]

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Technology",
    "Retail & E-commerce"
  ]

  // const stats = [
  //   { value: "500+", label: "Clients Served" },
  //   { value: "98%", label: "Satisfaction Rate" },
  //   { value: "15+", label: "Years Experience" },
  //   { value: "50+", label: "Expert Team" },
  // ]

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0
      const offset = target.getBoundingClientRect().top + window.scrollY - navbarHeight
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
    setMobileMenuOpen(false) // Close mobile menu on click
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-purple-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-600 via-violet-600 to-purple-800 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                <a 
                  href="#home" 
                  onClick={(e) => smoothScroll(e, '#home')}
                  aria-label="Auspicia Home"
                >
                  A
                </a>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-violet-600 bg-clip-text text-transparent">
                <a 
                  href="#home" 
                  onClick={(e) => smoothScroll(e, '#home')}
                >
                  Auspicia
                </a>
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600 font-medium transition-colors">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-purple-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href="#services"
                      onClick={(e) => smoothScroll(e, '#services')}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors group/item"
                    >
                      <service.icon className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-purple-600">
                          {service.name}
                        </div>
                        <div className="text-xs text-gray-500">{service.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              {/* Industries Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600 font-medium transition-colors">
                  Industries
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-purple-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-3">
                  {industries.map((industry) => (
                    <a
                      key={industry}
                      href="#industries"
                      onClick={(e) => smoothScroll(e, '#industries')}
                      className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors font-medium"
                    >
                      {industry}
                    </a>
                  ))}
                </div>
              </div>
              <a 
                href="#about" 
                onClick={(e) => smoothScroll(e, '#about')}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                About Us
              </a>
            </div>
            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => smoothScroll(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-purple-50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-purple-100">
              <div className="space-y-4">
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-left font-semibold text-gray-900 py-2"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {services.map((service) => (
                        <a 
                          key={service.name} 
                          href="#services" 
                          onClick={(e) => smoothScroll(e, '#services')}
                          className="block py-2 text-gray-600 hover:text-purple-600"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => setIndustriesOpen(!industriesOpen)}
                    className="flex items-center justify-between w-full text-left font-semibold text-gray-900 py-2"
                  >
                    Industries
                    <ChevronDown className={`h-4 w-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {industriesOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {industries.map((industry) => (
                        <a 
                          key={industry} 
                          href="#industries" 
                          onClick={(e) => smoothScroll(e, '#industries')}
                          className="block py-2 text-gray-600 hover:text-purple-600"
                        >
                          {industry}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <a 
                  href="#about" 
                  onClick={(e) => smoothScroll(e, '#about')}
                  className="block font-semibold text-gray-900 py-2"
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  onClick={(e) => smoothScroll(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold mt-4"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden md:pt-40 lg:pt-20">
        <div className="absolute inset-0 via-transparent to-violet-100/50" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm">
                <TrendingUp className="h-4 w-4" />
                Trusted by Fortune 500 Companies
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-900 via-violet-700 to-purple-900 bg-clip-text text-transparent leading-tight">
                Enterprise IT Solutions for the Digital Age
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Transform your business with cutting-edge technology consulting. We deliver scalable solutions that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={(e) => smoothScroll(e, '#contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
                >
                  Request Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#services"
                  onClick={(e) => smoothScroll(e, '#services')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-purple-200 text-purple-700 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
              {/* Stats */}
              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div> */}
            </div>
            {/* Right Visual */}
            <div className="relative">
              <div className="relative w-full aspect-square">
                {/* Hexagon Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-purple-800 rounded-3xl rotate-6 opacity-10 blur-3xl" />
                {/* Main Card */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-purple-200 shadow-2xl p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white text-3xl shadow-lg">
                      <Shield className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-900">Auspicia Platform</div>
                      <div className="text-purple-600 font-medium">Enterprise IT Infrastructure</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {services.map((service, idx) => (
                      <div
                        key={service.name}
                        className="flex items-center gap-4 p-4 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <service.icon className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform" />
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-600">{service.desc}</div>
                        </div>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end technology services designed to accelerate your digital transformation journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="m-20 py-20 px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-6">
                About Auspicia
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                15+ Years of IT Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Auspicia has been at the forefront of enterprise technology consulting. Our mission is to empower businesses with innovative IT solutions that drive sustainable growth and competitive advantage.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With a team of 50+ certified experts and a proven track record across multiple industries, we deliver tailored solutions that align with your strategic objectives.
              </p>
              <div className="flex items-center gap-4">
                <Users className="h-12 w-12 text-purple-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+ Experts</div>
                  <div className="text-gray-600">Certified Professionals</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                "Cloud Architecture",
                "Security Compliance",
                "DevOps Engineering",
                "Data Analytics",
                "System Integration",
                "IT Strategy"
              ].map((expertise) => (
                <div
                  key={expertise}
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 hover:shadow-lg transition-all"
                >
                  <CheckCircle className="h-6 w-6 text-purple-600 mb-3" />
                  <div className="font-semibold text-gray-900">{expertise}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-violet-900 to-purple-900 text-white pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-12">
            Schedule a consultation with our experts and discover how Auspicia can drive your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="mailto:contact@auspicia.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-900 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              aria-label="Email us"
            >
              <Mail className="h-5 w-5" />
              contact@auspicia.com
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-purple-800 text-white rounded-xl font-semibold text-lg hover:bg-purple-700 transition-all duration-300"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <span className="text-2xl font-bold text-white">Auspicia</span>
              </div>
              <p className="text-sm text-gray-400">
                Enterprise IT consulting solutions for the modern business.
              </p>
            </div>
            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="hover:text-purple-400 transition-colors">Cloud Solutions</a></li>
                <li><a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="hover:text-purple-400 transition-colors">Cybersecurity</a></li>
                <li><a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="hover:text-purple-400 transition-colors">Digital Transformation</a></li>
                <li><a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="hover:text-purple-400 transition-colors">Managed IT</a></li>
              </ul>
            </div>
            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" onClick={(e) => smoothScroll(e, '#about')} className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Auspicia. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}