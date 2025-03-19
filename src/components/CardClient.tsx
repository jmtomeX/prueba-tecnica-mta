import { Client } from "./FormClient";
type Props = {
  clients: Client[];
  handleDeleteClient: (email: string) => void;
};

function CardClient({ clients, handleDeleteClient }: Props) {
  return (
    <div>
      {clients.map((client, index) => (
        <div
          key={index}
          className="block max-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 mt-2"
        >
          <div className="flex justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-700">
              {client.name} {client.surname}
            </h5>
            <button
              title="Eliminar cliente"
              className="btn-edit hover:opacity-40 cursor-pointer"
              onClick={() => handleDeleteClient(client.email)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="pink"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
            </button>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400 flex justify-around">
            <span> {client.telefono}</span>
            <span> {client.email}</span>
          </p>

          <p className="font-light text-gray-700 dark:text-gray-400 flex justify-around">
            <span>
              <span className="text-sm text-pink-700 font-bold">País</span>{" "}
              {client.pais}
            </span>
            <span>
              <span className="text-sm text-pink-700 font-bold">Provincia</span>{" "}
              {client.provincia}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default CardClient;
