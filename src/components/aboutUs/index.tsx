import {
  Box,
  Flex,
  Text,
  Link,
  Avatar,
  VStack,
  HStack,
  useColorMode,
} from "@chakra-ui/react";

import signup from "assets/signup.jpg";
import linkedIn from "assets/linkedin.png";
import github from "assets/github.png";
import darkgit from "assets/githubdark.png";

const AboutUs = () => {
  const { colorMode } = useColorMode();

  return (
    <Box m='100px'>
      <Box mt='30px'>
        <Flex display='flex' alignItems='center'>
          <Avatar
            boxSize='200px'
            src={signup}
            m='30px'
            boxShadow={
              colorMode === "dark"
                ? "0 0 24px 4px white"
                : "0 0 24px 4px rgba(0, 0, 0, 0.48)"
            }
            transition='transform .2s;'
            _hover={{ transform: "scale(1.1)" }}
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
          <Box
            ml='150px'
            p='20px'
            borderRadius='15px'
            bg={colorMode === "dark" ? "#2d3748" : "#BEE3F8"}
          >
            <Text maxW='400px'>
              Energetic and curiosity driven programmer with a diversified
              portfolio of working with web development, software development.
              Eager to acquire new technical skill-sets and contribute them to
              the progress of the organization.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box mt='50px'>
        <Flex display='flex' justifyContent='flex-end' alignItems='center'>
          <Box
            mr='150px'
            p='20px'
            borderRadius='15px'
            bg={colorMode === "dark" ? "#2d3748" : "#BEE3F8"}
          >
            <Text maxW='400px'>
              Hardworking and reliable Software Developer focused on going above
              and beyond to support team and serve customers. Motivated to
              continue to learn and grow as a professional.Reliable team member
              accustomed to taking on challenging tasks. Dedicated to business
              success.
            </Text>
          </Box>
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
            boxSize='200px'
            src={signup}
            m='30px'
            boxShadow={
              colorMode === "dark"
                ? "0 0 24px 4px white"
                : "0 0 24px 4px rgba(0, 0, 0, 0.48)"
            }
            transition='transform .2s;'
            _hover={{ transform: "scale(1.1)" }}
          />
        </Flex>
      </Box>

      <Box mt='50px'>
        <Flex display='flex' alignItems='center'>
          <Avatar
            boxSize='200px'
            src={signup}
            m='30px'
            boxShadow={
              colorMode === "dark"
                ? "0 0 24px 4px white"
                : "0 0 24px 4px rgba(0, 0, 0, 0.48)"
            }
            transition='transform .2s;'
            _hover={{ transform: "scale(1.1)" }}
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
          <Box
            ml='150px'
            p='20px'
            borderRadius='15px'
            bg={colorMode === "dark" ? "#2d3748" : "#BEE3F8"}
          >
            <Text maxW='400px'>
              Highly skilled Information technology professional with strong
              experience and knowledge creating top quality, predictable and
              high-performance website applications.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box mt='50px'>
        <Flex display='flex' justifyContent='flex-end' alignItems='center'>
          <Box
            mr='150px'
            p='20px'
            borderRadius='15px'
            bg={colorMode === "dark" ? "#2d3748" : "#BEE3F8"}
          >
            <Text maxW='400px'>
              Robert is passionate about all things JavaScript. he works hard
              and cares about writing clean code and genuinely love to learn.
            </Text>
          </Box>
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
            boxSize='200px'
            src={signup}
            m='30px'
            boxShadow={
              colorMode === "dark"
                ? "0 0 24px 4px white"
                : "0 0 24px 4px rgba(0, 0, 0, 0.48)"
            }
            transition='transform .2s;'
            _hover={{ transform: "scale(1.1)" }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;
