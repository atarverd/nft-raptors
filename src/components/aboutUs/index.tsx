import {
  Box,
  Flex,
  Image,
  Text,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  VStack,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import signup from "../../assets/signup.jpg";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import linkedIn from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import darkgit from "../../assets/darkgithub.png";

const AboutUs = () => {
  const { colorMode } = useColorMode();

  return (
    <Box m='100px'>
      <Box mt='30px'>
        <Flex display='flex' alignItems='center'>
          <Avatar
            size='2xl'
            src={signup}
            m='20px'
            boxShadow={
              colorMode === "dark"
                ? "0 0 24px 4px white"
                : "0 0 24px 4px rgba(0, 0, 0, 0.15)"
            }
          />
          <VStack>
            <Text fontSize='2xl'>Artur Tarverdyan</Text>
            <Text fontSize='1xl'>Lead Software Engineer</Text>
            <HStack>
              <Link href='https://github.com/atarverd' isExternal>
                <Avatar
                  src={colorMode === "light" ? github : darkgit}
                  size='1xl'
                />
              </Link>
              <Link href='https://www.linkedin.com/in/atarverd' isExternal>
                <Avatar src={linkedIn} size='1xl' />
              </Link>
            </HStack>
          </VStack>
        </Flex>
      </Box>

      <Box mt='50px'>
        <Flex display='flex' justifyContent='flex-end' alignItems='center'>
          <VStack>
            <Text fontSize='2xl'>Minas Malkhasyan</Text>
            <Text fontSize='1xl'>Full Stack Engineer</Text>
            <HStack>
              <Link href='https://github.com/Minas03' isExternal>
                <Avatar
                  src={colorMode === "light" ? github : darkgit}
                  size='1xl'
                />
              </Link>
              <Link
                href='https://www.linkedin.com/in/minas-malkhasyan-938a3a223'
                isExternal
              >
                <Avatar src={linkedIn} size='1xl' />
              </Link>
            </HStack>
          </VStack>
          <Avatar
            size='2xl'
            src={signup}
            m='20px'
            boxShadow={
              colorMode === "dark"
                ? "0 0 24px 4px white"
                : "0 0 24px 4px rgba(0, 0, 0, 0.15)"
            }
          />
        </Flex>
      </Box>

      <Box mt='50px'>
        <Flex display='flex' alignItems='center'>
          <Avatar
            size='2xl'
            src={signup}
            m='20px'
            boxShadow={
              colorMode === "dark"
                ? "0 0 24px 4px white"
                : "0 0 24px 4px rgba(0, 0, 0, 0.15)"
            }
          />
          <VStack>
            <Text fontSize='2xl'>Rafayel Ghazaryan</Text>
            <Text fontSize='1xl'>Front-End Engineer</Text>
            <HStack>
              <Link href='https://github.com/Rafayel77' isExternal>
                <Avatar
                  src={colorMode === "light" ? github : darkgit}
                  size='1xl'
                />
              </Link>
              <Link
                href='https://www.linkedin.com/in/rafayel-ghazaryan-a97975183'
                isExternal
              >
                <Avatar src={linkedIn} size='1xl' />
              </Link>
            </HStack>
          </VStack>
        </Flex>
      </Box>

      <Box mt='50px'>
        <Flex display='flex' justifyContent='flex-end' alignItems='center'>
          <VStack>
            <Text fontSize='2xl'>Robert Baloyan </Text>
            <Text fontSize='1xl'>Project Manager</Text>
            <HStack>
              <Link href='https://github.com/RobBal3' isExternal>
                <Avatar
                  src={colorMode === "light" ? github : darkgit}
                  size='1xl'
                />
              </Link>
              <Link
                href='https://www.linkedin.com/in/robert-baloyan'
                isExternal
              >
                <Avatar src={linkedIn} size='1xl' />
              </Link>
            </HStack>
          </VStack>
          <Avatar
            size='2xl'
            src={signup}
            m='20px'
            boxShadow={
              colorMode === "dark"
                ? "0 0 24px 4px white"
                : "0 0 24px 4px rgba(0, 0, 0, 0.15)"
            }
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;
