
import React from 'react';
import { View } from '../types';

interface BottomNavProps {
  currentView: View;
  onNavigate: (view: View) => void;
  showCreateButton?: boolean;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onNavigate, showCreateButton = false }) => {
  const navItems = [
    { id: 'DASHBOARD' as View, label: 'Dashboard', icon: 'dashboard' },
    { id: 'ALL_REPORTS' as View, label: 'Reports', icon: 'article' },
    { id: 'ARCHIVED' as View, label: 'Archives', icon: 'inventory_2' },
    { id: 'PROFILE' as View, label: 'Profile', icon: 'person' },
  ];

  return (
    <div className="fixed bottom-0 max-w-md w-full bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 pb-safe pt-2 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
      <nav className="flex justify-between items-center h-16 mx-auto">
        {navItems.map((item, index) => (
          <React.Fragment key={item.id}>
            {index === 2 && showCreateButton && (
               <div className="relative -top-6">
                <button 
                  onClick={() => onNavigate('CREATE')}
                  className="flex items-center justify-center size-14 bg-secondary text-slate-900 rounded-full shadow-lg shadow-orange-200 dark:shadow-none hover:scale-105 transition-transform"
                >
                  <span className="material-symbols-outlined text-[28px]">add</span>
                </button>
              </div>
            )}
            <button 
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 transition-colors group ${
                currentView === item.id ? 'text-primary' : 'text-slate-400 hover:text-primary dark:text-slate-500'
              }`}
            >
              <div className={`p-1 rounded-full transition-colors ${currentView === item.id ? 'bg-blue-50 dark:bg-blue-900/20' : 'group-hover:bg-slate-100 dark:group-hover:bg-slate-800'}`}>
                <span className={`material-symbols-outlined ${currentView === item.id ? 'filled' : ''}`}>
                  {item.icon}
                </span>
              </div>
              <span className={`text-[10px] ${currentView === item.id ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
            </button>
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default BottomNav;
