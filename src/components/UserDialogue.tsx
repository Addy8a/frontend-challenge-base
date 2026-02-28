import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Divider,
    Box,
} from "@mui/material";
import type { User } from "../types/User";

interface UserDialogProps {
    open: boolean;
    onClose: () => void;
    user: User | null;
}

const UserDialog = ({ open, onClose, user }: UserDialogProps) => {
    if (!user) return null;

    return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: "bold" }}>
        {user.name}
        </DialogTitle>

        <DialogContent>
        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
            Ciudad
            </Typography>
            <Typography>{user.address.city}</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
            Empresa
            </Typography>
            <Typography>{user.company.name}</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
            <Typography variant="subtitle2" color="text.secondary">
            Teléfono
            </Typography>
            <Typography>{user.phone}</Typography>
        </Box>
        </DialogContent>
    </Dialog>
    );
};

export default UserDialog;