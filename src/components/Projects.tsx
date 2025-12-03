import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const rowVariantFromRight = {
  hidden: {
    opacity: 0,
    x: 80,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};
const rowVariantFromLeft = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const Projects = () => {
  const projects = [
    {
      title: "Event Manager",
      description: "A calendar app that tracks events.",
      link: "https://sonigarvit.github.io/calendar-view/",
    },
    {
      title: "Ani-DB",
      description:
        "Anime searching web app that lets user to search their favorite anime from a list of 1000s of animes.",
      link: "https://sonigarvit.github.io/Ani-DB/",
    },
    {
      title: "Estate",
      description:
        "A demo website for real estate developer focusing on the their construction projects and speciality.",
      link: "https://sonigarvit.github.io/Real_Estate/",
    },
    {
      title: "PhoneBook",
      description:
        "A classic fully responsive contact book web app focused on storing and updating the stored data locally on any device.",
      link: "https://sonigarvit.github.io/PhoneBook/",
    },
    {
      title: "Emoji Memory Game",
      description: "Match all the emoji card with their significant copies.",
      link: "https://sonigarvit.github.io/Memory-Game/",
    },
  ];

  return (
    <Container sx={{ py: 10 }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={700}
        mb={5}
        sx={{
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            width: 60,
            height: 4,
            backgroundColor: "primary.main",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: -10,
            borderRadius: 2,
          },
        }}
      >
        My Projects
      </Typography>

      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          maxWidth: "750px",
          mx: "auto",
        }}
      >
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <Box
              key={index}
              component={motion.div as unknown as React.ElementType}
              variants={isEven ? rowVariantFromRight : rowVariantFromLeft}
              initial="hidden"
              animate="visible"
              style={{ width: "100%" }}
            >
              <Card
                key={index}
                elevation={3}
                sx={{
                  cursor: "pointer",
                  borderRadius: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent sx={{ pb: 1 }}>
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button
                    sx={{ cursor: "pointer" }}
                    href={project.link}
                    target="_blank"
                    size="small"
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default Projects;
