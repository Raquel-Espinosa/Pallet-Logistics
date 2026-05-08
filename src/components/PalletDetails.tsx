import { QrCode, CircleCheck, Info, Layers, Scale, Ruler, Thermometer, FlaskConical, ArrowLeft, Settings as SettingsIcon } from 'lucide-react';
import { motion } from 'motion/react';

export default function PalletDetails() {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
      {/* Mobile Breadcrumb */}
      <button className="md:hidden flex items-center gap-2 text-primary font-bold -mb-4">
        <ArrowLeft className="w-5 h-5" /> Back to Inventory
      </button>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-secondary-container text-white font-bold text-[10px] tracking-widest px-2 py-1 rounded-sm uppercase">
              EN INSPECCIÓN
            </span>
            <span className="text-on-surface-variant font-mono font-bold">PLT-8924-MX</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-primary tracking-tight">Detalle de Tarima</h1>
        </div>
        <div className="flex gap-4 w-full lg:w-auto">
          <button className="flex-1 lg:flex-none h-12 px-6 bg-surface-container-lowest border-2 border-primary text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container transition-all">
            <QrCode className="w-5 h-5" /> Re-escanear
          </button>
          <button className="flex-1 lg:flex-none h-12 px-8 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary-container transition-all shadow-lg active:scale-95">
            <CircleCheck className="w-5 h-5" /> Aprobar
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Info Card */}
        <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl flex flex-col gap-6 shadow-sm">
          <div className="flex justify-between items-center border-b border-surface-container-highest pb-4">
            <h3 className="text-lg font-display font-bold text-primary">Información Principal</h3>
            <Info className="w-5 h-5 text-outline" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
            <DetailItem label="NÚMERO DE MATERIAL" value="MAT-45902-B" valueClass="text-xl font-bold text-primary" />
            <DetailItem label="LOTE" value="L-202311A" valueClass="font-mono text-primary" />
            <DetailItem 
              label="CADUCIDAD" 
              value="15 DIC 2024" 
              valueClass="font-bold text-secondary-container" 
              isWarning={true} 
            />
            <DetailItem label="UBICACIÓN ACTUAL" value="Pasillo 4, Rack B2" valueClass="text-primary" />
          </div>
        </div>

        {/* Structure Card */}
        <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl flex flex-col gap-6 shadow-sm">
          <div className="flex justify-between items-center border-b border-surface-container-highest pb-4">
            <h3 className="text-lg font-display font-bold text-primary">Estructura</h3>
            <Layers className="w-5 h-5 text-outline" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-surface-container px-4 py-3 rounded-xl">
              <span className="text-sm text-on-surface-variant font-medium">Piezas por Cama (Ti)</span>
              <span className="text-xl font-mono font-bold text-primary">12</span>
            </div>
            <div className="flex justify-between items-center bg-surface-container px-4 py-3 rounded-xl">
              <span className="text-sm text-on-surface-variant font-medium">Alturas Totales (Hi)</span>
              <span className="text-xl font-mono font-bold text-primary">5</span>
            </div>
            <div className="flex justify-between items-center bg-primary-container px-4 py-4 rounded-xl border border-primary/20 mt-4">
              <span className="text-base text-on-primary-container font-bold">Total Piezas</span>
              <span className="text-2xl font-mono font-bold text-white">60</span>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="lg:col-span-3 bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 border-b border-surface-container-highest pb-4 mb-8">
            <SettingsIcon className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-display font-bold text-primary">Especificaciones Técnicas</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TechSpecCard icon={Scale} label="PESO BRUTO" value="1,245 kg" />
            <TechSpecCard icon={Ruler} label="ALTURA MÁXIMA" value="1.85 m" />
            <TechSpecCard icon={Thermometer} label="TEMPERATURA" value="Ambiente (15-25°C)" />
            <TechSpecCard icon={FlaskConical} label="TIPO MATERIAL" value="Químico No Peligroso" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value, valueClass, isWarning }: any) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">{label}</span>
      <div className={`flex items-center gap-2 ${valueClass}`}>
        {isWarning && <WarningIcon size={16} className="text-secondary-container" />}
        {value}
      </div>
    </div>
  );
}

function TechSpecCard({ icon: Icon, label, value }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-surface p-6 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center gap-3 hover:border-primary transition-all duration-300"
    >
      <div className="p-3 bg-surface-container rounded-full">
        <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
      </div>
      <div className="space-y-1">
        <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">{label}</span>
        <div className="font-mono font-bold text-primary text-sm leading-tight">{value}</div>
      </div>
    </motion.div>
  );
}

function WarningIcon({ size, className }: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m11.73 3 9 16a2 2 0 0 1-1.73 3H5a2 2 0 0 1-1.73-3l9-16Z"/>
      <path d="M12 9v4"/>
      <path d="M12 17h.01"/>
    </svg>
  );
}
