
import React from 'react';
import { Report, View } from '../types';
import BottomNav from '../components/BottomNav';

interface ArchivedReportsScreenProps {
  onBack: () => void;
  onNavigate: (view: View) => void;
}

const ARCHIVED_REPORTS: Report[] = [
  { id: '1', title: '2023 Annual Presbytery Report', presbytery: 'Ga Presbytery', date: 'Dec 20, 2023', status: 'Archived', period: '2023', size: '4.2 MB', type: 'PDF' },
  { id: '2', title: 'Q3 Financial Statement', presbytery: 'Haatso District', date: 'Oct 15, 2023', status: 'Archived', period: 'Q3 2023', size: '850 KB', type: 'XLS' },
  { id: '3', title: 'Harvest Committee Report', presbytery: 'Grace Congregation', date: 'Oct 02, 2023', status: 'Archived', period: '2023', size: '15 MB', type: 'ZIP' },
  { id: '4', title: 'Youth Week Activities', presbytery: 'Shalom Congregation', date: 'Aug 10, 2023', status: 'Archived', period: '2023', size: '1.2 MB', type: 'PDF' },
];

const ArchivedReportsScreen: React.FC<ArchivedReportsScreenProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-white font-display flex flex-col h-screen overflow-hidden">
      <header className="flex-none bg-background-light dark:bg-background-dark pt-8 pb-2 px-4 sticky top-0 z-20">
        <div className="flex items-center justify-between">
          <button 
            onClick={onBack}
            className="text-text-main-light dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h2 className="text-lg font-bold flex-1 text-center">Archived Reports</h2>
          <div className="flex size-10 items-center justify-center">
            <img alt="YPG Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQuVv_yuGPt2bNKcvc1Nhm_BVTOEfSbH7Udqe2JTy6_HbHL4XQHAmkKLboX4JToUvfACaPvbxYKrD24EXWc_AKK699Eefjhe2Oj7Ewh1ZJFakOjcunQuAHzPcxdhikL3n-w5I4eFww149Jx3Opy9c7LCQ-5Y5JS-An7pxft-bB6cNyiZOFIq0Easmz-7Mqn1jmK1XqkQcJYScBv_kyiUSIC8qNICEjlCIf_N0xsTOM8u_ctHvQcKuC3BtjHGgGoeV9RlZF_xLGZ7rH" />
          </div>
        </div>
      </header>

      <div className="px-4 py-3 bg-background-light dark:bg-background-dark z-10">
        <div className="flex w-full items-stretch rounded-xl h-12 shadow-sm bg-white dark:bg-surface-dark overflow-hidden border border-gray-100 dark:border-gray-800 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <div className="text-[#4c669a] flex items-center justify-center pl-4 pr-2">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input className="flex w-full bg-transparent text-text-main-light dark:text-white focus:outline-0 border-none px-2 text-base" placeholder="Search by title, level..." />
          <button onClick={() => onNavigate('EXPORT')} className="text-[#4c669a] flex items-center justify-center pr-4 pl-2">
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        </div>
      </div>

      <div className="pb-2 bg-background-light dark:bg-background-dark z-10 border-b border-gray-100 dark:border-gray-800">
        <div className="flex gap-2 px-4 overflow-x-auto no-scrollbar pb-2">
          {['All', 'Presbytery', 'District', 'Branch', 'Date Range'].map((filter, i) => (
            <button key={filter} className={`flex h-8 shrink-0 items-center justify-center px-4 rounded-full border text-sm font-medium ${i === 0 ? 'bg-primary text-white border-transparent' : 'bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 text-text-main-light dark:text-white'}`}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 pb-32 no-scrollbar">
        <p className="text-xs font-semibold text-[#4c669a] dark:text-slate-400 uppercase tracking-wider mb-2 mt-2 px-1">December 2023</p>
        {ARCHIVED_REPORTS.map((report) => (
          <div key={report.id} className="flex flex-col bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 active:scale-[0.99] transition-transform">
            <div className="flex gap-4 p-4 items-start">
              <div className="relative flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-12 text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  {report.type === 'PDF' ? 'picture_as_pdf' : report.type === 'ZIP' ? 'folder_zip' : 'description'}
                </span>
                <div className="absolute -bottom-1 -right-1 bg-white dark:bg-surface-dark rounded-full p-[2px]">
                  <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-text-main-light dark:text-white text-base font-semibold leading-tight truncate pr-2">{report.title}</h3>
                  <span className="bg-secondary/10 text-yellow-700 dark:text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-secondary/20 flex items-center gap-1 shrink-0">
                    <span className="material-symbols-outlined text-[10px]">lock</span>
                    ARCHIVED
                  </span>
                </div>
                <p className="text-[#4c669a] dark:text-slate-400 text-sm mt-1 truncate">{report.presbytery}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-[#4c669a] dark:text-slate-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-[11px]">{report.date}</span>
                  <span className="text-xs text-[#4c669a]">•</span>
                  <span className="text-xs text-[#4c669a] dark:text-slate-400">{report.type} • {report.size}</span>
                </div>
              </div>
              <div className="shrink-0 self-center">
                <span className="material-symbols-outlined text-gray-400 text-[20px]">chevron_right</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav currentView="ARCHIVED" onNavigate={onNavigate} />
    </div>
  );
};

export default ArchivedReportsScreen;
