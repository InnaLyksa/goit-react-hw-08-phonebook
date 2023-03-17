import { PageHeader } from './Home.styled';
import Container from '@mui/material/Container';
const HomePage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        bgcolor: 'background.divider',
        // color: 'text.primary',
        paddingTop: 10,
        textAlign: 'center',
      }}
    >
      {/* <p> Register to create your:</p> */}
      <PageHeader>Phonebook</PageHeader>
    </Container>
  );
};

export default HomePage;
