import { useState, useRef, useEffect } from 'react';
import { 
  Sun, 
  Battery, 
  Home, 
  Zap, 
  TrendingUp, 
  TrendingDown, 
  Check, 
  X, 
  Camera, 
  ArrowRight,
  Shield,
  Award,
  Phone,
  MessageCircle,
  ChevronDown,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Toaster, toast } from 'sonner';

// Types
interface UploadedPhoto {
  id: string;
  file: File;
  preview: string;
}

// Hero Section Component
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container-custom min-h-screen flex flex-col justify-center items-center text-center py-20">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Clientes de LUMA en Puerto Rico
          </span>
        </div>

        <h1 className={`heading-1 text-white mb-6 max-w-4xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Tu factura subió este mes.{' '}
          <span className="text-gradient">Y volverá a subir el próximo.</span>
        </h1>

        <p className={`body-large text-gray-300 max-w-2xl mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Hay una salida: energía solar con batería de respaldo, sin que compres nada, 
          instales nada ni pagues nada hoy.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://wa.me/17879729553?text=Hola%20Rafael%2C%20quiero%20saber%20si%20califico%20para%20PPA%20de%20Sunrun%20con%20bateria" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Verificar si califico
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#como-funciona"
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <Info className="w-5 h-5" />
            Cómo funciona
          </a>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl w-full transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-400">$0</div>
            <div className="text-xs md:text-sm text-gray-400">Inversión inicial</div>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-400">15</div>
            <div className="text-xs md:text-sm text-gray-400">Años de protección</div>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-400">24/7</div>
            <div className="text-xs md:text-sm text-gray-400">Luz con batería</div>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-400">1M+</div>
            <div className="text-xs md:text-sm text-gray-400">Sistemas Sunrun</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center text-gray-400 animate-bounce-slow">
            <span className="text-sm mb-2">Sigue leyendo</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: <Sun className="w-10 h-10" />,
      title: 'Paneles captan sol',
      detail: 'De día: usas energía solar',
      highlight: false
    },
    {
      icon: <Battery className="w-10 h-10" />,
      title: 'Batería guarda el excedente',
      detail: 'De noche: usas tu batería',
      highlight: true
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: 'Casa con luz 24/7',
      detail: 'Apagón de LUMA: tú tienes luz',
      highlight: false
    }
  ];

  return (
    <section id="como-funciona" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        {/* Sunrun Brand */}
        <div className={`text-center mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Presentado por</span>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="text-4xl md:text-5xl font-black text-[#0B1B3D]">sunrun</span>
            <span className="text-orange-500 text-xl">↗</span>
          </div>
          <div className="flex items-center justify-center gap-2 mt-3 text-green-600 font-semibold">
            <Check className="w-5 h-5" />
            <span>+600,000 sistemas con batería en EE.UU. y Puerto Rico</span>
          </div>
        </div>

        <h2 className={`heading-2 text-center text-[#0B1B3D] mb-8 transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Solar + Batería: Generas tu luz y la guardas para cuando LUMA se va
        </h2>

        {/* Battery Highlight */}
        <div className={`max-w-3xl mx-auto mb-12 transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 rounded-r-2xl p-6 flex items-start gap-4">
            <div className="bg-orange-500 text-white p-3 rounded-xl shrink-0">
              <Battery className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-orange-700 mb-2">
                TODOS los sistemas PPA incluyen batería
              </h3>
              <p className="text-gray-700">
                Cuando LUMA falla, tu casa sigue con luz. Cuando hay sol, guardas energía. 
                Cuando no hay sol, usas lo guardado.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className={`feature-card text-center ${step.highlight ? 'border-2 border-orange-500 bg-orange-50' : ''}`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${step.highlight ? 'bg-orange-500 text-white' : 'bg-[#0B1B3D] text-white'}`}>
                  {step.icon}
                </div>
                <h4 className="font-bold text-[#0B1B3D] mb-2">{step.title}</h4>
                <p className={`text-sm font-medium ${step.highlight ? 'text-orange-600' : 'text-gray-500'}`}>
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Difference */}
        <div className={`max-w-3xl mx-auto transition-all duration-600 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-[#0B1B3D] text-white rounded-2xl p-6 md:p-8">
            <p className="body-large">
              <span className="text-orange-400 font-bold">La diferencia:</span> Con LUMA pagas por una red que falla. 
              Con Sunrun PPA tienes paneles + batería propios, luz más barata, y respaldo cuando LUMA se va.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Comparison Section
function ComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const lumaFeatures = [
    { text: 'Pagas luz cara', bad: true },
    { text: 'Sin batería de respaldo', bad: true },
    { text: 'Apagones incluidos', bad: true },
    { text: 'Nada es tuyo', bad: true },
    { text: 'Tarifas aumentando', bad: true }
  ];

  const sunrunFeatures = [
    { text: 'Pagas menos que LUMA', bad: false },
    { text: 'Batería de respaldo incluida', bad: false, highlight: true },
    { text: 'Luz durante apagones', bad: false },
    { text: 'Medición Neta disponible', bad: false },
    { text: 'Precio fijo o escalador 2.99%', bad: false }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className={`heading-2 text-center text-[#0B1B3D] mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          15 años comparados: ¿Qué tienes al final?
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* LUMA Card */}
          <div className={`comparison-card bg-white transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-red-100 p-4 flex items-center justify-between">
              <span className="font-bold text-red-800">LUMA Energy</span>
              <span className="flex items-center gap-1 text-red-600 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                Subiendo
              </span>
            </div>
            <div className="p-6">
              {lumaFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                  <div className="xmark shrink-0">
                    <X className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-100 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Año 15:</span>
                <span className="font-bold text-red-600">~$260/mes</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="text-sm text-gray-600">Total quemado:</span>
                <span className="font-bold text-red-600 text-lg">~$35,000</span>
              </div>
            </div>
            <div className="p-4 text-center bg-red-50">
              <span className="text-sm text-gray-600">Al final tienes:</span>
              <p className="font-bold text-red-600 mt-1">Nada. Sigues pagando.</p>
            </div>
          </div>

          {/* VS Center */}
          <div className={`flex flex-col items-center justify-center transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="text-3xl font-black text-gray-400 mb-4">VS</div>
            <div className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold text-center">
              Con batería<br />incluida
            </div>
          </div>

          {/* Sunrun Card */}
          <div className={`comparison-card bg-white transition-all duration-600 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-green-100 p-4 flex items-center justify-between">
              <span className="font-bold text-green-800">Sunrun PPA</span>
              <span className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                <Shield className="w-4 h-4" />
                Fijo 15 años
              </span>
            </div>
            <div className="p-6">
              {sunrunFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                  <div className="checkmark shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className={`${feature.highlight ? 'font-bold text-[#0B1B3D]' : 'text-gray-700'}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-green-50 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Año 15:</span>
                <span className="font-bold text-green-600">Precio fijo</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-green-200">
                <span className="text-sm text-gray-600">Protección total:</span>
                <span className="font-bold text-green-600 text-lg">15 años</span>
              </div>
            </div>
            <div className="p-4 text-center bg-green-50">
              <span className="text-sm text-gray-600">Al final:</span>
              <p className="font-bold text-green-600 mt-1">Opción a renovar, comprar o remover</p>
            </div>
          </div>
        </div>

        {/* Boricua Hook */}
        <p className={`text-center text-lg md:text-xl text-[#0B1B3D] font-medium italic mt-10 max-w-2xl mx-auto transition-all duration-600 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          "En Puerto Rico, donde los apagones son norma, ¿por qué pagar por luz que se va cuando puedes tener luz que se queda?"
        </p>
      </div>
    </section>
  );
}

// Battery Section
function BatterySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scenarios = [
    {
      time: '🌙 8:00 PM',
      without: 'Sin batería: LUMA se fue, estás a oscuras',
      with: 'Con batería: Tu casa brilla, TV encendida, nevera fría'
    },
    {
      time: '⛈️ Huracán',
      without: 'Sin batería: Semanas sin luz esperando a LUMA',
      with: 'Con batería: Día 1, día 10, día 30: tú tienes luz'
    },
    {
      time: '💰 Factura',
      without: 'Sin batería: Pagas todo a LUMA',
      with: 'Con batería: Pagas menos, usas tu energía guardada'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <h2 className={`heading-2 text-center text-[#0B1B3D] mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          La batería no es extra. <span className="text-gradient">Es el punto.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {scenarios.map((scenario, index) => (
            <div 
              key={index}
              className={`feature-card transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="text-2xl mb-4">{scenario.time}</div>
              <p className="text-gray-500 mb-3 text-sm">{scenario.without}</p>
              <p className="text-[#0B1B3D] font-semibold">{scenario.with}</p>
            </div>
          ))}
        </div>

        {/* Battery Included Box */}
        <div className={`max-w-3xl mx-auto transition-all duration-600 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 flex items-start gap-4 text-white">
            <div className="bg-white/20 p-3 rounded-xl shrink-0">
              <Check className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Batería incluida en TODOS los PPA de Sunrun
              </h3>
              <p className="text-white/90">
                No es upgrade. No cuesta extra. Viene con el sistema porque sin batería no tiene sentido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Zero Investment Section
function ZeroInvestmentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = [
    { label: 'Paneles solares', highlight: false },
    { label: 'Batería de respaldo', highlight: true },
    { label: 'Instalación', highlight: false }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className={`heading-2 text-center text-[#0B1B3D] mb-4 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          "¿Cuánto cuesta la batería?" — Viene incluida. $0 extra.
        </h2>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-2xl transition-all duration-600 ${item.highlight ? 'bg-white border-2 border-orange-500 shadow-lg' : 'bg-white'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">$0</div>
              <div className="text-sm md:text-base font-medium text-gray-700">{item.label}</div>
            </div>
          ))}
        </div>

        <div className={`max-w-2xl mx-auto text-center transition-all duration-600 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="body-large text-gray-700">
            Sunrun pone todo: paneles + batería + instalación.{' '}
            <span className="text-[#0B1B3D] font-bold">
              Tú pagas solo la energía que produces, a precio menor que LUMA.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

// Pricing Options Section
function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pricingOptions = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Precio Fijo',
      description: 'El mismo precio por kWh durante los 15 años del contrato. Sin sorpresas, sin aumentos.',
      highlight: true
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Escalador 2.99%',
      description: 'Precio inicial más bajo que aumenta solo 2.99% anual. Aún así pagas menos que LUMA.',
      highlight: false
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Ley 17 de Puerto Rico',
      description: 'Meta: 100% energía renovable para 2050. 40% para 2025, 60% para 2040'
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: 'Medición Neta',
      description: 'Vende tu excedente a LUMA y recibe créditos en tu factura'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-[#0B1B3D]">
      <div className="container-custom">
        <h2 className={`heading-2 text-center text-white mb-4 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Opciones de <span className="text-orange-400">precio</span> a tu medida
        </h2>
        <p className={`text-center text-gray-400 mb-12 max-w-2xl mx-auto transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Elige la opción que mejor se adapte a tu presupuesto. Ambas incluyen paneles + batería sin inversión inicial.
        </p>

        {/* Pricing Options */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {pricingOptions.map((option, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-6 transition-all duration-600 ${option.highlight ? 'bg-orange-500 border-2 border-orange-400' : 'glass border-2 border-white/20'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className={`mb-4 ${option.highlight ? 'text-white' : 'text-orange-400'}`}>{option.icon}</div>
              <h3 className={`text-xl font-bold mb-3 ${option.highlight ? 'text-white' : 'text-white'}`}>{option.title}</h3>
              <p className={`text-sm ${option.highlight ? 'text-white/90' : 'text-gray-400'}`}>{option.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`glass rounded-2xl p-6 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="text-orange-400 mb-4">{benefit.icon}</div>
              <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* PR Alert */}
        <div className={`mt-12 glass rounded-2xl p-6 md:p-8 border-2 border-orange-500/50 transition-all duration-600 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl">🇵🇷</div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                Puerto Rico: luz más cara de EE.UU. + apagones frecuentes
              </h3>
              <p className="text-gray-300">
                La batería no es lujo aquí. Es necesidad. Sunrun la incluye porque saben 
                que sin ella, no funciona. LUMA ha aumentado tarifas un 8% en 2025 y 
                continúan los ajustes trimestrales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Timeline Section
function TimelineSection() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const losses: Record<number, string> = {
    1: 'Con $1,500 ya tendrías meses de solar + batería incluida',
    5: 'Con $8,000 quemados, ya tendrías años de luz propia',
    10: 'Con $18,000, hoy tu sistema estaría casi pagado'
  };

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className={`heading-2 text-center text-[#0B1B3D] mb-8 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          ¿Cuánto le has regalado a LUMA?
        </h2>

        <div className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[1, 5, 10].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`timeline-btn ${selectedYear === year ? 'active' : ''}`}
            >
              {year} año{year > 1 ? 's' : ''} → ${year === 1 ? '1,500' : year === 5 ? '8,000' : '18,000'}
            </button>
          ))}
        </div>

        <div className={`text-center transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl font-bold text-orange-600 min-h-[2rem]">
            {selectedYear ? losses[selectedYear] : 'Haz clic para ver cuánto has pagado'}
          </p>
        </div>
      </div>
    </section>
  );
}

// Photo Upload Section
function PhotoUploadSection() {
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const newPhotos: UploadedPhoto[] = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        if (photos.length + newPhotos.length >= 5) {
          toast.error('Máximo 5 fotos permitidas');
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          const newPhoto: UploadedPhoto = {
            id: Math.random().toString(36).substr(2, 9),
            file,
            preview: e.target?.result as string
          };
          setPhotos((prev) => [...prev, newPhoto]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const sendPhotos = () => {
    if (photos.length === 0) {
      toast.error('Sube al menos una foto');
      return;
    }
    
    // Create WhatsApp message with photo count
    const message = `Hola Rafael, quiero verificar si califico para PPA de Sunrun con batería. Te envío ${photos.length} foto${photos.length > 1 ? 's' : ''} de mi techo.`;
    const whatsappUrl = `https://wa.me/17879729553?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowDialog(true);
  };

  return (
    <section ref={sectionRef} id="subir-fotos" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className={`heading-2 text-center text-[#0B1B3D] mb-4 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Sube fotos de tu techo
        </h2>
        <p className={`text-center text-gray-600 mb-10 max-w-2xl mx-auto transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Sube hasta 5 fotos de tu techo desde diferentes ángulos. Con ellas podremos 
          evaluar si tu casa califica para el programa PPA de Sunrun.
        </p>

        {/* Upload Zone */}
        <div className={`max-w-2xl mx-auto mb-8 transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div
            className={`upload-zone ${isDragging ? 'active' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => handleFileSelect(e.target.files)}
            />
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <Camera className="w-8 h-8 text-orange-500" />
              </div>
              <p className="text-lg font-semibold text-[#0B1B3D] mb-2">
                Arrastra fotos aquí o haz clic para seleccionar
              </p>
              <p className="text-sm text-gray-500">
                Máximo 5 fotos (JPG, PNG)
              </p>
            </div>
          </div>
        </div>

        {/* Photo Previews */}
        {photos.length > 0 && (
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-center text-sm text-gray-600 mb-4">
              {photos.length} de 5 fotos subidas
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {photos.map((photo) => (
                <div key={photo.id} className="photo-preview">
                  <img src={photo.preview} alt="Techo" />
                  <button
                    className="remove-btn"
                    onClick={() => removePhoto(photo.id)}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Send Button */}
        {photos.length > 0 && (
          <div className="text-center">
            <Button
              onClick={sendPhotos}
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar fotos por WhatsApp
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Tips */}
        <div className={`max-w-2xl mx-auto mt-12 transition-all duration-600 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="font-bold text-[#0B1B3D] mb-4 text-center">Consejos para las fotos:</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="checkmark shrink-0 mt-1">
                <Check className="w-3 h-3" />
              </div>
              <p className="text-sm text-gray-600">Foto desde el frente de la casa mostrando todo el techo</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="checkmark shrink-0 mt-1">
                <Check className="w-3 h-3" />
              </div>
              <p className="text-sm text-gray-600">Foto desde los laterales si es posible</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="checkmark shrink-0 mt-1">
                <Check className="w-3 h-3" />
              </div>
              <p className="text-sm text-gray-600">Evita sombras que cubran el techo</p>
            </div>
          </div>
        </div>

        {/* Dialog */}
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-[#0B1B3D]">¡Fotos listas!</DialogTitle>
              <DialogDescription>
                Te hemos redirigido a WhatsApp. Envía las fotos a Rafael y él te responderá 
                en menos de 24 horas para verificar si calificas.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center mt-4">
              <Button onClick={() => setShowDialog(false)} className="btn-primary">
                Entendido
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-navy">
      <div className="container-custom text-center">
        <h2 className={`heading-2 text-white mb-4 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Solar + Batería. Sin comprar. Solo cambiar de LUMA a Sunrun.
        </h2>
        
        <p className={`body-large text-gray-300 mb-10 max-w-2xl mx-auto transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Verifica si tu casa califica. Evaluación gratis, respuesta en 24h.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-10 transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://wa.me/17879729553?text=Hola%20Rafael%2C%20quiero%20saber%20si%20califico%20para%20PPA%20de%20Sunrun%20con%20bateria" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
          >
            <MessageCircle className="w-6 h-6" />
            Verificar si califico
            <ArrowRight className="w-6 h-6" />
          </a>
          <a 
            href="tel:+17879729553"
            className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
          >
            <Phone className="w-6 h-6" />
            Llamar ahora
          </a>
        </div>

        {/* Reassurance */}
        <div className={`flex flex-wrap justify-center gap-6 mb-10 transition-all duration-600 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-2 text-gray-300">
            <Check className="w-5 h-5 text-green-400" />
            <span>Revisamos tu techo y factura LUMA</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Check className="w-5 h-5 text-green-400" />
            <span>Te decimos si cabe solar + batería</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Check className="w-5 h-5 text-green-400" />
            <span>Solo procedes si te convence</span>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-gray-500 text-sm transition-all duration-600 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="mb-2">Consultor Pura Energia. Sunrun es marca registrada.</p>
          <a 
            href="https://www.sunrun.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline"
          >
            sunrun.com
          </a>
        </div>
      </div>
    </section>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" richColors />
      <HeroSection />
      <SolutionSection />
      <ComparisonSection />
      <BatterySection />
      <ZeroInvestmentSection />
      <PricingSection />
      <TimelineSection />
      <PhotoUploadSection />
      <CTASection />
    </div>
  );
}

export default App;
