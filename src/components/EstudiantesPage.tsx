import React, { useState } from 'react';
import {
  Calendar,
  FileText,
  CreditCard,
  UserCircle,
  ClipboardList,
  LogOut,
  GraduationCap 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

function EstudiantesPage() {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const navigate = useNavigate(); // Usamos useNavigate para redirigir

  const menuOptions = [
    { id: 'mobility', icon: Calendar, text: 'Asesoría movilidad (Citas)' },
    { id: 'certificate', icon: FileText, text: 'Certificado de estudio' },
    { id: 'payment', icon: CreditCard, text: 'Comprobante de pago' },
    { id: 'personal-info', icon: UserCircle, text: 'Datos personales' },
    { id: 'exam-registration', icon: ClipboardList, text: 'Inscripción pruebas saber pro y T&T' },
  ];

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/'); // Redirige al inicio de sesión o a la ruta principal
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-gradient-to-b from-green-600 to-green-700 text-white p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-yellow-400 p-2 rounded-lg">
            <GraduationCap className="text-green-800 w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Poli Dinámico</h1>
            <p className="text-sm text-green-100">Portal Estudiantil</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {menuOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => setActiveOption(option.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeOption === option.id
                    ? 'bg-green-500 text-white'
                    : 'hover:bg-green-500/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{option.text}</span>
              </button>
            );
          })}
        </nav>

        {/* Botón de Cerrar Sesión */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-3 mt-auto text-red-200 hover:text-white hover:bg-red-600/90 rounded-lg transition-colors duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span>Cerrar Sesión</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {activeOption
                ? menuOptions.find((opt) => opt.id === activeOption)?.text
                : 'Bienvenido al Portal Estudiantil'}
            </h2>
            <p className="text-gray-600">
              {activeOption
                ? 'Seleccione las opciones disponibles para esta sección.'
                : 'Seleccione una opción del menú para comenzar.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EstudiantesPage;
