
import React from 'react';
import { UserContext, View } from '../types';
import BottomNav from '../components/BottomNav';

interface ProfileScreenProps {
  user: UserContext | null;
  onBack: () => void;
  onLogout: () => void;
  onNavigate: (view: View) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ user, onBack, onLogout, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display flex flex-col h-screen overflow-hidden">
      <header className="shrink-0 pt-10 pb-6 px-6 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-sm">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-xl font-bold">Profile Settings</h2>
          <button className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-sm text-primary">
            <span className="material-symbols-outlined">edit</span>
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="size-28 rounded-3xl bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0tzod5ICzw7wTyXuaN_0-G5Bt_DFuZ9AEoOURWkMMkVZaIfdbBLn7CvfcNZ6edfC6IASWv-8Nie45w5DtD8f0HfIsKm07vIG5VszQEVT8D5Q60imSEQq8siGC5UZOQOKApwIRyu4RLrAPHytf6ujaTgLjzM227O7NQRHMQpS2FaskmuOxUl_LtFqsDCkrX6Z7bIsQf6N8biksvLWbapiT50cbCwwCog_ka1UzZcB-JCagOdDpZ1CQVBP8CiVwdFcAACxayZHHP_nm" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 size-8 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[14px] filled">check</span>
            </div>
          </div>
          <h3 className="text-2xl font-black">{user?.name || 'Fremsss'}</h3>
          <p className="text-primary font-bold text-sm tracking-widest uppercase mt-1">{user?.role || 'Secretariat Member'}</p>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pb-32 space-y-6 no-scrollbar">
        {/* Account Info */}
        <section>
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 px-2">Jurisdiction Info</h4>
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm space-y-4 border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-500">Presbytery</span>
              <span className="text-sm font-bold">{user?.presbytery || 'Ga Presbytery'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-500">District</span>
              <span className="text-sm font-bold">{user?.district || 'Haatso'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-500">Active Cycle</span>
              <span className="text-sm font-bold">{user?.term || 'Q3'} {user?.year || '2024'}</span>
            </div>
          </div>
        </section>

        {/* Security & System */}
        <section>
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 px-2">Settings</h4>
          <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-50 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">notifications_active</span>
                <span className="text-sm font-bold">Push Notifications</span>
              </div>
              <div className="w-10 h-6 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 size-4 bg-white rounded-full"></div>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-50 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">face</span>
                <span className="text-sm font-bold">Biometric Authentication</span>
              </div>
              <span className="text-xs font-bold text-green-600">Enabled</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">dark_mode</span>
                <span className="text-sm font-bold">Appearance</span>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">System Default</span>
            </button>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="pt-2">
          <button 
            onClick={onLogout}
            className="w-full py-4 rounded-2xl bg-red-50 dark:bg-red-900/10 text-red-600 font-black flex items-center justify-center gap-2 border border-red-100 dark:border-red-900/20 active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined">logout</span>
            Sign Out of Portal
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-6 font-medium">
            Portal Version 2.4.0 (2025 Build)<br/>
            Presbyterian Church of Ghana Secretariat
          </p>
        </section>
      </main>

      <BottomNav currentView="PROFILE" onNavigate={onNavigate} />
    </div>
  );
};

export default ProfileScreen;
