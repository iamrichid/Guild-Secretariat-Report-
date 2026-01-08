
import React from 'react';
import { View, UserContext, Report } from '../types';
import BottomNav from '../components/BottomNav';

interface DashboardScreenProps {
  user: UserContext | null;
  onNavigate: (view: View) => void;
  onCreateNew: () => void;
}

const MOCK_REPORTS: Report[] = [
  { id: '1', title: 'Q3 Financial Report', presbytery: 'Ga Presbytery', date: 'Oct 24, 2023', status: 'Submitted', period: 'July - Sept 2023' },
  { id: '2', title: 'Youth Week Budget', presbytery: 'Asante Presbytery', date: '2h ago', status: 'Draft', period: 'Jan 2024' },
  { id: '3', title: 'Evangelism Committee', presbytery: 'Ga Presbytery', date: 'Pending Approval', status: 'Pending', period: '2024' },
  { id: '4', title: 'Q2 Financial Report', presbytery: 'Ga Presbytery', date: 'Aug 15, 2023', status: 'Archived', period: 'April - June 2023' },
];

const DashboardScreen: React.FC<DashboardScreenProps> = ({ user, onNavigate, onCreateNew }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-50 antialiased min-h-screen pb-24 overflow-y-auto no-scrollbar">
      <div className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="shrink-0 mr-1">
            <img 
              alt="YPG Logo" 
              className="h-10 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrAMDkiozUCSYS8mPz42tCA_mu_YLDCL03GaR_Ai94fPqGI5-gG72r1vuLLnG8dZgIA-8b7t4V_SwYyXHLGFFFSE0iL1uAg-osVzQPaARSOz6NaRfzjmEDGdgpHbpfwIxPvHAoyOEQOntHPkHsnkzRxaeQ_8-QhlBJXd88M-p7TcHNUDgWGF0Zo4HKjCLFYq97CHWHyv-cYfN-v32S7INm-zlKQIir0_uAHaBz0SBVZE8QYSicQHnxz-0fM-KrhJQpzMLPyzB7sG8s" 
            />
          </div>
          <div className="relative">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-slate-700 shadow-sm" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0tzod5ICzw7wTyXuaN_0-G5Bt_DFuZ9AEoOURWkMMkVZaIfdbBLn7CvfcNZ6edfC6IASWv-8Nie45w5DtD8f0HfIsKm07vIG5VszQEVT8D5Q60imSEQq8siGC5UZOQOKApwIRyu4RLrAPHytf6ujaTgLjzM227O7NQRHMQpS2FaskmuOxUl_LtFqsDCkrX6Z7bIsQf6N8biksvLWbapiT50cbCwwCog_ka1UzZcB-JCagOdDpZ1CQVBP8CiVwdFcAACxayZHHP_nm")' }}
            ></div>
            <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Welcome back</p>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{user?.name || 'Fremsss'}</h2>
          </div>
        </div>
        <button className="relative p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300">
          <span className="material-symbols-outlined text-[24px]">notifications</span>
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
          </span>
        </button>
      </div>

      <div className="px-5 pt-6 pb-2">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
          Service all the way.
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Here is what's happening in your Presbytery/District/branch today.</p>
      </div>

      <div className="flex overflow-x-auto px-5 py-4 gap-4 no-scrollbar snap-x">
        <div className="snap-center shrink-0 w-40 flex flex-col justify-between p-4 rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[48px] text-primary">description</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Submitted</p>
          <div className="mt-2">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">12</span>
            <span className="text-xs text-green-600 font-medium bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded ml-2">+2</span>
          </div>
        </div>
        <div className="snap-center shrink-0 w-40 flex flex-col justify-between p-4 rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[48px] text-secondary">pending_actions</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Pending</p>
          <div className="mt-2">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">4</span>
            <span className="text-xs text-secondary font-medium bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded ml-2">Review</span>
          </div>
        </div>
        <div className="snap-center shrink-0 w-40 flex flex-col justify-between p-4 rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[48px] text-red-500">event_busy</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Due Soon</p>
          <div className="mt-2">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">1</span>
            <span className="text-xs text-red-600 font-medium bg-red-100 dark:bg-red-900/30 px-1.5 py-0.5 rounded ml-2">Today</span>
          </div>
        </div>
      </div>

      <div className="px-5 py-2">
        <button 
          onClick={onCreateNew}
          className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-blue-700 active:bg-blue-800 text-white p-4 rounded-xl shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]"
        >
          <span className="material-symbols-outlined">add_circle</span>
          <span className="font-bold text-lg">Create New Report</span>
        </button>
      </div>

      <div className="mt-6 px-5 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Reports</h3>
          <button onClick={() => onNavigate('ALL_REPORTS')} className="text-sm font-semibold text-primary hover:text-blue-600">View All</button>
        </div>
        <div className="flex flex-col gap-3">
          {MOCK_REPORTS.map((report) => (
            <div key={report.id} className="flex items-center gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className={`p-3 rounded-lg shrink-0 ${
                report.status === 'Submitted' ? 'bg-blue-50 dark:bg-blue-900/20 text-primary' :
                report.status === 'Draft' ? 'bg-yellow-50 dark:bg-yellow-900/20 text-secondary' :
                report.status === 'Pending' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-500' :
                'bg-slate-50 dark:bg-slate-800 text-slate-400'
              }`}>
                <span className="material-symbols-outlined">
                  {report.status === 'Submitted' ? 'description' : 
                   report.status === 'Draft' ? 'edit_note' :
                   report.status === 'Pending' ? 'history_edu' : 'inventory_2'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">{report.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {report.status === 'Submitted' ? `Submitted ${report.date}` :
                   report.status === 'Draft' ? `Draft • Modified ${report.date}` :
                   report.status === 'Pending' ? 'Pending Approval' : `Archived • ${report.date}`}
                </p>
              </div>
              <div className="shrink-0">
                {report.status === 'Archived' ? (
                  <span className="material-symbols-outlined text-slate-400 text-[20px]">chevron_right</span>
                ) : (
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                    report.status === 'Submitted' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                    report.status === 'Draft' ? 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300' :
                    'bg-secondary/10 text-yellow-700 dark:bg-secondary/20 dark:text-yellow-300'
                  }`}>
                    {report.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav currentView="DASHBOARD" onNavigate={onNavigate} />
    </div>
  );
};

export default DashboardScreen;
