import {
  Box
} from '@chakra-ui/react';
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;