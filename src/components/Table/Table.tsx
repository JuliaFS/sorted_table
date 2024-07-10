import { useState } from 'react'

import './table.css'

export const Table = ({ rows }) => {
  const [sortedRows, setRows] = useState(rows)

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(rows[0]).map((entry, index) => (
            <th key={index}>{entry}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((entry, columnIndex) => (
              <td key={columnIndex}>{entry}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}