// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import AdminDashboard from './pages/AdminDashboard';
// import StaffDashboard from './pages/StaffDashboard';
// import StudentDashboard from './pages/StudentDashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/staff" element={<StaffDashboard />} />
//         <Route path="/student" element={<StudentDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import StaffDashboard from './pages/StaffDashboard';
import StudentDashboard from './pages/StudentDashboard';
import StudentReports from './pages/StudentReports';
import TransactionList from './Components/TransactionList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/reports" element={<StudentReports />} />
        <Route path="/student/transactions" element={<TransactionList/>} />

      </Routes>
    </Router>
  );
}

export default App;
