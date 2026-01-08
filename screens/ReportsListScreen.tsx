
import React from 'react';
import { View, Report } from '../types';
import BottomNav from '../components/BottomNav';

interface ReportsListScreenProps {
  onBack: () => void;
  onNavigate: (view: View) => void;
}

const ALL_REPORTS: Report[] = [
  { id: '1', title: 'Q1 Activity Report', presbytery: 'Ga Presbytery', date: 'Jan 2024 - Mar 2024', status: 'Submitted', period: 'Q1 2024', editedTime: '2 days ago' },
  { id: '2', title: 'Membership Audit', presbytery: 'Asante Presbytery', date: 'Jan 2024', status: 'Draft', period: '2024', editedTime: '4 hours ago' },
  { id: '3', title: 'Financial Statement 2023', presbytery: 'National Secretariat', date: 'Jan 2023 - Dec 2023', status: 'Approved', period: '2023', editedTime: 'Mar 15' },
  { id: '4', title: 'Evangelism Outreach Plan', presbytery: 'Northern Presbytery', date: 'Apr 2024', status: 'Draft', period: '2024', editedTime: 'yesterday' },
  { id: '5', title: 'Semi-Annual Audit', presbytery: 'Volta Presbytery', date: 'Jan 2024 - Jun 2024', status: 'Submitted', period: '2024', editedTime: '1 week ago' },
];

const ReportsListScreen: React.FC<ReportsListScreenProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display h-screen flex flex-col overflow-hidden text-[#0d121b] dark:text-white">
      <div className="flex-none bg-background-light dark:bg-background-dark z-20">
        <div className="flex items-center px-4 pt-8 pb-2 justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-[#0d121b] dark:text-white text-[24px]">arrow_back</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <img alt="YPG Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpJEQOeLPDTTXVAvlgIkOyLUQONbx0swUxtuul3B3HwPZntI_2-ACVw_qxQ-SOu6LT8bMcCu5gk1nUHv4tvu9l94FJCWsqIOqte1ppy2e40LhMPIqCxZtg166WtScoHaOx32sLbQYIr6GcopuZRzQB8zHuH3_5FrhbDxTM-8dpF-pX3s1Rkesq-Agy5uZrbVmU9fYivCUfjcG8CnQd1updL67nDR2ucuK0EEqBsKYDBjr0c4WUV9WWXfvdNhJ42RDLLgPjc0NNFdKP" />
            <h2 className="text-[#0d121b] dark:text-white text-lg font-bold">All Reports</h2>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[#0d121b] dark:text-white text-[24px]">filter_list</span>
          </button>
        </div>
        
        <div className="px-4 py-2">
          <div className="flex w-full items-center rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-transparent focus-within:border-primary/50 transition-all h-12">
            <div className="flex items-center justify-center pl-4 pr-2 text-[#4c669a]">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input className="flex w-full flex-1 bg-transparent border-none text-[#0d121b] dark:text-white placeholder:text-[#9aa2b1] focus:ring-0 text-base h-full" placeholder="Search by title or branch..." />
          </div>
        </div>

        <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 shadow-sm shadow-primary/20 border border-primary/10">
            <p className="text-sm font-medium">All</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-4">
            <p className="text-[#0d121b] dark:text-gray-200 text-sm font-medium">Status</p>
            <span className="material-symbols-outlined text-[#0d121b] dark:text-gray-400 text-[18px]">keyboard_arrow_down</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-4">
            <p className="text-[#0d121b] dark:text-gray-200 text-sm font-medium">Presbytery</p>
            <span className="material-symbols-outlined text-[#0d121b] dark:text-gray-400 text-[18px]">keyboard_arrow_down</span>
          </button>
        </div>
        <div className="h-1 w-full bg-gradient-to-b from-gray-100 to-transparent dark:from-black/20 dark:to-transparent opacity-50"></div>
      </div>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-32 pt-2 px-4 space-y-3">
        {ALL_REPORTS.map((report) => (
          <div key={report.id} className="group flex flex-col gap-3 bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-4">
                <div className={`flex items-center justify-center rounded-lg shrink-0 size-12 ${
                  report.status === 'Submitted' ? 'bg-blue-50 dark:bg-blue-900/20 text-primary' :
                  report.status === 'Draft' ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600' :
                  'bg-green-50 dark:bg-green-900/20 text-green-600'
                }`}>
                  <span className="material-symbols-outlined text-[24px]">
                    {report.status === 'Submitted' ? 'description' : 
                     report.status === 'Draft' ? 'edit_document' : 'verified'}
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#0d121b] dark:text-white text-base font-bold leading-tight mb-1">{report.title}</p>
                  <p className="text-[#4c669a] dark:text-gray-400 text-xs font-medium uppercase tracking-wide">{report.presbytery}</p>
                  <p className="text-[#4c669a] dark:text-gray-400 text-sm mt-1">{report.date}</p>
                </div>
              </div>
              <button className="text-gray-400 dark:text-gray-500 hover:text-primary">
                <span className="material-symbols-outlined text-[24px]">more_vert</span>
              </button>
            </div>
            <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700/50 pt-3 mt-1">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                report.status === 'Submitted' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200' :
                report.status === 'Draft' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200' :
                'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                  report.status === 'Submitted' ? 'bg-blue-600' :
                  report.status === 'Draft' ? 'bg-yellow-600' : 'bg-green-600'
                }`}></span>
                {report.status}
              </span>
              <span className="text-xs text-gray-400">
                {report.status === 'Approved' ? `Approved on ${report.editedTime}` : `Edited ${report.editedTime}`}
              </span>
            </div>
          </div>
        ))}
        <div className="h-6"></div>
      </main>

      <div className="fixed bottom-24 right-5 z-40">
        <button 
          onClick={() => onNavigate('CREATE')}
          className="flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:scale-105 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[32px]">add</span>
        </button>
      </div>

      <BottomNav currentView="ALL_REPORTS" onNavigate={onNavigate} />
    </div>
  );
};

export default ReportsListScreen;
