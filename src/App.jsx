import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";

const App = () => {
  return (
     <Flex   w={"100vw"}>
      <Container maxW={"620px"} >
        <Header />
        <Routes>
          <Route path="/:username" element={<UserPage />} />
          <Route path="/:username/post/:pid" element={<PostPage />} />
        </Routes>
      </Container>
      </Flex>
  );
};

export default App;
