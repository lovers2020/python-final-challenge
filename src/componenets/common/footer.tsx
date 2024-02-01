import { Box, HStack, Text, VStack, Image, Heading } from "@chakra-ui/react";

const footerDetailFirst = [
    "ABOUT MARVEL",
    "HELP/FAQS",
    "CAREERS",
    "INTERSHIPS",
];
const footerDetailSecond = [
    "ADVERTISING",
    "DISNEY+",
    "MARVELHQ.COM",
    "REDEEM DIGITAL COMICS",
];

export default function Footer() {
    return (
        <>
            <Box bg={"#151515"} w="100%" py={70}>
                <HStack maxW={"1280px"} m={"auto"}>
                    <Box w={"80px"}>
                        <svg
                            viewBox="0 0 36 52"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <rect
                                fill="#EC1D24"
                                width="100%"
                                height="100%"
                            ></rect>
                            <path
                                fill="#FEFEFE"
                                d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"
                            ></path>
                        </svg>
                    </Box>
                    <VStack
                        color={"white"}
                        fontWeight="600"
                        fontSize={"14px"}
                        alignItems="flex-start"
                        mx={40}
                    >
                        {footerDetailFirst.map((index) => (
                            <Text
                                my={3}
                                p={0}
                                cursor={"pointer"}
                                _hover={{
                                    color: "rgba(255,255,255,0.5)",
                                }}
                            >
                                {index}
                            </Text>
                        ))}
                    </VStack>
                    <VStack
                        color={"white"}
                        fontWeight="500"
                        fontSize={"14px"}
                        alignItems="flex-start"
                        mx={40}
                    >
                        {footerDetailSecond.map((index) => (
                            <Text
                                my={3}
                                p={0}
                                cursor={"pointer"}
                                _hover={{
                                    color: "rgba(255,255,255,0.5)",
                                }}
                            >
                                {index}
                            </Text>
                        ))}
                    </VStack>
                    <HStack>
                        <Image
                            w={"60px"}
                            src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png"
                        />
                        <VStack>
                            <Heading color={"white"} fontSize="16px" m={0}>
                                MARVEL INSIDER
                            </Heading>
                            <Text
                                fontSize={"12px"}
                                p={0}
                                m={0}
                                color="rgba(255,255,255,0.5)"
                            >
                                Get Rewarded for Being a Marvel Fan
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>
            </Box>
        </>
    );
}
