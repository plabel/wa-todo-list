import { AlertColor } from "@mui/material";
import { Task } from "./types";

export function useRestClient(alertFn: (msgVal: string, severityVal?: AlertColor) => void) {
    return {
        create: async () => {
            try {
                const jsonRes = await (await fetch("http://localhost:3000/tasks/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title: "", description: "" }),
                })).json();

                if (jsonRes.errors === undefined) {
                    alertFn("Task Saved!")
                    return jsonRes.data
                } else {
                    alertFn("Something went wrong, please try again later.", 'error')
                }
            } catch (error) {
                alertFn("Something went wrong, please try again later.", 'error')
            }
        },
        update: async (task: Task, id?: number) => {
            try {
                const jsonRes = await (await fetch(`http://localhost:3000/tasks/update/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(task),
                })).json();

                if (jsonRes.errors === undefined) {
                    alertFn("Task Saved!")
                    return jsonRes.data
                } else {
                    alertFn("Something went wrong, please try again later.", 'error')
                }
            } catch (error) {
                alertFn("Something went wrong, please try again later.", 'error')
            }
        },
        getMany: async () => {
            try {
                const jsonRes = await (await fetch("http://localhost:3000/tasks", {
                    method: "GET",
                })).json();

                if (jsonRes.errors === undefined) {
                    return jsonRes.data;
                } else {
                    alertFn("Something went wrong, please try again later.", 'error')
                }
            } catch (error) {
                alertFn("Something went wrong, please try again later.", 'error')
            }
        },
        delete: async (id?: number) => {
            try {
                const jsonRes = await (await fetch(`http://localhost:3000/tasks/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })).json();

                if (jsonRes.errors === undefined) {
                    alertFn("Task Deleted!")
                } else {
                    alertFn("Something went wrong, please try again later.", 'error')
                }
            } catch (error) {
                alertFn("Something went wrong, please try again later.", 'error')
            }
        }
    }
}