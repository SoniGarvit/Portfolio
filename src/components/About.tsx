import {
  Container,
  Box,
  Typography,
  Chip,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import WorkIcon from "@mui/icons-material/Work";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import LanguageIcon from "@mui/icons-material/Language";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import Animate from "./Animate";

const GridAny = Grid as unknown as any;

export default function About() {
  const skills = [
    "React",
    "TypeScript",
    "Material UI",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "Git",
  ];

  const tools = ["Vite", "Storybook", "Vitest", "Figma", "Framer Motion"];

  const experience = [
    {
      role: "React Developer Intern",
      org: "GryffinCode",
      period: "Aug 2023 — Mar 2024",
      summary:
        "Worked on responsive UI, state management and optimization. Built 12+ responsive pages and improved bundle performance.",
    },
    {
      role: "Social Media Specialist",
      org: "VGL India",
      period: "Jul 2022 — Jul 2023",
      summary:
        "Managed social channels, coordinated influencer campaigns and collected user feedback for product improvements.",
    },
    {
      role: "Customer Support Advisor (Tech)",
      org: "Teleperformance",
      period: "Feb 2020 — Jun 2021",
      summary:
        "Provided technical support for North American customers, focusing on troubleshooting and CSAT.",
    },
  ];

  return (
    <Container sx={{ py: 10 }}>
      <GridAny container spacing={6}>
        {/* Left column: Intro + Highlights */}
        <GridAny component="div" item xs={12} md={5}>
          <Animate from="left">
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                p: 4,
                boxShadow: 2,
              }}
            >
              <Box
                sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}
              >
                <Avatar sx={{ width: 72, height: 72, bgcolor: "#7a7d7c", fontSize:28}}>
                  GS
                </Avatar>
                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    Garvit Soni
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Frontend Developer · React & TypeScript · UI-focused
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" color="text.secondary" component="p">
                I build modern, responsive user interfaces with a focus on
                accessibility and performance. My background in engineering and
                athletics drives a disciplined approach to problem solving —
                delivering clean, maintainable code and polished user
                experiences.
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                sx={{ flexWrap: "wrap", gap: 1, mt: 1 }}
              >
                <Chip
                  icon={<WorkIcon />}
                  label="Open to learning"
                  variant="outlined"
                  sx={{ cursor: "pointer" }}
                />
                <Chip
                  icon={<SportsGymnasticsIcon />}
                  label="State-qualified powerlifter"
                  variant="outlined"
                  sx={{ cursor: "default" }}
                />
                <Chip
                  icon={<LanguageIcon />}
                  label="EN / HI / JP (N5)"
                  variant="outlined"
                />
              </Stack>
            </Box>
          </Animate>
          {/* quick facts */}
          <Animate from="right">
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                p: 4,
                boxShadow: 2,
                mt: 4,
              }}
            >
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Quick Facts
              </Typography>

              <List disablePadding sx={{ mt: 1 }}>
                <ListItem sx={{ px: 0, py: 1.2 }}>
                  <ListItemText
                    primary="Education"
                    slotProps={{
                      primary: {
                        variant: "body1",
                        fontWeight: 600,
                      },
                    }}
                    secondary="B.Tech — Mechanical Engineering, JECRC University (2016–2020)"
                  />
                </ListItem>

                <Divider />

                <ListItem sx={{ px: 0, py: 1.2 }}>
                  <ListItemText
                    primary="NGO / Leadership"
                    slotProps={{
                      primary: {
                        variant: "body1",
                        fontWeight: 600,
                      },
                    }}
                    secondary="Managing an NGO with 15 volunteers, leading welfare initiatives."
                  />
                </ListItem>

                <Divider />

                <ListItem sx={{ px: 0, py: 1.2 }}>
                  <ListItemText
                    primary="Languages"
                    slotProps={{
                      primary: {
                        variant: "body1",
                        fontWeight: 550,
                      },
                    }}
                    secondary="English, Hindi, Japanese (JLPT N5)"
                  />
                </ListItem>

                <Divider />

                <ListItem sx={{ px: 0, py: 1.2 }}>
                  <ListItemText
                    primary="Interests"
                    slotProps={{
                      primary: {
                        variant: "body1",
                        fontWeight: 600,
                      },
                    }}
                    // primaryTypographyProps={{ fontWeight: 600 }}
                    secondary="Guitar, Swimming, Weightlifting, Outdoor Trekking"
                  />
                </ListItem>
              </List>
            </Box>
          </Animate>
        </GridAny>

        {/* Right column: Skills, Tools, Experience */}

        <GridAny component="div" item xs={12} md={7}>
          <Animate from="left">
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                p: 4,
                boxShadow: 2,
                mb: 4,
              }}
            >
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Technical Skills
              </Typography>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                {skills.map((s) => (
                  <Tooltip key={s} title={s}>
                    <Chip
                      label={s}
                      color="primary"
                      variant="outlined"
                      sx={{
                        borderRadius: 2,
                        px: 1.5,
                        py: 0.6,
                        cursor: "default",
                      }}
                    />
                  </Tooltip>
                ))}
              </Box>

              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mt: 2 }}
              >
                Tools & Workflow
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                {tools.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    variant="outlined"
                    sx={{ cursor: "default" }}
                  />
                ))}
              </Box>
            </Box>
          </Animate>
          <Animate from="right">
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                p: 4,
                boxShadow: 2,
              }}
            >
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Professional Experience
              </Typography>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
              >
                {experience.map((exp, idx) => (
                  <Box key={idx}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle1" fontWeight={700}>
                          {exp.role}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {exp.org}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {exp.period}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {exp.summary}
                    </Typography>
                    {idx < experience.length - 1 && <Divider sx={{ my: 2 }} />}
                  </Box>
                ))}
              </Box>
            </Box>
          </Animate>
          <Animate from="left">
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                p: 4,
                boxShadow: 2,
                mt: 4,
              }}
            >
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Athletic Achievements & Personal Values
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                State-qualified powerlifter; represented college in
                inter-college competitions. Athletics taught me consistency,
                goal-setting, and how to perform under pressure — values I bring
                into engineering and teamwork.
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                sx={{ mt: 1, flexWrap: "wrap" }}
              >
                <Chip icon={<SelfImprovementIcon />} label="Discipline" />
                <Chip icon={<SelfImprovementIcon />} label="Consistency" />
                <Chip icon={<SelfImprovementIcon />} label="Leadership" />
              </Stack>
            </Box>
          </Animate>
        </GridAny>
      </GridAny>
    </Container>
  );
}
