import React from "react";

function UserTable() {
  const onEditClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Edit");
  };

  const onDeleteClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Delete");
  };

  return (
    <div className="py-8">
      <table className="table-fixed w-full text-left">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="text-sm text-gray-600 font-semibold uppercase tracking-wide p-2">
              Name
            </th>
            <th className="text-sm text-gray-600 font-semibold uppercase tracking-wide p-2">
              Email
            </th>
            <th className="text-sm text-gray-600 font-semibold uppercase tracking-wide p-2">
              Last Logged In
            </th>
            <th className="text-sm text-gray-600 font-semibold uppercase tracking-wide p-2">
              Role
            </th>
            <th className="text-sm text-gray-600 font-semibold uppercase tracking-wide p-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-[1px] border-gray-300">
            <td className="text-sm text-gray-700 p-2">Jose Manalo</td>
            <td className="text-sm text-gray-700 p-2">jm@aol.com</td>
            <td className="text-sm text-gray-700 p-2">12/04/2023</td>
            <td className="text-sm text-gray-700 p-2">Admin</td>
            <td className="flex flex-row items-center justify-start space-x-2 py-2">
              <button
                onClick={onEditClick}
                className="w-24 bg-green-600 hover:bg-green-800 text-sm text-white py-2 px-4 rounded-full transition-colors cursor-pointer"
                type="button"
              >
                Edit
              </button>
              <button
                onClick={onDeleteClick}
                className="w-24 bg-red-600 hover:bg-red-800 text-sm text-white py-2 px-4 rounded-full transition-colors cursor-pointer"
                type="button"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b-[1px] border-gray-300">
            <td className="text-sm text-gray-700 p-2">Jane Doe</td>
            <td className="text-sm text-gray-700 p-2">jd@gmail.com</td>
            <td className="text-sm text-gray-700 p-2">12/09/2023</td>
            <td className="text-sm text-gray-700 p-2">User</td>
            <td className="flex flex-row items-center justify-start space-x-2 py-2">
              <button
                onClick={onEditClick}
                className="w-24 bg-green-600 hover:bg-green-800 text-sm text-white py-2 px-4 rounded-full transition-colors cursor-pointer"
                type="button"
              >
                Edit
              </button>
              <button
                onClick={onDeleteClick}
                className="w-24 bg-red-600 hover:bg-red-800 text-sm text-white py-2 px-4 rounded-full transition-colors cursor-pointer"
                type="button"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b-[1px] border-gray-300">
            <td className="text-sm text-gray-700 p-2">Chris Jones</td>
            <td className="text-sm text-gray-700 p-2">cj@yahoo.com</td>
            <td className="text-sm text-gray-700 p-2">12/14/2023</td>
            <td className="text-sm text-gray-700 p-2">User</td>
            <td className="flex flex-row items-center justify-start space-x-2 py-2">
              <button
                onClick={onEditClick}
                className="w-24 bg-green-600 hover:bg-green-800 text-sm text-white py-2 px-4 rounded-full transition-colors cursor-pointer"
                type="button"
              >
                Edit
              </button>
              <button
                onClick={onDeleteClick}
                className="w-24 bg-red-600 hover:bg-red-800 text-sm text-white py-2 px-4 rounded-full transition-colors cursor-pointer"
                type="button"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
