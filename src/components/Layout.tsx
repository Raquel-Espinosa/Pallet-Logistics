import { LayoutDashboard, Package, Scan, Settings, Menu, UserCircle, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Layout({ children, activeTab, onTabChange }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
    { name: 'Inventory', icon: Package, id: 'inventory' },
    { name: 'Scan', icon: Scan, id: 'scan' },
    { name: 'Settings', icon: Settings, id: 'settings' },
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col md:flex-row">
      {/* Top App Bar (Mobile & Desktop) */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-surface-container-lowest border-b-2 border-primary z-50 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-surface-container rounded-full transition-colors md:hidden"
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
          <h1 className="text-2xl font-display font-bold text-primary tracking-tight">
            Pallet Logistics
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <UserCircle className="w-6 h-6 text-outline" />
          </button>
        </div>
      </header>

      {/* Navigation Drawer (Desktop) */}
      <aside className="hidden md:flex flex-col w-80 bg-surface-container border-r border-outline-variant fixed top-16 bottom-0 z-40">
        <div className="p-6 border-b border-outline-variant mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
              LS
            </div>
            <div>
              <div className="text-lg font-display font-bold text-primary">Logistics Specialist</div>
              <div className="text-sm text-on-surface-variant leading-none">Warehouse Sector 4</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-outline mt-1.5">Shift A</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-4 py-2 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-primary text-white font-bold shadow-md'
                  : 'text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-outline-variant">
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-error hover:bg-error/5 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout System</span>
          </button>
        </div>
      </aside>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-72 bg-surface-container-lowest z-[70] md:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-outline-variant">
                <h2 className="text-xl font-display font-bold text-primary">Menu</h2>
              </div>
              <nav className="flex-1 p-4 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onTabChange(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg ${
                      activeTab === item.id
                        ? 'bg-secondary-container text-on-secondary-container font-bold'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-80 pt-20 pb-24 md:pb-8 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>

      {/* Bottom Navigation (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-surface-container-lowest border-t-2 border-primary flex justify-around items-center px-4 z-50">
        {navigation.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-150 ${
              activeTab === item.id
                ? 'bg-secondary-container text-on-secondary-container ring-1 ring-secondary-container ring-offset-1'
                : 'text-on-surface-variant'
            }`}
          >
            <item.icon className={`w-6 h-6 mb-1 ${activeTab === item.id ? 'fill-current' : ''}`} />
            <span className="text-[10px] uppercase font-bold tracking-wider">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
