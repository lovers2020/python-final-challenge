import {
    Box,
    HStack,
    Heading,
    Image,
    Text,
    VStack,
    Button,
    Center,
    Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { comicDetail } from "../api";
import { useQuery } from "react-query";
import { ComicDetailResponse, ComicDetailResult } from "../types";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useEffect } from "react";

export const ButtonBox = styled.div`
    width: 150px;
    height: 60px;
    background-color: red;
    background: linear-gradient(-45deg, transparent 15px, #e62429 0) right,
        linear-gradient(135deg, transparent 15px, #e62429 0) left;
    background-size: 50% 100%;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 3.5;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

export default function ComicsDetail() {
    const { comicId } = useParams();
    const { isLoading, data } = useQuery<ComicDetailResponse>(
        ["comics", comicId],
        comicDetail
    );

    const COMIC_DATA = data?.data.results[0];
    const NO_DATA = "-";
    let writer = "";
    let coverArtist = "";
    let description = "";
    let photo = "";
    let title = "";
    if (COMIC_DATA && !isLoading) {
        writer =
            COMIC_DATA?.creators.items.find((item) => item.role === "writer")
                ?.name || NO_DATA;
        coverArtist =
            COMIC_DATA?.creators.items.find(
                (item) => item.role === "penciller (cover)"
            )?.name || NO_DATA;
        description = COMIC_DATA?.description;
        photo = `${COMIC_DATA?.thumbnail.path}.${COMIC_DATA?.thumbnail.extension}`;
        title = COMIC_DATA?.title ? COMIC_DATA?.title : NO_DATA;
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {!isLoading ? (
                <Box bgColor={"#202020"} h={"100vh"} position={"relative"}>
                    <Image
                        filter={"auto"}
                        brightness={"10%"}
                        blur={"5px"}
                        w={"100%"}
                        h={"100%"}
                        src={photo}
                    />
                    <HStack
                        flexDir={["column", "row"]}
                        maxW={["280px", "680px", "680px", "1280px"]}
                        margin={"auto"}
                        position={"absolute"}
                        top={"7%"}
                        left={["17%", "10%", "15%", "15%", "20%"]}
                        alignItems={"flex-start"}
                        color={"white"}
                    >
                        <VStack>
                            <Image objectFit={"cover"} w={"100%"} src={photo} />

                            <HStack
                                mt={20}
                                w={"100%"}
                                justifyContent={"space-between"}
                                position={["absolute", "relative"]}
                                bottom={["-120px"]}
                            >
                                <Link to="/">
                                    <ButtonBox>
                                        <Text m={0} p={0}>
                                            Go Back
                                        </Text>
                                    </ButtonBox>
                                </Link>
                                <Link to={`characters`}>
                                    <ButtonBox>
                                        <Text m={0} p={0}>
                                            Character
                                        </Text>
                                    </ButtonBox>
                                </Link>
                            </HStack>
                        </VStack>

                        <VStack
                            marginLeft={[0, 10, 15, 15, 15, 40]}
                            alignItems={"flex-start"}
                            w={"100%"}
                        >
                            <Heading fontSize={["1rem", "1.75rem"]} margin={0}>
                                {title}
                            </Heading>

                            <HStack justify={"space-between"} w={"100%"}>
                                <VStack alignItems={"flex-start"}>
                                    <Heading
                                        marginTop={[0, 20]}
                                        mb={0}
                                        fontSize={["0.8rem", "2rem"]}
                                    >
                                        Writer:
                                    </Heading>
                                    <Text
                                        margin={0}
                                        fontWeight={"500"}
                                        fontSize={["0.8rem", "inherit"]}
                                    >
                                        {writer}
                                    </Text>
                                </VStack>
                                <VStack alignItems={"flex-start"}>
                                    <Heading
                                        marginTop={[0, 20]}
                                        mb={0}
                                        fontSize={["0.8rem", "2rem"]}
                                    >
                                        Cover Artist:
                                    </Heading>
                                    <Text
                                        margin={0}
                                        fontWeight={"500"}
                                        fontSize={["0.8rem", "inherit"]}
                                    >
                                        {coverArtist}
                                    </Text>
                                </VStack>
                            </HStack>
                            <Box
                                maxW={"100%"}
                                mt={[0, 20]}
                                fontSize={["10px", "1rem"]}
                            >
                                {description ? description : "-"}
                            </Box>
                        </VStack>
                    </HStack>
                </Box>
            ) : (
                <Center
                    bgColor={"#202020"}
                    w={"100%"}
                    h={"100vh"}
                    alignItems={"flex-start"}
                >
                    <Spinner
                        color={"white"}
                        w={["100px", "180px"]}
                        h={["100px", "180px"]}
                        thickness="4px"
                        speed="0.65s"
                    />
                </Center>
            )}
        </>
    );
}
