import { useState } from 'react';
import jsPDF from 'jspdf';

export default function StudentReports() {
  const [rewards] = useState([
    { id: 1, title: 'مكافأة التفوق', amount: 500, date: '2024-12-01', reason: 'تفوق أكاديمي' },
    { id: 2, title: 'مكافأة الحضور', amount: 300, date: '2024-12-15', reason: 'حضور مستمر' },
  ]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("تقرير المكافآت الشهرية", 20, 10);

    let yOffset = 20;
    rewards.forEach((reward) => {
      doc.text(`العنوان: ${reward.title}`, 20, yOffset);
      doc.text(`المبلغ: ${reward.amount} جنيه`, 20, yOffset + 10);
      doc.text(`التاريخ: ${reward.date}`, 20, yOffset + 20);
      doc.text(`السبب: ${reward.reason}`, 20, yOffset + 30);
      yOffset += 40;
    });

    doc.save('report.pdf');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">التقارير الشهرية</h1>
      <p className="mb-6">تفاصيل المكافآت التي حصلت عليها هذا الشهر.</p>
      
      <div className="mb-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">العنوان</th>
              <th className="p-3">المبلغ</th>
              <th className="p-3">التاريخ</th>
              <th className="p-3">السبب</th>
            </tr>
          </thead>
          <tbody>
            {rewards.map((reward) => (
              <tr key={reward.id} className="border-b">
                <td className="p-3">{reward.title}</td>
                <td className="p-3 text-green-500">{reward.amount} جنيه</td>
                <td className="p-3">{reward.date}</td>
                <td className="p-3">{reward.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={generatePDF} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        تنزيل التقرير
      </button>
    </div>
  );
}
