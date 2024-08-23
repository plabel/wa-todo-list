import { AlertColor } from "@mui/material";
import { useState } from "react";
import { defaultSeverity } from "./const";

export function useSnackbarAlert() {
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');
    const [severity, setSeverity] = useState(defaultSeverity);
    const alertFn = (msgVal: string, severityVal: AlertColor = defaultSeverity) => {
        setMsg(msgVal);
        setSeverity(severityVal);
        setOpen(true)
    }

    return {
        alertFn,
        open,
        setOpen,
        msg,
        severity
    }
}