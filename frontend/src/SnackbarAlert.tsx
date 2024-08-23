import { Alert, Snackbar } from '@mui/material';
import { SnackbarAlertProps } from './types'

export function SnackbarAlert({ setOpen, open, msg, severity }: SnackbarAlertProps) {
    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (<Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
    >
        <Alert
            onClose={handleClose}
            severity={severity}
            variant="filled"
            sx={{ width: '100%' }}
        >
            {msg}
        </Alert>
    </Snackbar>)
}