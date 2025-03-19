import { useEffect, useState } from "react";
import ClientTable from "./components/TableClient";
import FormClient, { Client } from "./components/FormClient";

const App = () => {
  const [clients, setClients] = useState<Client[]>([]);
 
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
        <FormClient addClient={addClient}/>
        <div className="mt-10">
          <ClientTable clients={clients}/>
        </div>
      </main>
    </>
  );
};

export default App;
