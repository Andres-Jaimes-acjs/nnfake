import { useState } from 'react'
import AuthScreen from './vistas/auth'
import DashboardScreen from './vistas/Home'
import AccountDetailScreen from './vistas/AccountDetailScreen'
import CajitasListScreen from './vistas/CajitasListScreen'
import PerfilScreen from './vistas/PerfilScreen'
import saldosIniciales from './data/saldos.json'

const STORAGE_KEY = 'nuFake_saldos'

function cargarSaldos() {
  try {
    const guardado = localStorage.getItem(STORAGE_KEY)
    return guardado ? JSON.parse(guardado) : saldosIniciales
  } catch {
    return saldosIniciales
  }
}

function App() {
  const [vista, setVista] = useState('auth')
  const [saldos, setSaldos] = useState(cargarSaldos)

  const guardarSaldos = (nuevos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevos))
    setSaldos(nuevos)
  }

  if (vista === 'home') return <DashboardScreen saldos={saldos} onAccountClick={() => setVista('account')} onPerfilClick={() => setVista('perfil')} />
  if (vista === 'account') return <AccountDetailScreen saldos={saldos} onBack={() => setVista('home')} onCajitasClick={() => setVista('cajitas')} />
  if (vista === 'cajitas') return <CajitasListScreen saldos={saldos} onBack={() => setVista('account')} />
  if (vista === 'perfil') return <PerfilScreen saldos={saldos} onSave={(nuevos) => { guardarSaldos(nuevos); setVista('home') }} onBack={() => setVista('home')} />

  return <AuthScreen onLogin={() => setVista('home')} />
}

export default App
