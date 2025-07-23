import React from 'react';

export default function Events() {
  const events = [
    { date: '2025-07-16', title: 'Maths Unit Test' },
    { date: '2025-07-16', title: 'PTM Meeting' },
    { date: '2025-07-18', title: 'Science Exhibition' },
  ];

  const grouped = {};

  for (let event of events) {
    if (!grouped[event.date]) {
      grouped[event.date] = [];
    }
    grouped[event.date].push(event.title);
  }

  return (
    <div>
      <h1>Upcoming Events</h1>
      <table className='events'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Events</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(grouped).map(([date, titles], index) => (
            <tr key={index}>
              <td>{date}</td>
              <td>
                <ul>
                  {titles.map((title, idx) => (
                    <li key={idx}>{title}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
