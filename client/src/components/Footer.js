import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/" display="inline" style={{ fontWeight: 600, marginRight: '16px' }}>
        EXPRSSN
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        px: 2,
        mt: "auto",
        textAlign: "center",
        minHeight: '20vh',
      
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" display="inline" style={{ fontWeight: 600, marginRight: '16px' }}><Link color="inherit" href="/l">Terms</Link></Typography>
        <Typography display="inline" style={{ fontWeight: 600, marginRight: '16px' }}><Link color="inherit" href="/l">Privacy</Link></Typography>
        <Typography display="inline" style={{ fontWeight: 600, marginRight: '16px' }}><Link color="inherit" href="/l">Contact</Link></Typography>
        <Typography display="inline" style={{ fontWeight: 600, marginRight: '16px' }}><Link color="inherit" href="/l">FAQ</Link></Typography>
        <Typography display="inline" style={{ fontWeight: 600, marginRight: '16px' }}><Link color="inherit" href="/about">About</Link></Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
