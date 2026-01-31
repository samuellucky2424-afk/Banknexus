import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

// Lazy load components
const LandingPage = lazy(() => import('./pages/LandingPage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const SignUpPage = lazy(() => import('./pages/auth/SignUpPage'));
const UserDashboard = lazy(() => import('./pages/dashboard/UserDashboard'));
const AdminDashboard = lazy(() => import('./pages/dashboard/AdminDashboard'));
const SelectRecipient = lazy(() => import('./pages/transfer/SelectRecipient'));
const TransferType = lazy(() => import('./pages/transfer/TransferType'));
const LocalTransfer = lazy(() => import('./pages/transfer/LocalTransfer'));
const InternationalTransfer = lazy(() => import('./pages/transfer/InternationalTransfer'));
const EnterAmount = lazy(() => import('./pages/transfer/EnterAmount'));
const ReviewTransfer = lazy(() => import('./pages/transfer/ReviewTransfer'));
const ReviewTransferConfirm = lazy(() => import('./pages/transfer/ReviewTransferConfirm'));
const SecurityVerification = lazy(() => import('./pages/transfer/SecurityVerification'));
const TransferSuccess = lazy(() => import('./pages/transfer/TransferSuccess'));
const Receipt = lazy(() => import('./pages/transfer/Receipt'));
const PayBills = lazy(() => import('./pages/bills/PayBills'));
const MobileTopUp = lazy(() => import('./pages/bills/MobileTopUp'));
const MoreServices = lazy(() => import('./pages/services/MoreServices'));
const SavedRecipients = lazy(() => import('./pages/recipients/SavedRecipients'));
const RecipientDetails = lazy(() => import('./pages/recipients/RecipientDetails'));

// New Feature Pages
const ScanToPay = lazy(() => import('./pages/scan/ScanToPay'));
const Savings = lazy(() => import('./pages/savings/Savings'));
const Cards = lazy(() => import('./pages/cards/Cards'));
const Activity = lazy(() => import('./pages/activity/Activity'));
const Hub = lazy(() => import('./pages/hub/Hub'));
const Settings = lazy(() => import('./pages/settings/Settings'));
const Notifications = lazy(() => import('./pages/notifications/Notifications'));

// Settings Sub-Pages
const PersonalSettings = lazy(() => import('./pages/settings/PersonalSettings'));
const SecuritySettings = lazy(() => import('./pages/settings/SecuritySettings'));
const GeneralSettings = lazy(() => import('./pages/settings/GeneralSettings'));

// Simple Loading Spinner
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Simple scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            
            {/* Dashboard */}
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/banknexus-login" element={<AdminDashboard />} />
            <Route path="/notifications" element={<Notifications />} />
            
            {/* Main Features */}
            <Route path="/scan" element={<ScanToPay />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/hub" element={<Hub />} />
            
            {/* Settings Flow */}
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/personal" element={<PersonalSettings />} />
            <Route path="/settings/security" element={<SecuritySettings />} />
            <Route path="/settings/general" element={<GeneralSettings />} />

            {/* Transfer Flow */}
            <Route path="/transfer/select" element={<SelectRecipient />} />
            <Route path="/transfer/type" element={<TransferType />} />
            <Route path="/transfer/local" element={<LocalTransfer />} />
            <Route path="/transfer/international" element={<InternationalTransfer />} />
            <Route path="/transfer/amount" element={<EnterAmount />} />
            <Route path="/transfer/review-initial" element={<ReviewTransfer />} />
            <Route path="/transfer/review-confirm" element={<ReviewTransferConfirm />} />
            <Route path="/transfer/verify" element={<SecurityVerification />} />
            <Route path="/transfer/success" element={<TransferSuccess />} />
            <Route path="/transfer/receipt" element={<Receipt />} />
            
            {/* Features */}
            <Route path="/bills" element={<PayBills />} />
            <Route path="/topup" element={<MobileTopUp />} />
            <Route path="/services" element={<MoreServices />} />
            
            {/* Recipients */}
            <Route path="/recipients" element={<SavedRecipients />} />
            <Route path="/recipients/details" element={<RecipientDetails />} />
          </Routes>
        </Suspense>
      </div>
    </HashRouter>
  );
};

export default App;