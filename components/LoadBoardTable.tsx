import React from "react";

function LoadBoardTable() {
  return (
    <div className="py-8">
      <table className="table-fixed w-full text-left">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="text-sm text-gray-600 font-semibold uppercase tracking-wide p-2">
              Serial No
            </th>
            <th className="text-sm text-gray-600 font-semibold uppercase tracking-wide p-2">
              Status
            </th>
            <th className="text-sm text-gray-600 font-semibold uppercase tracking-wide p-2">
              Location
            </th>
            <th className="text-sm text-gray-600 font-semibold uppercase tracking-wide p-2">
              Type
            </th>
            <th className="text-sm text-gray-600 font-semibold uppercase tracking-wide p-2">
              Added By
            </th>
            <th className="text-sm text-gray-600 font-semibold uppercase tracking-wide p-2">
              Added Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-[1px] border-gray-300">
            <td className="text-sm text-gray-700 p-2">LB01</td>
            <td className="text-sm text-gray-700 p-2">OUT</td>
            <td className="text-sm text-gray-700 p-2">MC09</td>
            <td className="text-sm text-gray-700 p-2">X4</td>
            <td className="text-sm text-gray-700 p-2">Jose Manalo</td>
            <td className="text-sm text-gray-700 p-2">12/04/2023</td>
          </tr>
          <tr className="border-b-[1px] border-gray-300">
            <td className="text-sm text-gray-700 p-2">LB02</td>
            <td className="text-sm text-gray-700 p-2">IN</td>
            <td className="text-sm text-gray-700 p-2">-</td>
            <td className="text-sm text-gray-700 p-2">X2</td>
            <td className="text-sm text-gray-700 p-2">Jane Doe</td>
            <td className="text-sm text-gray-700 p-2">12/09/2023</td>
          </tr>
          <tr className="border-b-[1px] border-gray-300">
            <td className="text-sm text-gray-700 p-2">LB03</td>
            <td className="text-sm text-gray-700 p-2">OUT</td>
            <td className="text-sm text-gray-700 p-2">MC02</td>
            <td className="text-sm text-gray-700 p-2">X2</td>
            <td className="text-sm text-gray-700 p-2">Jane Doe</td>
            <td className="text-sm text-gray-700 p-2">12/09/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LoadBoardTable;
