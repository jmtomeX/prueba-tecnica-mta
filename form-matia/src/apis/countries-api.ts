import api from "../lib/axios";
import { isAxiosError } from "axios";

export interface Countries {
    name: string;
    iso3: string;
}


// recoger paises
export const getCountries = async () => {
    const url = "/flag/unicode";
    try {
        const response = await api.get(url);
        const { data: { data } } = response;

        const countries = data.map(({ name, iso3 }: Countries) => ({ name, iso3 }));

        return countries;
    } catch (error) {
        if (isAxiosError(error)) {
            console.error("Error en la API:", error.response?.data.error);
        }
        return [];
    }
};