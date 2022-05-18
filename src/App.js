import { Container } from "@chakra-ui/layout";
import PeopleContainer from "./components/PeopleContainer";

function App() {
  return (
    <Container maxW="975px" py={10}>
      <PeopleContainer />
    </Container>
  );
}

export default App;
