
import React, { useState, useRef, useEffect } from 'react';
import { UserContext } from '../types';

interface SetupContextScreenProps {
  onComplete: (context: UserContext) => void;
  onBack: () => void;
}

const SearchableInput = ({ 
  label, 
  placeholder, 
  options, 
  value, 
  onChange, 
  icon 
}: { 
  label: string; 
  placeholder: string; 
  options: string[]; 
  value: string; 
  onChange: (val: string) => void;
  icon: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(value);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        // Clean up the search term: if it matches an option exactly (case insensitive), snap to it
        const exactMatch = options.find(opt => opt.toLowerCase() === searchTerm.toLowerCase());
        if (exactMatch) {
          onChange(exactMatch);
          setSearchTerm(exactMatch);
        } else if (searchTerm.trim() !== '') {
          // If no match but user typed something, allow the custom value
          onChange(searchTerm);
        } else {
          // If empty, revert to original value
          setSearchTerm(value);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [value, searchTerm, options, onChange]);

  const filteredOptions = options.filter(opt => 
    opt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full relative" ref={wrapperRef}>
      <p className="text-text-main-light dark:text-text-main-dark text-sm font-medium pb-2 ml-1">{label}</p>
      <div className="relative flex items-center">
        <span className="material-symbols-outlined absolute left-4 text-slate-400 text-[20px]">{icon}</span>
        <input
          type="text"
          value={searchTerm}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            const val = e.target.value;
            setSearchTerm(val);
            setIsOpen(true);
            // Allow immediate state update in parent for custom typing
            onChange(val);
          }}
          placeholder={placeholder}
          className="form-input flex w-full rounded-xl text-text-main-light dark:text-text-main-dark border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 pl-11 pr-4 text-base transition-all"
        />
        <span className={`material-symbols-outlined absolute right-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto no-scrollbar py-2">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <button
                key={opt}
                onMouseDown={() => {
                  onChange(opt);
                  setSearchTerm(opt);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-5 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium transition-colors ${value === opt ? 'text-primary bg-blue-50/50 dark:bg-blue-900/20' : 'text-slate-700 dark:text-slate-300'}`}
              >
                {opt}
              </button>
            ))
          ) : (
            <div className="px-5 py-3 text-sm text-slate-400 italic">No matches found. Press enter or confirm to use custom entry.</div>
          )}
        </div>
      )}
    </div>
  );
};

