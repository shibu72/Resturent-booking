import React from "react";
export default function OpeningHours() {
    const hours = [
      { day: "Saturday", open: "10.00–12.00 PM", close: "10.00–12.00 PM" },
      { day: "Sunday", open: "11.00–3.00 AM", close: "11.00–3.00 AM" },
      { day: "Monday", open: "10.00–12.00 PM", close: "10.00–12.00 PM" },
      { day: "Tuesday", open: "11.00–3.00 AM", close: "11.00–3.00 AM" },
      { day: "Wednesday", open: "11.00–3.00 AM", close: "11.00–3.00 AM" },
      { day: "Thursday", open: "11.00–3.00 AM", close: "11.00–3.00 AM" },
      { day: "Friday", open: "11.00–3.00 AM", close: "11.00–3.00 AM" },
    ];
  
    return (
      <div className="w-[30rem] mx-auto bg-white p-4 rounded-lg">
        <h2 className="text-center text-2xl font-normal mb-4">Opening Hours</h2>
        <div className="border-t border-green-500 mb-4"></div>
        <table className="w-full text-xl font-normal text-left text-gray-800">
          <thead>
            <tr className="text-gray-900">
              <th className="py-2">Day</th>
              <th className="py-2 font-semibold">Open</th>
              <th className="py-2 font-semibold">Close</th>
            </tr>
          </thead>
          <tbody>
            {hours.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{item.day}</td>
                <td className="py-2">{item.open}</td>
                <td className="py-2">{item.close}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  