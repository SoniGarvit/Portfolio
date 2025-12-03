import { Container, Typography, Button, Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Animate from "./Animate";

const contactVariant = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.17, 0.67, 0.83, 0.67] },
  },
};

export default function Contact() {
  return (
    <Container
      className="contactContainer"
      component={motion.div as unknown as React.ElementType}
      variants={contactVariant}
      initial="hidden"
      animate="visible"
      sx={{
        textAlign: "center",
        py: 10,
        mt: 8,
        // mb:8,
        borderRadius: 3,
        background:
          "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(16,185,129,0.1))",
      }}
    >
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Get in Touch
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        maxWidth="sm"
        mx="auto"
        mb={4}
      >
        I'm always open to discussing new opportunities or sharing ideas about
        web development and design.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="mailto:garvit.soni6@gmail.com"
        sx={{
          px: 4,
          py: 1.5,
          cursor: "pointer",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        Say Hello
      </Button>
      <Animate from="left">
        <Box
          sx={{
            p: 4,
            mt: 4,
          }}
        >
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Connect With Me
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            I’m active on LinkedIn & GitHub — feel free to check out my work or
            send a message.
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mt: 1, flexWrap: "wrap" }}
          >
            {/* LinkedIn */}
            <Button
              variant="contained"
              color="primary"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/tivrag-inos"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: 2,
                px: 2,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              LinkedIn
            </Button>

            {/* GitHub */}
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/SoniGarvit"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: 2,
                px: 2,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              GitHub
            </Button>
          </Stack>
        </Box>
      </Animate>
    </Container>
  );
}
