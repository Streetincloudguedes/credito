import React from 'react';
import { Cloud, MessageCircle, Phone, Mail, MapPin, Headphones, Users, Clock, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section with Enhanced Logo */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-col items-center justify-center mb-12">
          {/* Enhanced Logo Design */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full"></div>
            <div className="relative flex items-center bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-2xl">
              <Cloud className="w-16 h-16 text-white" strokeWidth={1.5} />
              <div className="ml-4 text-left">
                <h1 className="text-3xl font-bold text-white tracking-tight">
                  Street in
                  <span className="block text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                    Cloud
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Help Desk & Service Desk</h2>
          <p className="text-xl text-gray-300 mb-8">Suporte técnico especializado e atendimento de excelência</p>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/qr/K4XI5HIKP4XEL1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Suporte via WhatsApp
          </a>
          <a
            href="tel:0800XXXXXXX"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            <Phone className="w-6 h-6 mr-2" />
            Ligar Agora
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Help Desk',
              description: 'Suporte técnico de primeiro nível para resolução rápida de problemas e dúvidas.',
              icon: <Headphones className="w-12 h-12 text-blue-400 mb-4" />
            },
            {
              title: 'Service Desk',
              description: 'Gestão completa de serviços de TI com processos ITIL e atendimento personalizado.',
              icon: <Users className="w-12 h-12 text-blue-400 mb-4" />
            },
            {
              title: 'Support Center',
              description: 'Centro de suporte avançado com monitoramento 24/7 e resolução proativa de problemas.',
              icon: <Shield className="w-12 h-12 text-blue-400 mb-4" />
            }
          ].map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 text-center shadow-xl hover:bg-gray-700 transition duration-300">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-800/50">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Recursos e Benefícios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Atendimento 24/7',
              description: 'Suporte técnico disponível 24 horas por dia, 7 dias por semana.'
            },
            {
              title: 'SLA Garantido',
              description: 'Acordo de nível de serviço com tempo de resposta garantido.'
            },
            {
              title: 'Base de Conhecimento',
              description: 'Acesso a documentação e soluções para problemas comuns.'
            },
            {
              title: 'Monitoramento Proativo',
              description: 'Identificação e resolução de problemas antes que afetem seu negócio.'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Canais de Atendimento</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
            <Phone className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Central de Suporte</h3>
            <p className="text-gray-400">(13) 99743-7154</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
            <Mail className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400">streetincloud@gmail.com</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
            <Clock className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Horário</h3>
            <p className="text-gray-400">24/7 - Todos os dias</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center bg-gradient-to-r from-blue-600 to-blue-400 p-2 rounded-lg">
              <Cloud className="w-6 h-6 text-white" strokeWidth={1.5} />
              <span className="text-white ml-2 font-bold">Street in Cloud</span>
            </div>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Street in Cloud. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;