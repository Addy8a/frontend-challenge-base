import {
  Container,
  Typography,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza estilos CSS en diferentes navegadores */}
      <Container maxWidth="md">
        <Box sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="h3" component="h1" fontWeight="800" gutterBottom>
            User Directory Challenge
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Bienvenido al reto técnico. Tu objetivo es conectar la API y mostrar
            los usuarios aquí.
          </Typography>

          {/* Agrega tu código aquí */}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
