import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'

const PerfilScreen = ({ saldos, onSave, onBack }) => {
  const [form, setForm] = useState({ cdt: 0, ...saldos })

  const handleChange = (campo) => (e) =>
    setForm({ ...form, [campo]: Number(e.target.value) || 0 })

  const handleSave = () => {
    onSave({ ...form })
  }

  return (
    <div className="min-h-screen bg-white font-sans p-6 flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="active:opacity-50">
          <ChevronLeft className="w-7 h-7 text-gray-600" strokeWidth={2} />
        </button>
        <h1 className="text-[22px] font-bold">Editar saldos</h1>
      </div>

      <div className="flex flex-col gap-5 flex-1">
        <div>
          <label className="text-sm font-medium text-gray-500 mb-1 block">Saldo disponible (Home)</label>
          <input
            type="number"
            step="0.01"
            value={form.saldoDisponible}
            onChange={handleChange('saldoDisponible')}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[#820AD1]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500 mb-1 block">Total Cajitas</label>
          <input
            type="number"
            step="0.01"
            value={form.totalCajitas}
            onChange={handleChange('totalCajitas')}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[#820AD1]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500 mb-1 block">Rendimiento</label>
          <input
            type="number"
            step="0.01"
            value={form.rendimiento}
            onChange={handleChange('rendimiento')}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[#820AD1]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500 mb-1 block">CDT</label>
          <input
            type="number"
            step="0.01"
            value={form.cdt}
            onChange={handleChange('cdt')}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[#820AD1]"
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-[#820AD1] text-white font-bold text-lg py-4 rounded-full active:opacity-80 transition-opacity mt-8"
      >
        Guardar cambios
      </button>
    </div>
  )
}

export default PerfilScreen
