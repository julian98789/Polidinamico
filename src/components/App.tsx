import axios from 'axios';
import React, { useState } from 'react';
import { User, UserCircle, Building, Mail, Lock, ArrowRight } from 'lucide-react';

type UserType = 'docentes' | 'estudiantes' | 'empleados';
type FormType = 'login' | 'forgotPassword' | 'register';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UserType>('docentes');
  const [formType, setFormType] = useState<FormType>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Función para cambiar de pestaña y restablecer el formulario a "login"
  const handleTabChange = (newTab: UserType) => {
    setActiveTab(newTab);
    setFormType('login');
  };

  // Función para enviar el formulario de registro
  const handleRegister = async () => {
    try {
      const role = activeTab === 'docentes' ? 'TEACHERS' : activeTab === 'estudiantes' ? 'STUDENTS' : 'EMPLOYEES';
      
      const response = await axios.post('http://localhost:8080/api/register', {
        email,
        password,
        role,
      });
      alert(`Registro exitoso para ${role}!`);
    } catch (error) {
      alert('Error al registrarse.');
    }
  };

  // Función para enviar el formulario de inicio de sesión
  const handleLogin = async () => {
    try {
      const role = activeTab === 'docentes' ? 'TEACHERS' : activeTab === 'estudiantes' ? 'STUDENTS' : 'EMPLOYEES';
      
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password,
      });

      if (response.data.role !== role) {
        alert('El rol no coincide con el formulario en el que estás logueado.');
        return;
      }

      alert('Inicio de sesión exitoso!');
    } catch (error) {
      alert('Error al iniciar sesión.');
    }
  };

  // Función para enviar el formulario de recuperación de contraseña
  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/forgot-password', {
        email,
      });
      alert(` ${response.data}`);
    } catch (error) {
      alert('Correo no encontrado.');
    }
  };

  const renderForm = () => {
    if (formType === 'login') {
      return (
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <h3 className="text-xl font-semibold text-green-800 mb-4">Inicio de sesión para {activeTab}</h3>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-green-600" size={20} />
            <input type="email" placeholder="Correo electrónico" className="pl-10 w-full py-2 border-b border-green-300 focus:border-yellow-400 bg-transparent text-green-800 outline-none" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-green-600" size={20} />
            <input type="password" placeholder="Contraseña" className="pl-10 w-full py-2 border-b border-green-300 focus:border-yellow-400 bg-transparent text-green-800 outline-none" required value={password} onChange={(e) => setPassword(e.target.value)} />
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
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleForgotPassword(); }}>
          <h3 className="text-xl font-semibold text-green-800 mb-4">Recuperar contraseña para {activeTab}</h3>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-green-600" size={20} />
            <input type="email" placeholder="Correo electrónico" className="pl-10 w-full py-2 border-b border-green-300 focus:border-yellow-400 bg-transparent text-green-800 outline-none" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
            Enviar instrucciones <ArrowRight className="ml-2" size={20} />
          </button>
          <a onClick={() => setFormType('login')} className="block text-center text-sm text-green-600 hover:text-green-800 cursor-pointer">Volver al inicio de sesión</a>
        </form>
      );
    } else {
      return (
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
          <h3 className="text-xl font-semibold text-green-800 mb-4">Registro de {activeTab}</h3>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-green-600" size={20} />
            <input type="email" placeholder="Correo electrónico" className="pl-10 w-full py-2 border-b border-green-300 focus:border-yellow-400 bg-transparent text-green-800 outline-none" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-green-600" size={20} />
            <input type="password" placeholder="Contraseña" className="pl-10 w-full py-2 border-b border-green-300 focus:border-yellow-400 bg-transparent text-green-800 outline-none" required value={password} onChange={(e) => setPassword(e.target.value)} />
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
        {renderForm()}
      </div>
    </div>
  );
};

export default App;
