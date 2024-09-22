import { AlertError } from "../components/alert/AlertToastify"

export default function ErrorHandler(err: any) {
    console.error(err?.response?.data ?? err)

    if (err?.name === 'AxiosError' && err?.message === "Request failed with status code 404") {
        return AlertError(err?.response?.data?.message)
    }
}