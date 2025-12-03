import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 3,
        mt: 10,
        borderTop: "1px solid #e0e0e0",
        bgcolor: "white",
        transition: "background-color 0.3s ease",
        "&:hover": { bgcolor: "#f9fafb" },
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Garvit Soni. All Rights Reserved.
      </Typography>
    </Box>
  );
}
