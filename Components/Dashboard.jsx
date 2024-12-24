// import Sidebar from './Sidebar';

// export default function Dashboard({ role }) {
//   return (
//     <div className="flex">
//       <Sidebar role={role} />
//       <div className="flex-1 p-8">
//         <h1 className="text-4xl">Welcome to {role} Dashboard</h1>
//       </div>
//     </div>
//   );
// }
import Sidebar from './Sidebar';

export default function Dashboard({ role }) {
  return (
    <div className="flex">
      {/* تمرير الـ role إلى Sidebar */}
      <Sidebar role={role} />
      
      <div className="flex-1 p-8">
        <h1 className="text-4xl">Welcome to {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h1>
        {/* يمكنك إضافة مكونات أخرى حسب الحاجة */}
        {/* مثال: عرض رسالة ترحيب أو عرض بيانات ديناميكية بحسب الدور */}
        {role === 'student' && (
          <p>Here you can view your rewards and transaction history.</p>
        )}
        {role === 'admin' && (
          <p>Admin Dashboard: Manage users and transactions.</p>
        )}
        {role === 'staff' && (
          <p>Staff Dashboard: View and manage tasks.</p>
        )}
      </div>
    </div>
  );
}
