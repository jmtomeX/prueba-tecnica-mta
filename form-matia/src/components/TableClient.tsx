import { Client } from "./FormClient";

type Props = {
  clients: Client[];
};
function ClientTable({ clients }: Props) {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-pink-900 to-pink-500 px-6 p-4">
        <h2 className="text-2xl font-bold text-white">Contactos añadidos</h2>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Apellido
            </th>
            <th scope="col" className="px-6 py-3">
              Teléfono
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Pais
            </th>
            <th scope="col" className="px-6 py-3">
              Provicia
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {client.name}
              </th>
              <td className="px-6 py-4">{client.surname}</td>
              <td className="px-6 py-4">{client.telefono}</td>
              <td className="px-6 py-4">{client.email}</td>
              <td className="px-6 py-4">{client.pais}</td>
              <td className="px-6 py-4">{client.provincia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;
