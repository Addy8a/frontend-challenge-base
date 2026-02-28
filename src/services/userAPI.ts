import type { User } from "../types/User";

export const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error("Error fetching users");
    }

    return response.json();
};