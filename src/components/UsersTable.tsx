import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

import type { User } from "../types/User";
import { useState } from "react";
import UserDialog from "./UserDialogue";

interface UsersTableProps {
    users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [open, setOpen] = useState(false);

    const handleRowClick = (user: User) => {
        setSelectedUser(user);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
    <TableContainer component={Paper}>
        <Table>
        <TableHead>
            <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {users.map((user) => (
            <TableRow key={user.id} hover sx={{ cursor: "pointer"}} onClick={() => handleRowClick(user)}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>

        <UserDialog
            open={open}
            onClose={handleClose}
            user={selectedUser}
        />
    </TableContainer>
    );
};

export default UsersTable;