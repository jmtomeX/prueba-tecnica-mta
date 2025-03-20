import api from "../lib/axios";
import { isAxiosError } from "axios";

export interface Countries {
    name: string;
}
export interface States {
    name: string;
    state_code: string;
}


// recoger paises
export const getCountries = async () => {
    const url = "/flag/unicode";
    try {
        const response = await api.get(url);
        const { data: { data } } = response;

        const countries = data.map(({ name }: Countries) => ({ name }));

        return countries;
    } catch (error) {
        if (isAxiosError(error)) {
            console.error("Error en la petición a la API(countries):", error.response?.data?.msg);
        }
        return [];
    }
};

export const getStates = async (country: string) => {
    const url = "/states";  // Asegúrate de que esta es la URL correcta
    
    try {
        const response = await api.post(url, { country }, {
            headers: { "Content-Type": "application/json" }
        });
        // Verificamos si la propiedad 'data' existe en la respuesta
        const data = response.data?.data || [];

        const states = data.states.map(({ name, state_code }: States) => ({ name, state_code }));
                    
        return states;
    } catch (error) {
        if (isAxiosError(error)) {
            console.error("Error en la petición a la API (states):", error.response?.data?.msg);
        }
        return [];
    }
};


