import { TrendingUp, AlertTriangle, Layers, RefreshCw, Download, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_ACTIONS, CAPACITY_DATA, DAYS } from '../constants';

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-primary tracking-tight">Warehouse Overview</h1>
          <p className="text-on-surface-variant mt-1">Key Performance Indicators - Sector 4</p>
        </div>
        <div className="flex gap-3 w-full lg:w-auto">
          <button className="flex-1 lg:flex-none h-11 px-6 bg-surface-container-lowest border-2 border-primary text-primary font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-surface-container transition-colors">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="flex-1 lg:flex-none h-11 px-6 bg-primary text-white font-bold rounded-lg flex items-center justify-center hover:bg-primary-container transition-all active:scale-95 shadow-md">
            Refresh Data
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Capacity */}
        <KPICard 
          title="CAPACITY" 
          value="82%" 
          trend="+3% this week" 
          icon={Layers} 
          hasProgress={true}
          progress={82}
        />
        {/* Expiring Alerts */}
        <div className="bg-surface-container-lowest p-6 border-2 border-secondary-container rounded-xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-secondary-container/10 rounded-bl-full" />
          <div className="flex justify-between items-start mb-6">
            <div className="p-2.5 bg-secondary-container/20 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-secondary-container" />
            </div>
            <span className="text-[10px] font-bold tracking-widest bg-secondary-container/20 px-2 py-1 rounded text-secondary-container uppercase">
              Expiring
            </span>
          </div>
          <div>
            <div className="text-4xl font-display font-bold text-secondary-container">14</div>
            <div className="text-sm text-on-surface-variant mt-1">Pallets within 48hrs</div>
          </div>
          <button className="mt-4 w-full bg-secondary-container text-white font-bold py-2.5 rounded-lg hover:brightness-110 active:scale-95 transition-all text-center">
            Review Alerts
          </button>
        </div>
        {/* Density */}
        <KPICard 
          title="DENSITY" 
          value="124" 
          trend="Stable average" 
          icon={Layers} 
        />
        {/* Rotation */}
        <KPICard 
          title="ROTATION" 
          value="4.2" 
          suffix="x/mo"
          trend="+0.5 from last mo" 
          icon={RefreshCw} 
        />
      </div>

      {/* Charts & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trend Chart */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-6 border border-outline-variant rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-display font-bold text-primary">Capacity Trend</h2>
            <select className="bg-surface-container border-none text-sm font-medium rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-2 border-b border-l border-outline-variant pb-1 pl-1 relative mb-4">
            {/* Y Axis */}
            <div className="absolute -left-10 top-0 h-full flex flex-col justify-between text-[10px] font-bold text-outline py-1">
              <span>100%</span>
              <span>50%</span>
              <span>0%</span>
            </div>
            {/* Bars */}
            {CAPACITY_DATA.map((val, i) => (
              <motion.div 
                key={DAYS[i]}
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={`w-full rounded-t ${i === CAPACITY_DATA.length - 1 ? 'bg-secondary-container' : 'bg-primary'}`}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] font-bold text-outline pl-1">
            {DAYS.map(day => <span key={day}>{day}</span>)}
          </div>
        </div>

        {/* Priority Actions */}
        <div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-xl shadow-sm">
          <h2 className="text-xl font-display font-bold text-primary mb-6">Priority Actions</h2>
          <div className="space-y-3">
            {MOCK_ACTIONS.map(action => (
              <div 
                key={action.id} 
                className={`bg-surface-container p-4 rounded-lg flex items-center justify-between border-l-4 group transition-all cursor-pointer hover:bg-surface-container-high ${
                  action.type === 'expiry' ? 'border-secondary-container' : 'border-outline-variant'
                }`}
              >
                <div>
                  <div className="font-mono font-bold text-primary">{action.title}</div>
                  <div className="text-sm text-on-surface-variant">{action.subtitle}</div>
                </div>
                <button className="p-2 text-secondary-container group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KPICard({ title, value, trend, suffix, icon: Icon, hasProgress, progress }: any) {
  return (
    <div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-xl flex flex-col justify-between shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div className="p-2.5 bg-surface-container rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <span className="text-[10px] font-bold tracking-widest bg-surface-container-high px-2 py-1 rounded text-on-surface-variant uppercase">
          {title}
        </span>
      </div>
      <div>
        <div className="text-4xl font-display font-bold text-on-surface flex items-baseline gap-1">
          {value}
          {suffix && <span className="text-lg font-medium text-outline">{suffix}</span>}
        </div>
        <div className="text-xs text-on-surface-variant flex items-center gap-1 mt-1.5 font-medium">
          <TrendingUp className="w-3.5 h-3.5 text-outline" /> {trend}
        </div>
      </div>
      {hasProgress && (
        <div className="w-full bg-surface-container-highest h-2 rounded-full mt-6 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="bg-primary h-full rounded-full" 
          />
        </div>
      )}
    </div>
  );
}
