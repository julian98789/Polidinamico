import React, { useState } from 'react';
import { User, UserCircle, Building, Mail, Lock, ArrowRight } from 'lucide-react';

type UserType = 'docentes' | 'estudiantes' | 'empleados';
type FormType = 'login' | 'forgotPassword' | 'register';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UserType>('docentes');
  const [formType, setFormType] = useState<FormType>('login');

  const handleTabChange = (newTab: UserType) => {
    setActiveTab(newTab);
    setFormType('login');
  };

  const renderForm = (userType: UserType) => {
    if (formType === 'login') {
      return (
        <form className="space-y-4">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Inicio de sesión para {userType}</h3>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-green-600" size={20} />
            <input type="email" placeholder="Correo electrónico" className="pl-10 w-full py-2 border-b border-green-300 focus:border-yellow-400 bg-transparent text-green-800 outline-none" required />
          </div>
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-green-600" size={20} />
            <input type="password" placeholder="Contraseña" className="pl-10 w-full py-2 border-b border-green-300 focus:border-yellow-400 bg-transparent text-green-800 outline-none" required />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
            Iniciar sesión <ArrowRight className="ml-2" size={20} />
          </button>
          <div className="flex justify-between text-sm">
            <a onClick={() => setFormType('forgotPassword')} className="text-green-600 hover:text-green-800 cursor-pointer">Olvidé mi contraseña</a>
            <a onClick={() => setFormType('register')} className="text-green-600 hover:text-green-800 cursor-pointer">Registrarse</a>
          </div>
        </form>
      );
    } else if (formType === 'forgotPassword') {
      return (
        <form className="space-y-4">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Recuperar contraseña para {userType}</h3>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-green-600" size={20} />
            <input type="email" placeholder="Correo electrónico" className="pl-10 w-full py-2 border-b border-green-300 focus:border-yellow-400 bg-transparent text-green-800 outline-none" required />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
            Enviar instrucciones <ArrowRight className="ml-2" size={20} />
          </button>
          <a onClick={() => setFormType('login')} className="block text-center text-sm text-green-600 hover:text-green-800 cursor-pointer">Volver al inicio de sesión</a>
        </form>
      );
    } else {
      return (
        <form className="space-y-4">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Registro de {userType}</h3>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-green-600" size={20} />
            <input type="email" placeholder="Correo electrónico" className="pl-10 w-full py-2 border-b border-green-300 focus:border-yellow-400 bg-transparent text-green-800 outline-none" required />
          </div>
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-green-600" size={20} />
            <input type="password" placeholder="Contraseña" className="pl-10 w-full py-2 border-b border-green-300 focus:border-yellow-400 bg-transparent text-green-800 outline-none" required />
          </div>
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-green-600" size={20} />
            <input type="password" placeholder="Confirmar contraseña" className="pl-10 w-full py-2 border-b border-green-300 focus:border-yellow-400 bg-transparent text-green-800 outline-none" required />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
            Registrarse <ArrowRight className="ml-2" size={20} />
          </button>
          <a onClick={() => setFormType('login')} className="block text-center text-sm text-green-600 hover:text-green-800 cursor-pointer">Ya tengo una cuenta</a>
        </form>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl p-10">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Politécnico Colombiano</h1>
          <h2 className="text-xl font-semibold text-yellow-600">Jaime Isaza Cadavid</h2>
        </header>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`flex items-center px-4 py-2 rounded-full transition duration-300 ${activeTab === 'docentes' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
            onClick={() => handleTabChange('docentes')}
          >
            <User className="mr-2" size={18} /> Docentes
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-full transition duration-300 ${activeTab === 'estudiantes' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
            onClick={() => handleTabChange('estudiantes')}
          >
            <UserCircle className="mr-2" size={18} /> Estudiantes
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-full transition duration-300 ${activeTab === 'empleados' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
            onClick={() => handleTabChange('empleados')}
          >
            <Building className="mr-2" size={18} /> Empleados
          </button>
        </div>
        {renderForm(activeTab)}
      </div>
    </div>
  );
};

export default App;