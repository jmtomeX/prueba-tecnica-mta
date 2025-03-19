import ClientTable from "./components/ClientTable";
import FormClient from "./components/FormClient";

const App = () => {
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
        <FormClient />
        <div className="mt-10">
          <ClientTable />
        </div>
      </main>
    </>
  );
};

export default App;
