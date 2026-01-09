
import React, { useState } from 'react';
import { View, UserContext, Report } from './types';
import LoginScreen from './screens/LoginScreen';
import SetupContextScreen from './screens/SetupContextScreen';
import DashboardScreen from './screens/DashboardScreen';
import ReportsListScreen from './screens/ReportsListScreen';
import CreateReportScreen from './screens/CreateReportScreen';
import ArchivedReportsScreen from './screens/ArchivedReportsScreen';
import ExportReportsScreen from './screens/ExportReportsScreen';
import ReportViewerScreen from './screens/ReportViewerScreen';
import ProfileScreen from './screens/ProfileScreen';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('LOGIN');
  const [user, setUser] = useState<UserContext | null>(null);
  const [activeReport, setActiveReport] = useState<Report | null>(null);

  const handleLogin = () => {
    setCurrentView('SETUP');
  };

  const handleSetupComplete = (context: UserContext) => {
    setUser(context);
    setCurrentView('DASHBOARD');
  };

  const navigateTo = (view: View) => {
    setCurrentView(view);
  };

  const handleReportSubmit = (report: Report) => {
    setActiveReport(report);
    setCurrentView('REPORT_VIEWER');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('LOGIN');
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative bg-background-light dark:bg-background-dark shadow-xl">
      {currentView === 'LOGIN' && <LoginScreen onLogin={handleLogin} />}
      {currentView === 'SETUP' && <SetupContextScreen onComplete={handleSetupComplete} onBack={() => setCurrentView('LOGIN')} />}
      {currentView === 'DASHBOARD' && (
        <DashboardScreen 
          user={user} 
          onNavigate={navigateTo} 
          onCreateNew={() => navigateTo('CREATE')}
        />
      )}
      {currentView === 'ALL_REPORTS' && (
        <ReportsListScreen 
          onBack={() => navigateTo('DASHBOARD')} 
          onNavigate={navigateTo}
        />
      )}
      {currentView === 'CREATE' && (
        <CreateReportScreen 
          onBack={() => navigateTo('DASHBOARD')}
          onSubmit={handleReportSubmit}
        />
      )}
      {currentView === 'REPORT_VIEWER' && activeReport && (
        <ReportViewerScreen 
          report={activeReport} 
          onBack={() => navigateTo('ALL_REPORTS')} 
        />
      )}
      {currentView === 'ARCHIVED' && (
        <ArchivedReportsScreen 
          onBack={() => navigateTo('DASHBOARD')}
          onNavigate={navigateTo}
        />
      )}
      {currentView === 'EXPORT' && (
        <ExportReportsScreen 
          onBack={() => navigateTo('ARCHIVED')}
        />
      )}
      {currentView === 'PROFILE' && (
        <ProfileScreen 
          user={user}
          onBack={() => navigateTo('DASHBOARD')}
          onLogout={handleLogout}
          onNavigate={navigateTo}
        />
      )}
    </div>
  );
};

export default App;
