import { useState } from "react";

import "./table.css";
import { capitalize } from "../../utils";

import { Data } from '../../types'

export type TableProps = {
  rows: Data
}

export const Table = ({ rows } : TableProps) => {
  const [sortedRows, setRows] = useState(rows);

  const formatEntry = (entry: string | number | boolean) => {
    if (typeof entry === "boolean") {
      return entry ? "✅" : "❌";
    }

    return entry;
  };

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            {Object.keys(rows[0]).map((entry, index) => (
              <th key={index}>{capitalize(entry)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((entry, columnIndex) => (
                <td key={columnIndex}>{formatEntry(entry)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
