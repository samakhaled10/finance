// // import { useState } from 'react';

// // export default function TransactionList() {
// //   const [transactions] = useState([
// //     { id: 1, description: 'Tuition', amount: -500, date: '2024-12-01' },
// //     { id: 2, description: 'Scholarship', amount: 300, date: '2024-11-10' }
// //   ]);

// //   return (
// //     <div className="p-8 bg-white shadow-md rounded-lg">
// //       <h2 className="text-2xl mb-4">Transactions</h2>
// //       {transactions.map((t) => (
// //         <div key={t.id} className="mb-4 p-4 border-b">
// //           <p>{t.description}</p>
// //           <p className={`${t.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
// //             ${t.amount}
// //           </p>
// //           <p>{t.date}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
// import { useState } from 'react';

// export default function TransactionList() {
//   const [transactions] = useState([
//     { id: 1, description: 'Tuition', amount: -500, date: '2024-12-01' },
//     { id: 2, description: 'Scholarship', amount: 300, date: '2024-11-10' }
//   ]);

//   return (
//     <div className="p-8 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl mb-4">Transactions</h2>
//       {transactions.map((t) => (
//         <div key={t.id} className="mb-4 p-4 border-b">
//           <p>{t.description}</p>
//           <p className={`${t.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
//             ${t.amount}
//           </p>
//           <p>{t.date}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
import { useState } from 'react';

export default function TransactionList() {
  // بيانات المعاملات الوهمية
  const [transactions] = useState([
    { id: 1, description: 'Tuition Fee', amount: -500, date: '2024-12-01', type: 'expense' },
    { id: 2, description: 'Scholarship Award', amount: 200, date: '2024-12-10', type: 'income' },
    { id: 3, description: 'Library Fee', amount: -50, date: '2024-11-20', type: 'expense' },
    { id: 4, description: 'Research Grant', amount: 300, date: '2024-11-15', type: 'income' },
  ]);

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Transaction History</h2>
      
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">Description</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Date</th>
            <th className="p-3">Type</th>
          </tr>
        </thead>
        
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b">
              <td className="p-3">{transaction.description}</td>
              <td className={`p-3 ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                ${Math.abs(transaction.amount)}
              </td>
              <td className="p-3">{transaction.date}</td>
              <td className="p-3 capitalize">{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* إجمالي الرصيد */}
      <div className="mt-6 text-right">
        <h3 className="text-2xl font-bold">
          Total Balance: $
          {
            transactions.reduce((total, t) => total + t.amount, 0)
          }
        </h3>
      </div>
    </div>
  );
}

