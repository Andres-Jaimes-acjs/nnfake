import { Smile, SmartphoneNfc } from 'lucide-react';

const AuthScreen = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-[#820AD1] flex flex-col justify-between px-6 py-12 font-sans">
      
      <div className="mt-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-white text-6xl font-bold tracking-tighter">nu</span>
          <SmartphoneNfc className="text-white w-6 h-6 mt-2" strokeWidth={2} />
        </div>

        <h1 className="text-white text-xl font-medium leading-snug">
          Dejaste la puerta abierta y, para proteger tu app, la cerramos por ti. Usa tu contraseña, huella o rostro para volver a entrar.
        </h1>
      </div>

      <div className="flex flex-col items-center gap-8 mb-6 w-full">
        
        <button 
          className="w-full bg-white text-[#820AD1] font-bold text-lg py-4 rounded-full flex items-center justify-center gap-2 active:bg-gray-200 transition-colors"
          type="button"
          onClick={onLogin}
        >
          <Smile className="w-6 h-6" strokeWidth={2.5} />
          Usar Face ID
        </button>
        
        <button 
          className="text-white font-bold text-base active:opacity-70 transition-opacity"
          type="button"
        >
          Entrar con contraseña
        </button>
      </div>
      
    </div>
  );
};

export default AuthScreen;
