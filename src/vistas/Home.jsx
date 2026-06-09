import { User, Eye, HelpCircle, Trophy, ChevronRight, PiggyBank, Send, QrCode, Receipt, MoreVertical, FileText } from 'lucide-react';

const formatearDinero = (n) =>
  '$' + n.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')

const DashboardScreen = ({ saldos, onAccountClick, onPerfilClick }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-10">
      
      <div className="bg-[#820AD1] pt-12 pb-24 px-6 relative">
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <button onClick={onPerfilClick} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center active:bg-white/30 transition-colors">
              <User className="text-white w-6 h-6" />
            </button>
            <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full border-2 border-[#820AD1]"></div>
          </div>
          <div className="flex gap-6">
            <Eye className="text-white w-6 h-6" strokeWidth={2.5} />
            <HelpCircle className="text-white w-6 h-6" strokeWidth={2.5} />
            <Trophy className="text-white w-6 h-6" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      <div className="px-6 -mt-16 relative z-10">
        
        <div className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden snap-x">
          <div className="min-w-[240px] bg-white rounded-xl p-4 shadow-sm snap-center border border-gray-100 flex flex-col justify-between h-28">
            <div className="flex justify-between items-start">
              <div className="w-8 h-6 bg-gradient-to-r from-purple-500 to-purple-800 rounded-md"></div>
              <MoreVertical className="text-gray-400 w-5 h-5" />
            </div>
            <p className="text-purple-800 font-bold text-sm leading-tight pr-4">Hoy puedes aplicar a una tarjeta de crédito</p>
          </div>
          
          <div className="min-w-[240px] bg-gradient-to-br from-purple-400 to-[#820AD1] rounded-xl p-4 shadow-sm snap-center flex flex-col justify-between h-28">
            <div className="flex justify-between items-start">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">$</span>
              </div>
              <MoreVertical className="text-white/70 w-5 h-5" />
            </div>
            <p className="text-white font-bold text-sm leading-tight pr-4">Ahorra hoy liberando tu Cuenta del 4x1000</p>
          </div>
        </div>

        <button className="mt-6 mb-8 flex justify-between items-center active:opacity-70 transition-opacity w-full text-left" onClick={onAccountClick}>
          <div>
            <h2 className="text-[17px] font-bold">Cuenta de ahorros</h2>
            <p className="text-[22px] font-bold mt-1">{formatearDinero(saldos.saldoDisponible)}</p>
          </div>
          <ChevronRight className="text-gray-400 w-6 h-6" />
        </button>

        <div className="flex gap-2 overflow-x-auto pb-6 [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col items-center gap-2 min-w-[76px]">
            <button className="w-[68px] h-[68px] bg-[#F0F1F5] rounded-full flex items-center justify-center active:bg-gray-200 transition-colors">
              <PiggyBank className="w-6 h-6 text-black" strokeWidth={2} />
            </button>
            <span className="text-[13px] font-bold">Depositar</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 min-w-[76px]">
            <button className="w-[68px] h-[68px] bg-[#F0F1F5] rounded-full flex items-center justify-center active:bg-gray-200 transition-colors">
              <Send className="w-6 h-6 text-black" strokeWidth={2} />
            </button>
            <span className="text-[13px] font-bold">Enviar</span>
          </div>

          <div className="flex flex-col items-center gap-2 min-w-[76px] relative">
            <button className="w-[68px] h-[68px] bg-[#F0F1F5] rounded-full flex items-center justify-center active:bg-gray-200 transition-colors">
              <span className="font-bold text-[15px] text-black">Bre-B</span>
            </button>
            <span className="absolute bottom-[26px] bg-[#820AD1] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">Tus llaves</span>
            <span className="text-[13px] font-bold mt-[2px]">Bre-B</span>
          </div>

          <div className="flex flex-col items-center gap-2 min-w-[80px] relative">
            <button className="w-[68px] h-[68px] bg-[#F0F1F5] rounded-full flex items-center justify-center active:bg-gray-200 transition-colors">
              <QrCode className="w-6 h-6 text-black" strokeWidth={2} />
            </button>
            <span className="absolute bottom-[40px] bg-[#820AD1] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">Nuevo</span>
            <span className="text-[13px] font-bold text-center leading-tight">Pagar con<br/>código QR</span>
          </div>

          <div className="flex flex-col items-center gap-2 min-w-[76px] relative">
            <button className="w-[68px] h-[68px] bg-[#F0F1F5] rounded-full flex items-center justify-center active:bg-gray-200 transition-colors">
              <Receipt className="w-6 h-6 text-black" strokeWidth={2} />
            </button>
            <span className="absolute bottom-[40px] bg-[#820AD1] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">Nuevo</span>
            <span className="text-[13px] font-bold text-center leading-tight">Pagar<br/>servicios</span>
          </div>
        </div>

        <button className="w-full bg-[#F0F1F5] py-[18px] px-5 rounded-2xl flex items-center gap-4 mb-8 active:bg-gray-200 transition-colors">
          <FileText className="w-6 h-6 text-black" strokeWidth={2} />
          <span className="font-bold text-[15px]">Detalles de mi cuenta</span>
        </button>

        <div className="flex gap-4 overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden snap-x">
          <div className="min-w-[280px] bg-[#F0F1F5] rounded-2xl p-5 flex items-center justify-between snap-center h-[88px]">
            <span className="font-bold text-[14px] leading-tight w-2/3">Nuevas transferencias</span>
            <div className="relative flex items-center">
               <div className="w-8 h-8 bg-purple-400 rounded-full opacity-60 absolute right-2"></div>
               <div className="w-8 h-8 bg-purple-300 rounded-full opacity-80 z-10"></div>
               <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#F0F1F5] z-20 flex items-center justify-center">
                 <span className="text-white text-[8px] font-bold">✓</span>
               </div>
            </div>
          </div>
          
          <div className="min-w-[280px] bg-[#F0F1F5] rounded-2xl p-5 flex items-center snap-center h-[88px]">
            <span className="font-bold text-[14px] leading-tight pr-4">
              <span className="text-black">Activa tus</span> tarjetas virtuales rápido y seguro.
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200"></div>

      <div className="px-6 py-6 flex justify-between items-center active:bg-gray-50 transition-colors">
        <div className="pr-4">
          <h3 className="font-bold text-[17px] mb-1">Aplica a tu Tarjeta de Crédito</h3>
          <p className="text-gray-500 text-[14px] leading-tight font-medium">Encontraremos la mejor opción para ti en minutos</p>
        </div>
        <ChevronRight className="text-gray-400 w-6 h-6 flex-shrink-0" />
      </div>

    </div>
  );
};

export default DashboardScreen;
