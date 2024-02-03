import {
    Box,
    HStack,
    Text,
    VStack,
    Image,
    Heading,
    Center,
} from "@chakra-ui/react";
import uuid from "react-uuid";

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
const footerDetailBottom = [
    "Terms of Use",
    "Privacy Policy",
    "Interest-Based Ads",
    "License Agreement",
    "©2024 MARVEL",
];

export default function Footer() {
    return (
        <>
            <Box bg={"#151515"} w="100%" py={16}>
                <HStack
                    w={"100%"}
                    maxW={"1280px"}
                    m={"0 auto"}
                    justifyContent="space-between"
                >
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
                        gap={0}
                    >
                        {footerDetailFirst.map((index) => (
                            <Text
                                key={uuid()}
                                my={2}
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
                        gap={0}
                    >
                        {footerDetailSecond.map((index) => (
                            <Text
                                key={uuid()}
                                my={2}
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
                    <VStack>
                        <HStack cursor={"pointer"} alignItems="flex-start">
                            <Image
                                w={"60px"}
                                src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png"
                            />
                            <VStack alignItems={"flex-start"} mx={4} gap="0">
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
                        <HStack cursor={"pointer"} alignItems="flex-start">
                            <Image
                                w={"55px"}
                                src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png"
                            />
                            <VStack alignItems={"flex-start"} mx={4} gap="0">
                                <Heading color={"white"} fontSize="16px" m={0}>
                                    MARVEL UNLIMITED
                                </Heading>
                                <Text
                                    fontSize={"12px"}
                                    p={0}
                                    m={0}
                                    color="rgba(255,255,255,0.5)"
                                >
                                    Access Over 30,000+ Digital Comics
                                </Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </HStack>
                <Center mt={20} color="rgba(255,255,255,0.5)" fontSize={"13px"}>
                    {footerDetailBottom.map((index) => (
                        <Text
                            key={uuid()}
                            mr={15}
                            _hover={{
                                cursor: "pointer",
                                color: "white",
                            }}
                            _last={{
                                cursor: "default",
                                _hover: {
                                    color: "rgba(255,255,255,0.5)",
                                },
                            }}
                        >
                            {index}
                        </Text>
                    ))}
                </Center>
            </Box>
        </>
    );
}
