import { Package, Settings as SettingsIcon, PackageCheck, Thermometer, Layers, Plus, Minus, Camera, Save, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function ConfigForm() {
  const [beds, setBeds] = useState(5);
  const [pieces, setPieces] = useState(12);
  const [days, setDays] = useState(30);

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-primary tracking-tight">Configuración de Tarima</h1>
        <p className="text-on-surface-variant mt-1.5">Alta o modificación de especificaciones de entarimado.</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Material Identification */}
        <section className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/5 rounded-lg">
              <PackageCheck className="w-6 h-6 text-primary fill-current" />
            </div>
            <h3 className="text-lg font-display font-bold text-primary">Identificación del Material</h3>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase px-1">Número de Material</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Ej. MAT-84729"
                className="w-full h-14 bg-surface-container-low border-2 border-outline-variant rounded-xl px-4 font-mono font-bold text-primary focus:ring-0 focus:border-primary transition-all pr-12 group-hover:border-outline outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-outline hover:text-primary transition-colors">
                <Camera className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Parameters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Expiration Days */}
          <section className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/5 rounded-lg">
                <Thermometer className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold text-primary">Caducidad</h3>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase px-1">Tiempo Permitido (Días)</label>
              <Stepper value={days} onChange={setDays} />
            </div>
          </section>

          {/* Geometry Overview Card */}
          <section className="md:col-span-2 bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl shadow-sm space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/5 rounded-lg">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold text-primary">Geometría de Tarima</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase px-1">Piezas por Cama</label>
                <Stepper value={pieces} onChange={setPieces} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase px-1">Altura (No. de Camas)</label>
                <Stepper value={beds} onChange={setBeds} />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-primary-container/10 border border-primary/10 rounded-xl mt-4">
              <span className="text-sm font-bold text-primary uppercase tracking-tight">Total de piezas por tarima</span>
              <span className="text-2xl font-mono font-bold text-primary">{pieces * beds}</span>
            </div>
          </section>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <button className="flex-1 h-14 bg-surface-container-lowest border-2 border-primary text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container transition-all active:scale-95">
            <X className="w-5 h-5" /> Cancelar
          </button>
          <button className="flex-[2] h-14 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary-container transition-all shadow-xl active:scale-95">
            <Save className="w-5 h-5" /> Guardar Configuración
          </button>
        </div>
      </form>
    </div>
  );
}

function Stepper({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center h-14 w-full">
      <button 
        type="button"
        onClick={() => onChange(Math.max(0, value - 1))}
        className="h-full w-14 flex items-center justify-center bg-surface-container-high border border-outline-variant rounded-l-xl hover:bg-surface-container-highest transition-colors active:scale-95"
      >
        <Minus className="w-5 h-5 text-primary" />
      </button>
      <input 
        type="number" 
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value) || 0)}
        className="flex-1 h-full text-center bg-surface-container-low border-y border-outline-variant font-mono font-bold text-primary text-xl focus:ring-0 outline-none appearance-none"
      />
      <button 
        type="button"
        onClick={() => onChange(value + 1)}
        className="h-full w-14 flex items-center justify-center bg-surface-container-high border border-outline-variant rounded-r-xl hover:bg-surface-container-highest transition-colors active:scale-95"
      >
        <Plus className="w-5 h-5 text-primary" />
      </button>
    </div>
  );
}
