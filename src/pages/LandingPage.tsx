import { ArrowRight, Menu, X, ChevronDown, Shield, Cloud, Cpu, Database, CheckCircle, Mail, Phone, Linkedin, Twitter, Github } from "lucide-react"
import { useState } from "react"
import FloatingLines from '../components/FloatingLines';

export default function AuspiciaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState<'privacy' | 'terms' | 'cookie' | null>(null)

  const services = [
    { icon: Cloud, name: "Cloud Solutions", desc: "Scalable infrastructure" },
    { icon: Shield, name: "Cybersecurity", desc: "Enterprise protection" },
    { icon: Cpu, name: "Digital Transformation", desc: "Modern workflows" },
    { icon: Database, name: "Managed IT Services", desc: "24/7 support" },
  ]

  const projects = [
    {
      icon: Cloud,
      title: "CEDRIK",
      desc: "An AI-powered learning experience that transforms cybersecurity education through guided pathways, real-world defense workflows, and hands-on lab environments.",
      industry: "Cybersecurity Education",
      url: "https://cedrik-user-manual-webite.vercel.app/"
    },
    {
      icon: Shield,
      title: "THODEMY",
      desc: "End-to-end security transformation for a global healthcare network, achieving full regulatory compliance.",
      industry: "ELMS Systems",
      url: "https://thodemy.example.com" //replace soon
    },
    {
      icon: Cpu,
      title: "AILextor",
      desc: "Automated law workflows with intelligent analytics, dramatically improving operational efficiency.",
      industry: "Law System",
      url: "https://ailextor.example.com" //replace soon
    }
  ]

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0
      const offset = target.getBoundingClientRect().top + window.scrollY - navbarHeight
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const openModal = (type: 'privacy' | 'terms' | 'cookie') => {
    setModalOpen(type)
  }

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 w-full h-full -z-10">
        <FloatingLines
          enabledWaves={["top","middle","bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-purple-950/40 backdrop-blur-2xl border-b border-purple-500/30 z-50 shadow-lg shadow-purple-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-600 via-violet-600 to-purple-800 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/50">
                <a href="#home" onClick={(e) => smoothScroll(e, '#home')} aria-label="Auspicia Home">A</a>
              </div>
              <span className="text-purple-200 text-2xl font-bold bg-gradient-to-r from-purple-300 via-violet-300 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
                <a href="#home" onClick={(e) => smoothScroll(e, '#home')}>Auspicia</a>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-purple-200 hover:text-purple-100 font-semibold transition-colors text-base">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-purple-900/30 border border-purple-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href="#services"
                      onClick={(e) => smoothScroll(e, '#services')}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50/80 transition-colors group/item"
                    >
                      <service.icon className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-purple-600 text-base">{service.name}</div>
                        <div className="text-sm text-gray-600">{service.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#projects"
                onClick={(e) => smoothScroll(e, '#projects')}
                className="text-purple-200 hover:text-purple-100 font-semibold transition-colors text-base"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={(e) => smoothScroll(e, '#about')}
                className="text-purple-200 hover:text-purple-100 font-semibold transition-colors text-base"
              >
                About Us
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => smoothScroll(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-purple-500/20 transition-colors text-purple-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-purple-500/30 bg-purple-950/20 backdrop-blur-xl">
              <div className="space-y-4">
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-left font-semibold text-purple-100 py-2 text-base"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform text-purple-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href="#services"
                          onClick={(e) => smoothScroll(e, '#services')}
                          className="block py-2 text-purple-200 hover:text-purple-100 transition-colors"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <a
                  href="#projects"
                  onClick={(e) => smoothScroll(e, '#projects')}
                  className="block font-semibold text-purple-100 py-2 text-base"
                >
                  Projects
                </a>

                <a
                  href="#about"
                  onClick={(e) => smoothScroll(e, '#about')}
                  className="block font-semibold text-purple-100 py-2 text-base"
                >
                  About Us
                </a>

                <a
                  href="#contact"
                  onClick={(e) => smoothScroll(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold mt-4 hover:shadow-xl hover:shadow-purple-500/50 transition-all"
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
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-100 via-violet-200 to-purple-100 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
                Enterprise IT Solutions for the Digital Age
              </h1>
              <p className="text-lg sm:text-xl text-purple-50 leading-relaxed max-w-xl">
                Transform your business with cutting-edge technology consulting. We deliver scalable solutions that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={(e) => smoothScroll(e, '#contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  Request Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#services"
                  onClick={(e) => smoothScroll(e, '#services')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/95 backdrop-blur-sm border-2 border-purple-300/60 text-purple-700 rounded-xl font-semibold text-lg hover:bg-white transition-all duration-300 shadow-lg shadow-purple-900/20"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-purple-800 rounded-3xl rotate-6 opacity-10 blur-3xl" />
                <div className="mt-20 relative backdrop-blur-2xl bg-white/10 rounded-3xl border-2 border-purple-400/30 shadow-2xl shadow-purple-900/30 p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white text-3xl shadow-lg shadow-purple-500/50">
                      <Shield className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-purple-100 drop-shadow-lg">Auspicia Platform</div>
                      <div className="text-purple-200 font-medium text-sm">Enterprise IT Infrastructure</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {services.map((service, idx) => (
                      <div
                        key={service.name}
                        className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl bg-white/20 border-2 border-purple-400/30 hover:bg-white/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group cursor-pointer"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <service.icon className="h-6 w-6 text-purple-200 group-hover:scale-110 transition-transform" />
                        <div className="flex-1">
                          <div className="font-semibold text-purple-50 text-base">{service.name}</div>
                          <div className="text-sm text-purple-200">{service.desc}</div>
                        </div>
                        <CheckCircle className="h-5 w-5 text-green-400" />
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
            <div className="inline-flex items-center gap-2 px-5 py-2.5 backdrop-blur-xl bg-purple-600/70 border border-purple-400/40 rounded-full text-purple-50 font-semibold text-sm mb-6 shadow-lg shadow-purple-900/30">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-100 via-violet-200 to-purple-100 bg-clip-text text-transparent mb-6 drop-shadow-lg">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-purple-50 max-w-2xl mx-auto leading-relaxed">
              End-to-end technology services designed to accelerate your digital transformation journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/60 to-violet-900/60 backdrop-blur-sm border-2 border-purple-400/30 hover:border-purple-300/50 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-purple-50 mb-3">{service.name}</h3>
                <p className="text-purple-200 text-base leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 backdrop-blur-xl bg-purple-600/70 border border-purple-400/40 rounded-full text-purple-50 font-semibold text-sm mb-6 shadow-lg shadow-purple-900/30">
              Success Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-100 via-violet-200 to-purple-100 bg-clip-text text-transparent mb-6 drop-shadow-lg">
              Featured Projects
            </h2>
            <p className="text-xl text-purple-50 max-w-2xl mx-auto leading-relaxed">
              Proven results delivered to industry leaders. Every project is a testament to our expertise and commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/60 to-violet-900/60 backdrop-blur-sm border-2 border-purple-400/30 hover:border-purple-300/50 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
                  <project.icon className="h-7 w-7" />
                </div>

                <div className="font-bold text-2xl text-purple-50 mb-3">{project.title}</div>
                <p className="text-purple-200 text-base leading-relaxed flex-1 mb-8">{project.desc}</p>

                <div className="mt-auto pt-6 border-t border-purple-400/30">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-purple-300 font-medium text-sm">{project.industry}</span>
                  </div>

                  {/* Live Website Link (kept exactly as you had it) */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-purple-300/50 rounded-xl text-purple-50 font-semibold text-sm transition-all hover:scale-[1.02]"
                  >
                    Visit Live Website
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
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
              <div className="inline-flex items-center gap-2 px-5 py-2.5 backdrop-blur-xl bg-purple-600/70 border border-purple-400/40 rounded-full text-purple-50 font-semibold text-sm mb-6 shadow-lg shadow-purple-900/30">
                About Auspicia
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-100 via-violet-200 to-purple-100 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                A New Era of IT Innovation.
              </h2>
              <p className="text-lg text-purple-50 mb-6 leading-relaxed">
                  "Auspicia: The New Pulse of IT Consulting."
                  Launched in 2025, we represent the next evolution of technology partnership. We don’t just consult on innovation; we live it. Our mission is to provide the high-velocity tech strategies that help modern businesses outpace the competition and own their future.              </p>
              <p className="text-lg text-purple-50 mb-8 leading-relaxed">
                  "Lean by Design. Powerful by Execution."
                  Our tight-knit squad of seven master-level consultants delivers the specialized focus that 50-person firms can't match. We provide high-velocity, bespoke IT strategies designed to move as fast as your business does.              </p>
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
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-violet-900/50 backdrop-blur-sm border-2 border-purple-400/30 hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                >
                  <CheckCircle className="h-6 w-6 text-purple-300 mb-3" />
                  <div className="font-semibold text-purple-50 text-base">{expertise}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-violet-900 to-purple-900 text-white pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-purple-50 drop-shadow-lg">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-12 leading-relaxed">
            Schedule a consultation with our experts and discover how Auspicia can drive your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="mailto:contact@auspicia.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/95 backdrop-blur-sm text-purple-900 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 border border-purple-200/50"
              aria-label="Email us"
            >
              <Mail className="h-5 w-5" />
              contact@auspicia.com
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-purple-800 text-white rounded-xl font-semibold text-lg hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
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
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/50">A</div>
                <span className="text-2xl font-bold text-white">Auspicia</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Enterprise IT consulting solutions for the modern business.
              </p>
            </div>
            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-gray-400 hover:text-purple-400 transition-colors">Cloud Solutions</a></li>
                <li><a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-gray-400 hover:text-purple-400 transition-colors">Cybersecurity</a></li>
                <li><a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-gray-400 hover:text-purple-400 transition-colors">Digital Transformation</a></li>
                <li><a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-gray-400 hover:text-purple-400 transition-colors">Managed IT</a></li>
              </ul>
            </div>
            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" onClick={(e) => smoothScroll(e, '#about')} className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#projects" onClick={(e) => smoothScroll(e, '#projects')} className="text-gray-400 hover:text-purple-400 transition-colors">Projects</a></li>
                <li><a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); openModal('privacy'); }}
                    className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); openModal('terms'); }}
                    className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); openModal('cookie'); }}
                    className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2026 Auspicia. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-2xl z-[100] flex items-center justify-center p-6"
          onClick={() => setModalOpen(null)}
        >
          <div 
            className="bg-purple-950/95 backdrop-blur-2xl border border-purple-400/30 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl shadow-purple-900/50"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-purple-400/30">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-100 to-violet-200 bg-clip-text text-transparent">
                {modalOpen === 'privacy' && 'Privacy Policy'}
                {modalOpen === 'terms' && 'Terms of Service'}
                {modalOpen === 'cookie' && 'Cookie Policy'}
              </h3>
              <button 
                onClick={() => setModalOpen(null)}
                className="text-purple-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 text-purple-200 leading-relaxed text-[15px]">
              {modalOpen === 'privacy' && (
                <>
                  <p className="mb-6 text-purple-100 font-medium">Last updated: March 16, 2026</p>
                  <p className="mb-4">Auspicia ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                  <p className="mb-4">We may collect personal information such as your name, email address, phone number, and usage data. This information is used to provide and improve our services, communicate with you, and comply with legal obligations.</p>
                  <p className="mb-4">We do not sell your personal data to third parties. We may share it with trusted service providers who assist us in operating our website and services, under strict confidentiality agreements.</p>
                  <p className="mb-4">You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at contact@auspicia.com.</p>
                  <p className="text-sm text-purple-300 mt-8">This policy may be updated from time to time. We will notify you of any material changes.</p>
                </>
              )}

              {modalOpen === 'terms' && (
                <>
                  <p className="mb-6 text-purple-100 font-medium">Last updated: March 16, 2026</p>
                  <p className="mb-4">By accessing or using the Auspicia website and services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.</p>
                  <p className="mb-4">All content, logos, and intellectual property on this site are owned by Auspicia or its licensors. You may not reproduce, distribute, or create derivative works without prior written permission.</p>
                  <p className="mb-4">We provide our services "as is" without warranties of any kind. Auspicia shall not be liable for any indirect, incidental, or consequential damages arising from your use of the site.</p>
                  <p className="mb-4">We reserve the right to modify or discontinue services at any time. Continued use after changes constitutes acceptance of the new terms.</p>
                  <p className="text-sm text-purple-300 mt-8">These terms are governed by the laws of the Philippines.</p>
                </>
              )}

              {modalOpen === 'cookie' && (
                <>
                  <p className="mb-6 text-purple-100 font-medium">Last updated: March 16, 2026</p>
                  <p className="mb-4">Our website uses cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.</p>
                  <p className="mb-4">We use essential cookies (required for the site to function), performance cookies (to understand how visitors use the site), and functionality cookies (to remember your preferences).</p>
                  <p className="mb-4">You can manage or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of the website.</p>
                  <p className="mb-4">Third-party services (such as analytics tools) may also place cookies. Please refer to their privacy policies for more information.</p>
                  <p className="text-sm text-purple-300 mt-8">By continuing to use our site, you consent to the use of cookies as described in this policy.</p>
                </>
              )}
            </div>

            {/* Footer of modal */}
            <div className="px-8 py-6 border-t border-purple-400/30 flex justify-center">
              <button 
                onClick={() => setModalOpen(null)}
                className="px-8 py-3 bg-purple-600/70 hover:bg-purple-600 text-white rounded-xl font-semibold text-sm transition-all active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}