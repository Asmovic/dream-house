import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => (
  <Box
    textAlign="center"
    mx="auto"
    p="5"
    color="gray.500"
    borderTop="1px"
    borderColor="gray.100"
  >
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
      <Text>
        &copy; <span>{new Date().getFullYear()}</span> - DreamHouse - Made with
        ❤️ by
      </Text>
      <Text color="blue.300" cursor="pointer" title="Twitter" fontWeight="bold">
        <Link href="https://twitter.com/asmoreal" passHref target="new tab">
          Brainwavee
        </Link>
      </Text>
    </Flex>
    {/* |
        <Text>Deployed on 
            <Text fontWeight="bold" color="black" title="Vercel">
                <Link href="https://vercel.com/" passHref target="new tab">    
                    Vercel
                </Link>
            </Text>
        </Text>
        |
        <Text>Open Source on 
            <Text fontWeight="bold" color="black" title="GitHub">
                <Link href="https://github.com/boularbahsmail/Real-Estate-App" passHref target="new tab">    
                    GitHub
                </Link>
            </Text>
        </Text> */}
  </Box>
);

export default Footer;
