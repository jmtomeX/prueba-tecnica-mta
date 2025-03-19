import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import {
  getCountries,
  Countries,
  getStates,
  States,
} from "../apis/countries-api";
export interface Client {
  name: string;
  surname: string;
  telefono?: string;
  email: string;
  pais: string;
  provincia: string;
}

type Props = {
  addClient: (client: Client) => void;
};

// Definición de tipos
const initialValues = {
  name: "",
  surname: "",
  telefono: "",
  email: "",
  pais: "",
  provincia: "",
};

function FormClient({ addClient }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Client>({
    defaultValues: initialValues,
  });

  // comprueba si cambia el país
  const countrySelected = watch("pais");

  const [countries, setCountries] = useState<Countries[]>([]);

  const [states, setStates] = useState<States[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesList = await getCountries();
      setCountries(countriesList);
    };
    fetchCountries();
  }, []);

  // Actualizamos las provincias cuando cambia el país
  useEffect(() => {
    const fetchStates = async () => {
      if (countrySelected) {
        const getStatesApi = await getStates(countrySelected);

        if (getStatesApi.length > 0) setStates(getStatesApi);
        else setStates([{ name: countrySelected, state_code: "NONE" }]);
      } else {
        setStates([{ name: countrySelected, state_code: "NONE" }]);
      }
    };
    fetchStates();
  }, [countrySelected]);

  // añadimos el cliente al state
  const handleAddClient = (client: Client) => {
    reset(initialValues);
    addClient(client);
  };
  return (
    <>
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-pink-900 to-pink-500 px-6 p-4">
          <h2 className="text-2xl font-bold text-white">
            Añadir Información de Contacto
          </h2>
        </div>
        <form
          noValidate
          className="p-6"
          onSubmit={handleSubmit(handleAddClient)}
        >
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
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
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
                {...register("surname", {
                  required: "Apellido es obligatorio",
                })}
              />
              {errors.surname && (
                <ErrorMessage>{errors.surname.message}</ErrorMessage>
              )}
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
                  required: "Email es obligatorio",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail no válido",
                  },
                })}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </div>

            {/* País */}
            <div className="mb-1">
              <label className="label-form-basic" htmlFor="pais">
                País <span className="text-red-500">*</span>
              </label>
              <select
                id="pais"
                className="input-form-basic"
                {...register("pais", { required: "País es obligatorio" })}
              >
                <option value="">Seleccione un país</option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.pais && (
                <ErrorMessage>{errors.pais.message}</ErrorMessage>
              )}
            </div>

            {/* Provincia */}
            <div className="mb-1">
              <label className="label-form-basic" htmlFor="provincia">
                Provincia <span className="text-red-500">*</span>
              </label>
              <select
                id="provincia"
                disabled={!countrySelected}
                className="input-form-basic"
                {...register("provincia", {
                  required: "La provincia es obligatoria",
                })}
              >
                <option value="">{!countrySelected ? "Provincia bloqueada" : "Seleccione una provincia"}</option>
                {states.map((state) => (
                  <option key={state.state_code} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
              {errors.provincia && (
                <ErrorMessage>{errors.provincia.message}</ErrorMessage>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button type="submit" className="button-submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormClient;
