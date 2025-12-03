import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Hero() {
  return (
    <Box
      textAlign="center"
      py={10}
      sx={{
        animation: `${fadeIn} 0.8s ease-out`,
        transition: "all 0.3s ease",
      }}
    >
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Building Modern, Responsive & Elegant Web Experiences
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        maxWidth="600px"
        mx="auto"
        mb={4}
      >
        I'm a Frontend Developer passionate about crafting clean, scalable, and
        accessible interfaces using React, TypeScript, and Material UI.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to="/projects"
        sx={{
          px: 4,
          py: 1.5,
          "&:hover": { transform: "scale(1.05)" },
          cursor:"pointer"
        }}
      >
        View My Work
      </Button>
    </Box>
  );
}
