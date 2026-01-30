import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import UserDashboard from './pages/dashboard/UserDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import SelectRecipient from './pages/transfer/SelectRecipient';
import TransferType from './pages/transfer/TransferType';
import LocalTransfer from './pages/transfer/LocalTransfer';
import InternationalTransfer from './pages/transfer/InternationalTransfer';
import EnterAmount from './pages/transfer/EnterAmount';
import ReviewTransfer from './pages/transfer/ReviewTransfer';
import ReviewTransferConfirm from './pages/transfer/ReviewTransferConfirm';
import SecurityVerification from './pages/transfer/SecurityVerification';
import TransferSuccess from './pages/transfer/TransferSuccess';
import Receipt from './pages/transfer/Receipt';
import PayBills from './pages/bills/PayBills';
import MobileTopUp from './pages/bills/MobileTopUp';
import MoreServices from './pages/services/MoreServices';
import SavedRecipients from './pages/recipients/SavedRecipients';
import RecipientDetails from './pages/recipients/RecipientDetails';

// New Feature Pages
import ScanToPay from './pages/scan/ScanToPay';
import Savings from './pages/savings/Savings';
import Cards from './pages/cards/Cards';
import Activity from './pages/activity/Activity';
import Hub from './pages/hub/Hub';
import Settings from './pages/settings/Settings';
import Notifications from './pages/notifications/Notifications';

// Settings Sub-Pages
import PersonalSettings from './pages/settings/PersonalSettings';
import SecuritySettings from './pages/settings/SecuritySettings';
import GeneralSettings from './pages/settings/GeneralSettings';

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
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          
          {/* Dashboard */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
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
      </div>
    </HashRouter>
  );
};

export default App;