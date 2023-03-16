import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { NavLinkStyled } from '../pages/Login/Login.styled';

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        color: 'text.primary',
        p: 3,
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        color="inherit"
        sx={{ flexGrow: 1 }}
      >
        404 Page not found. Click on <NavLinkStyled to="/">Home</NavLinkStyled>
      </Typography>
    </Box>
  );
}
