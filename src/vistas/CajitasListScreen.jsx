import { ChevronLeft, HelpCircle, Plus, Info, ChevronRight, Inbox } from 'lucide-react';

const formatearDinero = (n) =>
  '$' + n.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')

const CajitasListScreen = ({ saldos, onBack }) => {
  const cdt = saldos.cdt || 0
  const total = (saldos.totalCajitas || 0) + cdt
  const cajitas = [
    {
      id: 'c1',
      nombre: 'Mi primera Cajita',
      saldo: formatearDinero(saldos.totalCajitas),
      rendimiento: '+' + formatearDinero(saldos.rendimiento).replace('$', ''),
    },
    {
      id: 'cdt',
      nombre: 'CDT',
      fecha: '24 de agosto del 2027',
      saldo: formatearDinero(cdt),
      rendimiento: '12% E.A.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-10">
      
      <div className="flex justify-between items-center px-6 py-4">
        <button className="active:opacity-50 transition-opacity" onClick={onBack}>
          <ChevronLeft className="w-7 h-7 text-gray-600" strokeWidth={2} />
        </button>
        <button className="active:opacity-50 transition-opacity">
          <HelpCircle className="w-6 h-6 text-gray-600" strokeWidth={2} />
        </button>
      </div>

      <div className="px-6 mt-2 mb-6">
        <h1 className="text-[28px] font-bold leading-tight">Cajitas</h1>
      </div>

      <div className="px-6 mb-8 flex justify-between items-start">
        <div>
          <h2 className="text-[16px] font-medium text-gray-600 flex items-center gap-1">
            Total en tus Cajitas
            <Info className="w-4 h-4 text-gray-400" />
          </h2>
          <p className="text-[22px] font-bold mt-1">{formatearDinero(total)}</p>
        </div>
        <div className="text-right">
          <h2 className="text-[16px] font-medium text-gray-600">Rendimientos</h2>
          <p className="text-[16px] font-bold text-green-600 mt-1">+{formatearDinero(saldos.rendimiento).replace('$', '')}</p>
        </div>
      </div>

      <div className="px-6 mb-6">
        <button className="w-full bg-[#F0F1F5] py-[18px] px-5 rounded-2xl flex items-center gap-4 active:bg-gray-200 transition-colors border border-dashed border-gray-300">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Plus className="w-6 h-6 text-[#820AD1]" strokeWidth={2.5} />
          </div>
          <div className="text-left">
            <span className="font-bold text-[16px] block text-[#820AD1]">Crear Cajita</span>
            <span className="text-[14px] text-gray-500 font-medium">Guarda dinero para tus metas</span>
          </div>
        </button>
      </div>

      <div className="w-full h-2 bg-[#F0F1F5] my-2"></div>

      <div className="px-6 py-4">
        <h3 className="font-bold text-[18px] mb-4">Tus Cajitas</h3>
        
        <div className="flex flex-col gap-4">
          {cajitas.map((cajita) => (
            <button key={cajita.id} className="w-full bg-white border border-gray-200 rounded-2xl p-5 flex items-center justify-between gap-2 active:bg-gray-50 transition-colors shadow-sm">
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <div className="w-12 h-12 bg-[#F0F1F5] rounded-full flex items-center justify-center shrink-0">
                  <Inbox className="w-6 h-6 text-black" strokeWidth={2} />
                </div>
                <div className="text-left min-w-0">
                  <p className="font-bold text-[16px]">{cajita.nombre}</p>
                  {cajita.fecha ? (
                    <p className="text-[13px] font-medium text-gray-500 mt-0.5">{cajita.fecha}</p>
                  ) : null}
                  <p className="text-[16px] font-bold mt-1">{cajita.saldo}</p>
                  <p className="text-[13px] font-medium text-green-600 mt-0.5">{cajita.rendimiento}</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400 shrink-0" />
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CajitasListScreen;
