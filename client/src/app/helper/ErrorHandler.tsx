import { AxiosError } from "axios";
import { AlertError } from "../components/alert/AlertToastify";

export default function ErrorHandler(err: AxiosError | unknown) {
    if (err instanceof AxiosError) {
        console.error(err.response?.data ?? err);

        if (err.message === "Request failed with status code 404") {
            return AlertError(err.response?.data?.message);
        }
    } else {
        // Handle other types of errors if necessary
        console.error(err);
    }
}
