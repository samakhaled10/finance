import Dashboard from '../Components/Dashboard';

export default function StudentDashboard() {
  return (
    <Dashboard role="student" />
  );
}
// import React from 'react';
// import TransactionList from '../Components/TransactionList';
// import Reports from '../Components/Reports';

// export default function StudentDashboard() {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl mb-6">Student Dashboard</h1>
      
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">My Transactions</h2>
//         <TransactionList />  {/* عرض معاملات الطالب */}
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Reports</h2>
//         <Reports />  {/* عرض التقارير وزر التحميل */}
//       </section>
//     </div>
//   )};
