import { AlertColor } from "@mui/material";
import { CreateRes, GetManyRes, JsonRes, RestClient, Task } from "./types";
import { AlertMsgs, errorSeverity, serverUrl } from "./const";

export function useRestClient(alertFn: (msgVal: string, severityVal?: AlertColor) => void): RestClient {
    return {
        create: async () => {
            try {
                const jsonRes: CreateRes = await (await fetch(`${serverUrl}/tasks/create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title: "", description: "" }),
                })).json();

                if (jsonRes.errors === undefined) {
                    alertFn(AlertMsgs.TaskSaved)
                    return jsonRes.data
                } else {
                    alertFn(AlertMsgs.Error, errorSeverity)
                }
            } catch (_error) {
                alertFn(AlertMsgs.Error, errorSeverity)
            }
        },
        update: async (task: Task, id?: number) => {
            try {
                const jsonRes: JsonRes = await (await fetch(`${serverUrl}/tasks/update/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(task),
                })).json();

                if (jsonRes.errors === undefined) {
                    alertFn(AlertMsgs.TaskSaved)
                    return jsonRes.data
                } else {
                    alertFn(AlertMsgs.Error, errorSeverity)
                }
            } catch (_error) {
                alertFn(AlertMsgs.Error, errorSeverity)
            }
        },
        getMany: async () => {
            try {
                const jsonRes: GetManyRes = await (await fetch(`${serverUrl}/tasks`, {
                    method: "GET",
                })).json();

                if (jsonRes.errors === undefined) {
                    return jsonRes.data;
                } else {
                    alertFn(AlertMsgs.Error, errorSeverity)
                }
            } catch (_error) {
                alertFn(AlertMsgs.Error, errorSeverity)
            }
        },
        delete: async (id?: number) => {
            try {
                const jsonRes: JsonRes = await (await fetch(`${serverUrl}/tasks/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })).json();

                if (jsonRes.errors === undefined) {
                    alertFn(AlertMsgs.TaskDeleted)
                } else {
                    alertFn(AlertMsgs.Error, errorSeverity)
                }
            } catch (_error) {
                alertFn(AlertMsgs.Error, errorSeverity)
            }
        }
    }
}