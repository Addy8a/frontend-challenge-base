import {
  Container,
  Typography,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  CircularProgress,
} from "@mui/material";

import { useEffect, useState } from "react";
import UsersTable from "./components/UsersTable";
import { fetchUsers } from "./services/userAPI";
import type { User } from "./types/User";
import { StyledContainer } from "./components/StyledContainer";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
    },
    background: {
      default: "#f8fafc",
    },
  },
});

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch(() => setError("Error loading users"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Container maxWidth="md">
        <Box sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="h3" component="h1" fontWeight="800" gutterBottom>
            User Directory Challenge
          </Typography>
          
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Bienvenido al reto técnico. Tu objetivo es conectar la API y mostrar
            los usuarios aquí.
          </Typography>

          {loading && <CircularProgress />}

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          {!loading && !error && (
            <StyledContainer sx={{ mt: 4 }}>
              <UsersTable users={users} />
            </StyledContainer>
          )}

        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
