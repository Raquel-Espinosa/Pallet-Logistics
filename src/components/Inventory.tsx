import { Search, ChevronRight, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_MATERIALS } from '../constants';

export default function Inventory() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header & Search */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-primary tracking-tight">Catálogo de Materiales</h1>
          <p className="text-on-surface-variant mt-1">Gestione las configuraciones de tarimas y dimensiones.</p>
        </div>
        <div className="relative w-full max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
          <input 
            type="text" 
            placeholder="Buscar por Número de Material..."
            className="w-full h-12 pl-12 pr-4 bg-surface-container-lowest border-2 border-outline-variant rounded-xl font-medium focus:ring-0 focus:border-primary transition-all outline-none"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-12">
        {MOCK_MATERIALS.map((material, i) => (
          <motion.div 
            key={material.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col hover:border-primary hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image/Icon Placeholder */}
            <div className="h-40 bg-surface-container-high relative overflow-hidden flex items-center justify-center">
              {material.imageUrl ? (
                <img 
                  src={material.imageUrl} 
                  alt={material.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <PackageIcon size={48} className="text-outline/40" />
              )}
              <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${
                material.status === 'ACTIVO' 
                  ? 'bg-secondary-container text-white' 
                  : 'bg-surface-container-highest text-on-surface-variant'
              }`}>
                {material.status}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-display font-bold text-primary leading-tight">{material.code}</h3>
              <p className="text-sm text-on-surface-variant mt-1.5 line-clamp-2">{material.description}</p>
              
              <div className="mt-auto pt-6 border-t border-surface-container-highest grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] font-bold text-outline uppercase tracking-wider">Camas/Tarima</div>
                  <div className="text-lg font-mono font-bold text-primary">{material.bedsPerPallet}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-outline uppercase tracking-wider">Pzas/Cama</div>
                  <div className="text-lg font-mono font-bold text-primary">{material.piecesPerBed}</div>
                </div>
                <div className="col-span-2 flex items-center justify-between bg-surface-container-low px-3 py-2 rounded-lg mt-2">
                  <span className="text-[10px] font-bold text-primary uppercase">Total Piezas</span>
                  <span className="text-lg font-display font-bold text-primary">{material.totalPieces}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Add New Card */}
        <button className="h-full min-h-[360px] bg-surface flex flex-col items-center justify-center border-2 border-dashed border-outline-variant rounded-xl group hover:border-primary transition-colors p-6">
          <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-primary/5 transition-colors">
            <Plus className="w-8 h-8 text-outline group-hover:text-primary" />
          </div>
          <span className="text-lg font-bold text-on-surface-variant group-hover:text-primary">Nueva Configuración</span>
          <span className="text-sm text-outline mt-2 text-center max-w-[180px]">Añadir un nuevo material al catálogo general</span>
        </button>
      </div>

      {/* FAB (Mobile Only) */}
      <button className="md:hidden fixed bottom-24 right-4 w-15 h-15 bg-secondary-container text-white rounded-2xl shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}

function PackageIcon({ size, className }: any) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m7.5 4.27 9 5.15"/>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="m3.3 7 8.7 5 8.7-5"/>
      <path d="M12 22V12"/>
    </svg>
  );
}
