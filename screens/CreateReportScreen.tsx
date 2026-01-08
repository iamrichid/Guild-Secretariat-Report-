
import React, { useState } from 'react';
import { Report } from '../types';

interface CreateReportScreenProps {
  onBack: () => void;
  onSubmit: (report: Report) => void;
}

const CreateReportScreen: React.FC<CreateReportScreenProps> = ({ onBack, onSubmit }) => {
  const [activeKraTab, setActiveKraTab] = useState('AHRM');

  const kraTabs = [
    { id: 'AHRM', label: 'AHRM' },
    { id: 'CLAN', label: 'CLAN' },
    { id: 'ME', label: 'M&E' },
    { id: 'Finance', label: 'Finance' },
    { id: 'ESR', label: 'ESR' },
    { id: 'DSS', label: 'DSS' },
    { id: 'EDUCATION', label: 'EDUCATION' },
  ];

  const getObjectivePlaceholder = (tabId: string) => {
    switch (tabId) {
      case 'CLAN':
        return 'e.g., Building Spirituality among the Youth';
      case 'ME':
        return 'e.g., Strengthening Evangelism and outreach';
      case 'Finance':
        return 'e.g., Strengthening Evangelism and outreach To provide adequate financial support';
      case 'ESR':
        return 'e.g., Interfaith';
      case 'EDUCATION':
        return 'e.g., educational Purposes';
      case 'DSS':
        return 'e.g., healthcare, Keep Fits, others';
      default:
        return 'e.g., Improve record keeping';
    }
  };

  const getFullLabel = (tabId: string) => {
    switch (tabId) {
      case 'AHRM': return 'Admin & HR Management';
      case 'ME': return 'Monitoring & Evaluation';
      case 'CLAN': return 'Christian Life & Nurture';
      case 'ESR': return 'Ecumenical & Social Relations';
      case 'DSS': return 'Development Social Services';
      case 'EDUCATION': return 'Education';
      default: return tabId;
    }
  };

  const handleFinalSubmit = () => {
    // In a real app, we'd gather all the state from inputs
    // For this prototype, we'll create a mock report object
    const newReport: Report = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Q3 Activity Report 2024',
      presbytery: 'Ga Presbytery',
      district: 'Haatso',
      period: 'July - Sept 2024',
      status: 'Submitted',
      date: new Date().toLocaleDateString(),
      content: {
        preamble: "Psalm 121: I lift up my eyes to the mountains—where does my help come from? My help comes from the LORD, the Maker of heaven and earth.",
        kras: [
          {
            id: 'AHRM',
            label: 'Admin & HR Management',
            objective: 'Improve record keeping',
            strategy: 'Digital migration of physical files',
            targets: 'Local branch secretaries',
            results: '15 secretaries trained on the new portal'
          },
          {
            id: 'CLAN',
            label: 'Christian Life & Nurture',
            objective: 'Building Spirituality among the Youth',
            strategy: 'Weekly Bible studies and prayer meetings',
            targets: 'All guild members',
            results: '70% attendance recorded'
          }
        ]
      }
    };
    onSubmit(newReport);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-gray-100 flex flex-col h-screen overflow-hidden">
      <header className="shrink-0 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 z-20">
        <div className="flex items-center px-4 py-3 justify-between">
          <button 
            onClick={onBack}
            className="text-text-main-light dark:text-white flex size-12 shrink-0 items-center justify-start hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center gap-2">
              <img alt="YPG Logo" className="h-6 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrAMDkiozUCSYS8mPz42tCA_mu_YLDCL03GaR_Ai94fPqGI5-gG72r1vuLLnG8dZgIA-8b7t4V_SwYyXHLGFFFSE0iL1uAg-osVzQPaARSOz6NaRfzjmEDGdgpHbpfwIxPvHAoyOEQOntHPkHsnkzRxaeQ_8-QhlBJXd88M-p7TcHNUDgWGF0Zo4HKjCLFYq97CHWHyv-cYfN-v32S7INm-zlKQIir0_uAHaBz0SBVZE8QYSicQHnxz-0fM-KrhJQpzMLPyzB7sG8s" />
              <h2 className="text-text-main-light dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] text-center">New Report</h2>
            </div>
          </div>
          <button className="flex items-center justify-end text-primary font-bold text-sm">
            <span className="material-symbols-outlined mr-1">help</span> Help
          </button>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-2 pb-4 px-4">
          <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
          <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
          <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 pb-48 space-y-6 hide-scrollbar">
        <div className="w-full relative overflow-hidden rounded-xl shadow-sm">
          <div 
            className="bg-cover bg-center flex flex-col items-stretch justify-end pt-24 pb-4 px-4 relative" 
            style={{ backgroundImage: 'linear-gradient(180deg, rgba(19, 91, 236, 0.2) 0%, rgba(16, 22, 34, 0.9) 100%), url("https://picsum.photos/id/201/800/400")' }}
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-secondary text-black uppercase tracking-wider">Auto-Filled</span>
                    <span className="text-gray-300 text-xs font-medium">Q3 2024 Report</span>
                  </div>
                  <h3 className="text-white text-xl font-bold leading-tight mb-1">Guild Secretariat Report</h3>
                  <p className="text-gray-300 text-sm font-medium">Presbyterian Church of Ghana - YPG</p>
                </div>
                <div className="bg-white/10 p-1.5 rounded-lg backdrop-blur-sm border border-white/20 shrink-0">
                  <img alt="YPG Crest" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPSUlakbvb7QMqYGZRd1XoBTtZGRjOU3YcjVfTDmQOEoNXxGn_RKs5WxXKngrupCZbYlRnB9sceguEI5BcUrIgEgyPD2cskV-R-8QbdO5DMMzgd1ee_-xgFxrTwVhzuNpUf-JKmoiXrQnXE-uoWkNf_yPUueHXmpFtfcpZCbdT0EWkUDj2W0SLJpcGoyhzSBWemPNrtoQLWtY-2a7FezF_ItCIf8jwcsK5AU6UddbC0Q8_EyU36ye-JunE_z8ng-2ySoc1g8Xra17X" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-lg">menu_book</span>
              </div>
              <h2 className="text-text-main-light dark:text-white text-lg font-bold">1.0 Preliminaries</h2>
            </div>
            <span className="material-symbols-outlined text-gray-400">expand_less</span>
          </div>
          <div className="p-4 space-y-5">
            <div className="flex flex-col gap-2">
              <label className="text-text-main-light dark:text-gray-300 text-sm font-semibold flex justify-between">
                Preamble (Bible Verse / Hymn)
                <span className="text-xs text-[#4c669a] font-normal">Required</span>
              </label>
              <div className="relative">
                <textarea 
                  className="w-full resize-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-main-light dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary p-3 min-h-[100px] text-base placeholder:text-gray-400" 
                  placeholder="Enter scripture text or hymn lyrics..."
                ></textarea>
                <div className="absolute bottom-2 right-2 text-[10px] text-gray-400">0/500</div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-text-main-light dark:text-gray-300 text-sm font-semibold">Reporting Period</label>
                <div className="flex items-center relative">
                  <span className="absolute left-3 text-gray-400 material-symbols-outlined text-[20px]">calendar_today</span>
                  <input 
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-main-light dark:text-white py-3 pl-10 pr-3 text-base" 
                    type="text" 
                    defaultValue="July - September 2024" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-light dark:bg-surface-dark rounded-xl border-2 border-primary/20 shadow-md overflow-hidden ring-1 ring-primary/10">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700 bg-blue-50/30 dark:bg-blue-900/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-white">
                <span className="material-symbols-outlined text-lg">flag</span>
              </div>
              <h2 className="text-text-main-light dark:text-white text-lg font-bold">2.0 Key Result Areas</h2>
            </div>
            <span className="material-symbols-outlined text-primary">expand_more</span>
          </div>
          <div className="p-0">
            <div className="flex overflow-x-auto gap-2 p-4 pb-2 hide-scrollbar border-b border-gray-100 dark:border-gray-800">
              {kraTabs.map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveKraTab(tab.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeKraTab === tab.id 
                    ? 'bg-primary text-white font-semibold shadow-sm ring-2 ring-primary ring-offset-1 dark:ring-offset-gray-900' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="p-4 space-y-4 bg-gray-50/50 dark:bg-gray-800/20">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">
                  {getFullLabel(activeKraTab)}
                </h4>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full dark:bg-green-900/30 dark:text-green-400">In Progress</span>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-text-main-light dark:text-gray-300 text-sm font-medium">Objective</label>
                  <input 
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-main-light dark:text-white p-3 text-sm focus:border-primary focus:ring-0" 
                    placeholder={getObjectivePlaceholder(activeKraTab)} 
                    type="text" 
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-text-main-light dark:text-gray-300 text-sm font-medium">Strategy / Activity</label>
                  <textarea className="w-full resize-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-main-light dark:text-white p-3 min-h-[80px] text-sm focus:border-primary focus:ring-0" placeholder="Describe the strategy implemented..." />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-text-main-light dark:text-gray-300 text-sm font-medium">Targets</label>
                  <textarea className="w-full resize-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-main-light dark:text-white p-3 min-h-[60px] text-sm focus:border-primary focus:ring-0" placeholder="Specify the audience you want to target..." />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-text-main-light dark:text-gray-300 text-sm font-medium">Results</label>
                  <textarea className="w-full resize-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-main-light dark:text-white p-3 min-h-[80px] text-sm focus:border-primary focus:ring-0" placeholder="Outline the programs organized and the outcomes achieved..." />
                </div>
                <button className="w-full py-2 flex items-center justify-center gap-2 text-primary text-sm font-semibold hover:bg-primary/5 rounded-lg border border-dashed border-primary/40 transition-colors">
                  <span className="material-symbols-outlined text-lg">add_circle</span>
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-[72px] left-0 w-full max-w-md mx-auto p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pointer-events-none z-30">
        <div className="flex gap-3 pointer-events-auto">
          <button 
            onClick={onBack}
            className="flex-1 py-3.5 px-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-white font-bold text-base shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">save</span>
            Draft
          </button>
          <button 
            onClick={handleFinalSubmit}
            className="flex-[2] py-3.5 px-4 rounded-xl bg-primary text-white font-bold text-base shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
          >
            Submit Report
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </div>
      </div>
      
      <nav className="fixed bottom-0 w-full max-w-md mx-auto bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pb-safe z-40">
        <div className="flex justify-around items-center h-16">
          <button onClick={onBack} className="flex flex-col items-center text-[#4c669a] hover:text-primary"><span className="material-symbols-outlined">home</span><span className="text-[10px]">Home</span></button>
          <button className="flex flex-col items-center text-primary"><span className="material-symbols-outlined filled">description</span><span className="text-[10px] font-bold">Reports</span></button>
          <button className="flex flex-col items-center text-[#4c669a]"><span className="material-symbols-outlined">add_circle</span><span className="text-[10px]">New</span></button>
          <button className="flex flex-col items-center text-[#4c669a]"><span className="material-symbols-outlined">group</span><span className="text-[10px]">Members</span></button>
          <button className="flex flex-col items-center text-[#4c669a]"><span className="material-symbols-outlined">settings</span><span className="text-[10px]">Settings</span></button>
        </div>
      </nav>
    </div>
  );
};

export default CreateReportScreen;
