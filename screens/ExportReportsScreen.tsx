
import React, { useState } from 'react';

interface ExportReportsScreenProps {
  onBack: () => void;
}

const ExportReportsScreen: React.FC<ExportReportsScreenProps> = ({ onBack }) => {
  const [format, setFormat] = useState('PDF');
  const [selectedReports, setSelectedReports] = useState<string[]>(['1', '2']);

  const reports = [
    { id: '1', title: '2023 Annual Report', details: 'Ga Presbytery • Dec 31, 2023', icon: 'folder_open', color: 'yellow' },
    { id: '2', title: 'Q3 Financial Report', details: 'Osu District • Oct 15, 2023', icon: 'account_balance', color: 'blue' },
    { id: '3', title: 'Youth Week Report', details: 'Adabraka Branch • Mar 20, 2023', icon: 'event_note', color: 'gray' },
    { id: '4', title: 'Evangelism Outreach', details: 'Tema North District • Feb 12, 2023', icon: 'event_note', color: 'gray' },
  ];

  const toggleReport = (id: string) => {
    setSelectedReports(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display h-screen flex flex-col overflow-hidden text-[#0d121b] dark:text-white">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between flex-none z-10">
        <button 
          onClick={onBack}
          className="text-[#0d121b] dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
        </button>
        <div className="flex items-center justify-center gap-2 flex-1 pr-10">
          <img alt="YPG Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVvqBK7svLwlL_860cBuiNwRIE9N9MiJ15hoKjXr9yQ4OvtpF43dmPfMB8E-kkHOqLfcZJEzLB6eTG_e_1iCJpe0B-38_acdN6gNDjmI6VEEC0xU9637Fk9tRhOlh58YNZOFaHVJQDGl3sZRjywTEliz6PBJTfueXyeVg6rhBccUwQUqrv5R1tBHhSc0vxeiuwJsFXvKy8fQIWHz1MyvviUmQjwtGu3ajPuV9x5B36IzcaMNYdRMR84urMzaPriAz51aClqvP_cgP2" />
          <h2 className="text-lg font-bold">Export Reports</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32 no-scrollbar">
        <div className="px-4 pt-4">
          <h2 className="text-base font-bold pb-3">Export Format</h2>
          <div className="flex h-12 w-full items-center justify-center rounded-lg bg-[#e7ebf3] dark:bg-gray-800 p-1">
            <button 
              onClick={() => setFormat('PDF')}
              className={`flex-1 h-full rounded-md flex items-center justify-center gap-2 text-sm font-medium transition-all ${format === 'PDF' ? 'bg-primary text-white shadow-sm' : 'text-[#4c669a] dark:text-gray-400'}`}
            >
              <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
              PDF Document
            </button>
            <button 
              onClick={() => setFormat('Word')}
              className={`flex-1 h-full rounded-md flex items-center justify-center gap-2 text-sm font-medium transition-all ${format === 'Word' ? 'bg-primary text-white shadow-sm' : 'text-[#4c669a] dark:text-gray-400'}`}
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              Microsoft Word
            </button>
          </div>
        </div>

        <div className="px-4 mt-6">
          <h2 className="text-base font-bold pb-3">Filter Options</h2>
          <div className="flex gap-3 mb-4">
            <div className="flex flex-col flex-1">
              <span className="text-xs font-semibold uppercase tracking-wider pb-1.5 ml-1 opacity-70">Start Date</span>
              <input type="date" className="w-full rounded-lg bg-white dark:bg-gray-800 border-border-light dark:border-gray-700 h-11 text-sm" defaultValue="2023-01-01" />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-xs font-semibold uppercase tracking-wider pb-1.5 ml-1 opacity-70">End Date</span>
              <input type="date" className="w-full rounded-lg bg-white dark:bg-gray-800 border-border-light dark:border-gray-700 h-11 text-sm" defaultValue="2023-12-31" />
            </div>
          </div>
          <div className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider pb-1.5 ml-1 block opacity-70">Level</span>
            <button className="flex w-full items-center justify-between rounded-lg bg-white dark:bg-gray-800 border border-border-light dark:border-gray-700 p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 rounded-full p-1.5 text-primary">
                  <span className="material-symbols-outlined text-[18px]">domain</span>
                </div>
                <span className="text-sm font-medium">All Districts</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">expand_more</span>
            </button>
          </div>
        </div>

        <div className="px-4 mt-6">
          <div className="flex items-center justify-between pb-3">
            <h2 className="text-base font-bold">Select Reports</h2>
            <button 
              onClick={() => setSelectedReports(selectedReports.length === reports.length ? [] : reports.map(r => r.id))}
              className="text-sm text-primary font-medium"
            >
              {selectedReports.length === reports.length ? 'Deselect All' : 'Select All'}
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {reports.map((r) => (
              <label key={r.id} className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm cursor-pointer hover:border-primary/50 transition-colors">
                <div className={`relative shrink-0 flex items-center justify-center size-10 rounded-lg ${
                  r.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600' :
                  r.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 text-primary' : 'bg-gray-50 dark:bg-gray-700 text-gray-500'
                }`}>
                  <span className="material-symbols-outlined">{r.icon}</span>
                  {r.color === 'yellow' && <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-secondary rounded-full border-2 border-white dark:border-gray-800"></div>}
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="text-sm font-semibold truncate">{r.title}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs truncate">{r.details}</p>
                </div>
                <div className="pt-2">
                  <input 
                    type="checkbox" 
                    checked={selectedReports.includes(r.id)} 
                    onChange={() => toggleReport(r.id)}
                    className="rounded-full border-gray-300 text-primary focus:ring-primary/20 w-5 h-5" 
                  />
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full max-w-md mx-auto bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 p-4 pb-6 flex flex-col gap-2 z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center px-1 mb-2">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Selected Size: approx. 4.2 MB</span>
        </div>
        <button className="flex w-full items-center justify-center rounded-lg bg-primary hover:bg-blue-700 transition-colors text-white h-12 gap-2 shadow-lg shadow-blue-500/20">
          <span className="font-semibold text-base">Export {selectedReports.length} Selected Files</span>
          <span className="material-symbols-outlined text-lg">ios_share</span>
        </button>
      </div>
    </div>
  );
};

export default ExportReportsScreen;
