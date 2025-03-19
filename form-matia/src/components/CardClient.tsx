import { Client } from "./FormClient";

type Props = {
  clients: Client[];
};
function CardClient({ clients }: Props) {
  return (
    <div>
      {clients.map((client, index) => (
        <div
          key={index}
          className="block max-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800
                dark:border-gray-700 dark:hover:bg-gray-700 mt-2"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-700">
            {client.name} {client.surname}
          </h5>
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
