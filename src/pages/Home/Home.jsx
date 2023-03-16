import { PageHeader } from './Home.styled';
import Container from '@mui/material/Container';
const HomePage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        bgcolor: 'background.main',
        color: 'text.primary',
        paddingTop: 4,
        textAlign: 'center',
      }}
    >
      <p> This is a cool utility to create your:</p>
      <PageHeader>Phonebook</PageHeader>
    </Container>
  );
};

export default HomePage;
