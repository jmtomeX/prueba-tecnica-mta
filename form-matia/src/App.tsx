import { useEffect, useState } from "react";
import TableClient from "./components/TableClient";
import FormClient, { Client } from "./components/FormClient";
import CardClient from "./components/CardClient";
import { useScreenSize } from "./hooks/useScreenSize";

const App = () => {
  const [clients, setClients] = useState<Client[]>([]);

  const screenSize = useScreenSize(); // Obtiene el tamaño de la pantalla


  //  Recuperar clientes guardados al cargar la app
  useEffect(() => {
    try {
      const clientsStorage = localStorage.getItem("clients");
      if (clientsStorage) {
        const parsedClients = JSON.parse(clientsStorage);
        // asignamos si es un array válido
        if (Array.isArray(parsedClients)) {
          setClients(parsedClients); 
        } else {
          console.error(
            "El formato de los datos en localStorage no es válido."
          );
          localStorage.removeItem("clients"); // Elimina los datos corruptos
        }
      }
    } catch (error) {
      console.error("Error al recuperar los datos del localStorage:", error);
      localStorage.removeItem("clients"); // Elimina datos corruptos si hay un fallo en JSON.parse()
    }
  }, []);

  // Guardar clientes en localStorage cuando cambien
  useEffect(() => {
    if (clients.length > 0) {
      localStorage.setItem("clients", JSON.stringify(clients));
    }
  }, [clients]);

  const addClient = (client: any) => {
    // añadimos el cliente a la lista
    setClients((prevClients) => [...prevClients, client]);
    //
  };
  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <main className="flex justify-center flex-col mt-20 p-10">
        <FormClient addClient={addClient} />
        <div className="mt-10">
          {/* Mostramos la tabla de clientes */}
          {clients.length > 0 ? (
            screenSize.isDesktop ? (
              <TableClient clients={clients} />
            ) : (
              <CardClient clients={clients} />
            )
          ) : null}
        </div>
      </main>
    </>
  );
};

export default App;
