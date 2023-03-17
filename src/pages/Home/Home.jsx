import { PageHeader } from './Home.styled';
import Container from '@mui/material/Container';
const HomePage = () => {
  return (
    <Container
      // width="md"
      sx={{
        paddingTop: 10,
        textAlign: 'center',
      }}
    >
      <PageHeader>Phonebook</PageHeader>
    </Container>
  );
};

export default HomePage;
