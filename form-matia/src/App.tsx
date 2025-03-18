import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./components/ErrorMessage";

// Definición de tipos
interface FormData {
  name: string;
  surname: string;
  telefono?: string;
  email: string;
  pais: string;
  provincia: string;
}

interface ProvinciasMap {
  [key: string]: string[];
}

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: {
    name: "",
    surname: "",
    telefono: "",
    email: "",
    pais: "",
    provincia: "",
  }});

  const paisSeleccionado = watch("pais");

  const [paises] = useState<string[]>([
    "España",
    "México",
    "Argentina",
    "Colombia",
    "Chile",
    "Perú",
    "Ecuador",
    "Venezuela",
    "Uruguay",
    "Bolivia",
  ]);

  const [provincias] = useState<ProvinciasMap>({
    España: ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza"],
    México: ["Ciudad de México", "Jalisco", "Nuevo León", "Puebla", "Guanajuato"],
    Argentina: ["Buenos Aires", "Córdoba", "Santa Fe", "Mendoza", "Tucumán"],
    Colombia: ["Bogotá", "Antioquia", "Valle del Cauca", "Atlántico", "Santander"],
    Chile: ["Santiago", "Valparaíso", "Biobío", "O'Higgins", "Maule"],
    Perú: ["Lima", "Arequipa", "La Libertad", "Piura", "Cusco"],
    Ecuador: ["Pichincha", "Guayas", "Azuay", "Manabí", "El Oro"],
    Venezuela: ["Caracas", "Zulia", "Carabobo", "Lara", "Aragua"],
    Uruguay: ["Montevideo", "Canelones", "Maldonado", "Rocha", "Salto"],
    Bolivia: ["La Paz", "Santa Cruz", "Cochabamba", "Potosí", "Chuquisaca"],
  });

  const [provinciasList, setProvinciasList] = useState<string[]>([]);

  // Actualizamos las provincias cuando cambia el país
  useEffect(() => {
    if (paisSeleccionado) {
      setProvinciasList(provincias[paisSeleccionado] || []);
    } else {
      setProvinciasList([]);
    }
  }, [paisSeleccionado, provincias]);

  return (
    <main className="flex justify-center mt-20 p-10 ">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-pink-900 to-pink-500 px-6 p-4">
          <h2 className="text-2xl font-bold text-white">Añadir Información de Contacto</h2>
        </div>

        <form className="p-6" onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Nombre */}
            <div className="mb-1">
              <label className="label-form-basic" htmlFor="nombre">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                className="input-form-basic"
                placeholder="Ingrese el nombre"
                {...register("name", { required: "Nombre es obligatorio" })}
              />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </div>

            {/* Apellido */}
            <div className="mb-1">
              <label className="label-form-basic" htmlFor="apellido">
                Apellido <span className="text-red-500">*</span>
              </label>
              <input
                id="surname"
                type="text"
                className="input-form-basic"
                placeholder="Ingrese el apellido"
                {...register("surname", { required: "El apellido es obligatorio" })}
              />
              {errors.surname && <ErrorMessage>{errors.surname.message}</ErrorMessage>}
            </div>

            {/* Teléfono */}
            <div className="mb-1">
              <label className="label-form-basic" htmlFor="telefono">
                Teléfono (opcional)
              </label>
              <input
                id="telefono"
                type="tel"
                className="input-form-basic"
                placeholder="Ingrese el teléfono"
                {...register("telefono")}
              />
            </div>

            {/* Email */}
            <div className="mb-1">
              <label className="label-form-basic" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="input-form-basic"
                placeholder="mail@mail.com"
                {...register("email", {
                  required: "El Email es obligatorio",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail no válido",
                  },
                })}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </div>

            {/* País */}
            <div className="mb-1">
              <label className="label-form-basic" htmlFor="pais">
                País <span className="text-red-500">*</span>
              </label>
              <select
                id="pais"
                className="input-form-basic"
                {...register("pais", { required: "El país es obligatorio" })}
              >
                <option value="">Seleccione un país</option>
                {paises.map((pais) => (
                  <option key={pais} value={pais}>
                    {pais}
                  </option>
                ))}
              </select>
              {errors.pais && <ErrorMessage>{errors.pais.message}</ErrorMessage>}
            </div>

            {/* Provincia */}
            <div className="mb-1">
              <label className="label-form-basic" htmlFor="provincia">
                Provincia <span className="text-red-500">*</span>
              </label>
              <select
                id="provincia"
                disabled={!paisSeleccionado}
                className="input-form-basic"
                {...register("provincia", { required: "La provincia es obligatoria" })}
              >
                <option value="">Seleccione una provincia</option>
                {provinciasList.map((provincia) => (
                  <option key={provincia} value={provincia}>
                    {provincia}
                  </option>
                ))}
              </select>
              {errors.provincia && <ErrorMessage>{errors.provincia.message}</ErrorMessage>}
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" className="button-submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default App;