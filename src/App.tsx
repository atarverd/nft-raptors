import theme from './theme';
import Layout from './layout';
import Routing from './routes/routes';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const App = () => (

	<ChakraProvider theme={theme}>
		<ColorModeSwitcher />
		<Layout>
			<Routing />
		</Layout>
	</ChakraProvider>
);