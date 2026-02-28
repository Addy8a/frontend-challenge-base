import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[6],
    },
}));