import React from 'react';
import { Search } from 'lucide-react';

type DataRow = Record<string, string | number>;

interface DataTableProps {
  headers: readonly string[];
  rows: DataRow[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  stickyColumns?: number;
}

export function DataTable({ headers, rows, searchTerm, onSearchChange, stickyColumns = 1 }: DataTableProps) {
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredRows = normalizedSearch
    ? rows.filter((row) =>
        headers.some((header) => String(row[header] ?? '').toLowerCase().includes(normalizedSearch)),
      )
    : rows;

  return (
    <div className="bg-ocean-950/80 border border-ocean-800 rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-4 border-b border-ocean-800 bg-ocean-900/40 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-400">
          Showing <span className="text-slate-200 font-medium">{filteredRows.length}</span> of{' '}
          <span className="text-slate-200 font-medium">{rows.length}</span> records
        </div>
        <label className="relative block w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search table"
            className="w-full rounded-lg border border-ocean-800 bg-ocean-950 py-2 pl-9 pr-3 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-vivid/50"
          />
        </label>
      </div>

      <div className="max-h-[70vh] overflow-auto">
        <table className="w-full min-w-max text-left text-sm text-slate-300">
          <thead className="sticky top-0 z-20 border-b border-ocean-800 bg-ocean-950 text-xs uppercase tracking-wider text-slate-500">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={header || index}
                  className={`px-4 py-3 font-medium ${
                    index < stickyColumns ? 'sticky left-0 z-30 bg-ocean-950 text-slate-300' : ''
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ocean-800/50">
            {filteredRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-ocean-900/40">
                {headers.map((header, columnIndex) => (
                  <td
                    key={`${rowIndex}-${header || columnIndex}`}
                    className={`px-4 py-3 align-top ${
                      columnIndex < stickyColumns
                        ? 'sticky left-0 z-10 max-w-xs bg-ocean-950 font-medium text-slate-200'
                        : 'text-slate-400'
                    }`}
                  >
                    {String(row[header] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
