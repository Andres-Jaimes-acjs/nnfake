import { ChevronLeft, HelpCircle, PiggyBank, Send, ArrowDownToLine, Search, Smartphone, Repeat, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const formatearDinero = (n) =>
  '$' + n.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')

const AccountDetailScreen = ({ saldos, onBack, onCajitasClick }) => {
  const totalCajitas = (saldos.totalCajitas || 0) + (saldos.cdt || 0)
  const transactions = [
    { id: 1, type: 'transfer_out', title: 'Transferencia enviada', name: 'Maria Lopez', date: 'Hoy', amount: '-$50.000', icon: <ArrowUpRight className="w-5 h-5 text-gray-700" /> },
    { id: 2, type: 'transfer_in', title: 'Transferencia recibida', name: 'Carlos Perez', date: 'Ayer', amount: '+$120.000', icon: <ArrowDownLeft className="w-5 h-5 text-gray-700" /> },
    { id: 3, type: 'payment', title: 'Pago de servicio', name: 'ENEL Colombia', date: 'Ayer', amount: '-$85.300', icon: <Smartphone className="w-5 h-5 text-gray-700" /> },
    { id: 4, type: 'auto', title: 'Rendimiento', name: 'Tu saldo', date: '15 jun', amount: '+$1.250', icon: <Repeat className="w-5 h-5 text-green-600" /> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-8">
      
      <div className="flex justify-between items-center px-6 py-4">
        <button className="active:opacity-50" onClick={onBack}>
          <ChevronLeft className="w-7 h-7 text-gray-600" strokeWidth={2} />
        </button>
        <button className="active:opacity-50">
          <HelpCircle className="w-6 h-6 text-gray-600" strokeWidth={2} />
        </button>
      </div>

      <button className="px-6 mt-4 mb-8 w-full text-left active:opacity-70 transition-opacity" onClick={onCajitasClick}>
        <h2 className="text-[16px] font-medium text-gray-600">Saldo disponible</h2>
        <h1 className="text-4xl font-bold mt-1 mb-2">{formatearDinero(totalCajitas)}</h1>
        <p className="text-[14px] font-medium text-green-600 flex items-center gap-1">
          + {formatearDinero(saldos.rendimiento).replace('$', '')} este mes
        </p>
      </button>

      <div className="flex gap-4 overflow-x-auto px-6 pb-6 [&::-webkit-scrollbar]:hidden">
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

        <div className="flex flex-col items-center gap-2 min-w-[76px]">
          <button className="w-[68px] h-[68px] bg-[#F0F1F5] rounded-full flex items-center justify-center active:bg-gray-200 transition-colors">
            <ArrowDownToLine className="w-6 h-6 text-black" strokeWidth={2} />
          </button>
          <span className="text-[13px] font-bold">Retirar</span>
        </div>
      </div>

      <div className="w-full h-2 bg-[#F0F1F5] my-2"></div>

      <div className="px-6 py-6 flex justify-between items-center">
        <h3 className="font-bold text-[20px]">Historial</h3>
        <button className="active:opacity-50">
          <Search className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="px-6 flex flex-col gap-6">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex justify-between items-center active:opacity-70 transition-opacity">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#F0F1F5] rounded-full flex items-center justify-center">
                {tx.icon}
              </div>
              <div>
                <p className="font-bold text-[15px]">{tx.title}</p>
                <p className="text-gray-500 text-[14px]">{tx.name} - {tx.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-bold text-[15px] ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-black'}`}>
                {tx.amount}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AccountDetailScreen;