const SetupContextScreen: React.FC<SetupContextScreenProps> = ({ onComplete, onBack }) => {
  const [presbytery, setPresbytery] = useState('');
  const [district, setDistrict] = useState('');
  const [role, setRole] = useState('');
  const [year, setYear] = useState('2024');
  const [term, setTerm] = useState('Term 1');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const presbyteries = [
    "Akyem Abuakwa Presbytery",
    "Akuapem Presbytery",
    "Asante Presbytery",
    "Brong Ahafo Presbytery",
    "Dangbe Town Presbytery",
    "Europe Presbytery",
    "Ga Presbytery",
    "Ga West Presbytery",
    "Northern Presbytery",
    "Volta Presbytery",
    "Western Presbytery"
  ].sort();

  const districts = [
    "Abokobi", "Accra Central", "Accra New Town", "Adabraka", "Adentan",
    "Ashaiman", "Ashaiman North", "Ashaley Botwe", "Atomic Hills",
    "Dzorwulu", "Fafraha", "Ga Mission Field", "Haatso", "Kajaanor",
    "Kutunse", "La", "Madina", "Nima", "Nungua", "Osu", "Oyibi", "Sakumono",
    "Sebrepor", "Taifa", "Tema Community One", "Tema Community Two",
    "Tema Manhean", "Tema North", "Teshie"
  ].sort();

  const roles = [
    "President/Superintendent",
    "Secretary",
    "Finance",
    "Treasurer"
  ];

  const years = Array.from({ length: 2027 - 2012 + 1 }, (_, i) => (2027 - i).toString());
  const terms = ["Term 1", "Term 2", "Term 3"];

  const handleConfirm = () => {
    if (presbytery.trim() && district.trim() && role.trim()) {
      setIsSubmitting(true);
      setTimeout(() => {
        onComplete({
          name: 'Fremsss',
          role,
          presbytery,
          district,
          year,
          term,
        });
      }, 300);
    } else {
      alert("Please ensure Presbytery, District, and Role are entered or selected.");
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display antialiased">
      <div className="sticky top-0 z-10 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-transparent dark:border-border-dark">
        <button 
          onClick={onBack}
          className="text-text-main-light dark:text-text-main-dark flex size-12 shrink-0 items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col items-center flex-1 pr-12">
          <img alt="YPG Logo" className="h-8 w-auto mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0jTAVJSUEku5Mn8jrKpnBnQa-RUNKC0pdFx0o-_XXh_g2md5qNz2lVB6emPQF56_iHBQlckX1MKyxABV_LU8Yma_3k-LtoQ7lchJE5kA8g0iTtexu3skhc9BOFZJXt-MHmzLEKHQI7mTKLcIUFGqPty6QoJxqUh7Rcf2I5EDBwIb_ebSpVb2runxcMnTutJfra7iH6btHeRuOASTvr6WqW9DhcnZaXXc3GE1IYVGEPJ44Grs1JUHBUt6PzAS_3MdImyaczBXXKPLS" />
          <h2 className="text-text-main-light dark:text-text-main-dark text-sm font-bold leading-tight opacity-80">
            Setup Reporting Context
          </h2>
        </div>
      </div>

      <div className="flex w-full flex-row items-center justify-center gap-3 py-4">
        <div className="h-2 w-8 rounded-full bg-primary shadow-sm shadow-primary/30"></div>
        <div className="h-2 w-2 rounded-full bg-border-light dark:bg-border-dark"></div>
        <div className="h-2 w-2 rounded-full bg-border-light dark:bg-border-dark"></div>
      </div>

      <div className="flex-1 px-4 pb-32 overflow-y-auto no-scrollbar">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 mb-4 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
            <span className="material-symbols-outlined text-primary text-3xl">assignment_ind</span>
          </div>
          <h3 className="text-text-main-light dark:text-text-main-dark tracking-tight text-2xl font-bold text-center pb-2">
            Configure Your Session
          </h3>
          <p className="text-text-sub-light dark:text-text-sub-dark text-base font-normal leading-normal pb-6 text-center max-w-xs mx-auto">
            Search and select your jurisdiction or type in a new one if not listed.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-[480px] mx-auto">
          <SearchableInput 
            label="Presbytery" 
            placeholder="Type to search or enter presbytery..." 
            options={presbyteries} 
            value={presbytery} 
            onChange={setPresbytery} 
            icon="location_city" 
          />

          <SearchableInput 
            label="District / Local Branch" 
            placeholder="Type to search or enter district (e.g. Haatso)..." 
            options={districts} 
            value={district} 
            onChange={setDistrict} 
            icon="map" 
          />

          <SearchableInput 
            label="Office Held" 
            placeholder="Type to search or enter role..." 
            options={roles} 
            value={role} 
            onChange={setRole} 
            icon="military_tech" 
          />

          <div className="flex gap-4 w-full">
            <label className="flex flex-col flex-1">
              <p className="text-text-main-light dark:text-text-main-dark text-sm font-medium pb-2 ml-1">Year</p>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-slate-400 text-[20px]">calendar_today</span>
                <select 
                  value={year} 
                  onChange={(e) => setYear(e.target.value)} 
                  className="form-select w-full rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark h-14 pl-10 focus:ring-2 focus:ring-primary/20 transition-all text-base"
                >
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
            </label>
            <label className="flex flex-col flex-1">
              <p className="text-text-main-light dark:text-text-main-dark text-sm font-medium pb-2 ml-1">Term</p>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-slate-400 text-[20px]">schedule</span>
                <select 
                  value={term} 
                  onChange={(e) => setTerm(e.target.value)} 
                  className="form-select w-full rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark h-14 pl-10 focus:ring-2 focus:ring-primary/20 transition-all text-base"
                >
                  {terms.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </label>
          </div>

          <div className="mt-2 flex gap-3 p-4 rounded-xl bg-blue-50 dark:bg-primary/5 border border-blue-100 dark:border-primary/10">
            <span className="material-symbols-outlined text-primary shrink-0">info</span>
            <p className="text-xs text-text-sub-light dark:text-slate-400 leading-relaxed">
              Selection allows the system to route your reports correctly. If your district is not listed, simply type the name into the field.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full max-w-md bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-border-light dark:border-border-dark p-4 z-20 pb-8 mx-auto">
        <button 
          onClick={handleConfirm}
          disabled={isSubmitting}
          className={`w-full h-14 bg-primary hover:bg-blue-700 active:scale-[0.98] text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-80' : ''}`}
        >
          {isSubmitting ? (
             <div className="flex items-center gap-2">
               <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
               <span>Setting up...</span>
             </div>
          ) : (
            <>
              <span>Confirm & Proceed</span>
              <span className="material-symbols-outlined text-[22px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SetupContextScreen;
