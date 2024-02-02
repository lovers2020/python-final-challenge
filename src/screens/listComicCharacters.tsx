import {
    Box,
    Center,
    Grid,
    HStack,
    Heading,
    Spinner,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { listComicCharacters } from "../api";
import { ButtonBox } from "./comicsDetail";

export default function ListComicCharacters() {
    const navigate = useNavigate();

    const { comicId } = useParams();
    const { data, isLoading } = useQuery(
        ["comicCharacters", comicId],
        listComicCharacters
    );
    const COMIC_DATA = data?.data.results;
    const noData = data?.data.total;
    function onClickBack() {
        navigate(-1);
    }
    function onClickHome() {
        navigate("/");
    }
    return (
        <>
            {isLoading ? (
                <Center
                    bgColor={"white"}
                    w={"100%"}
                    h={"100vh"}
                    alignItems={"flex-start"}
                >
                    <Spinner
                        mt={20}
                        color={"red"}
                        w={"180px"}
                        h={"180px"}
                        thickness="4px"
                        speed="0.65s"
                    />
                </Center>
            ) : !noData ? (
                <VStack
                    justify={"flex-start"}
                    h={"100vh"}
                    w={"100%"}
                    bgColor={"#151515"}
                    color={"white"}
                    fontSize={"32px"}
                >
                    <Heading>No characters..</Heading>
                    <HStack gap={50}>
                        <ButtonBox onClick={onClickBack}>
                            <Text fontSize={"18px"} m={0} p={0}>
                                Go Back
                            </Text>
                        </ButtonBox>
                        <ButtonBox onClick={onClickHome}>
                            <Text fontSize={"18px"} m={0} p={0}>
                                Go Home
                            </Text>
                        </ButtonBox>
                    </HStack>
                </VStack>
            ) : (
                <Box
                    maxW={"1280px"}
                    margin={"auto"}
                    px={20}
                    mb={100}
                    position="relative"
                    h={"100%"}
                >
                    <HStack justify={"space-between"} gap={50}>
                        <Text
                            p={0}
                            fontSize={"42px"}
                            fontWeight={"600"}
                            position="relative"
                            bgColor={"white"}
                            zIndex="99"
                        >
                            CHARACTERS
                        </Text>
                        <HStack>
                            <ButtonBox onClick={onClickBack}>
                                <Text fontSize={"18px"} m={0} p={0}>
                                    Go Back
                                </Text>
                            </ButtonBox>
                            <ButtonBox onClick={onClickHome}>
                                <Text fontSize={"18px"} m={0} p={0}>
                                    Go Home
                                </Text>
                            </ButtonBox>
                        </HStack>
                    </HStack>

                    <Box
                        position={"absolute"}
                        top="67px"
                        bgColor={"#c6a972"}
                        w="130px"
                        h="2px"
                        transform="rotateZ(-45deg)"
                    ></Box>
                    <Grid
                        mt={10}
                        columnGap={20}
                        rowGap={130}
                        templateColumns={"repeat(5,1fr)"}
                    >
                        {COMIC_DATA?.map((comics, index) => (
                            <Box
                                cursor={"pointer"}
                                role="group"
                                overflow={"hidden"}
                                h={"400px"}
                                onClick={() =>
                                    navigate(`/characters/${comics.id}`)
                                }
                            >
                                <Box
                                    backgroundImage={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                                    w={"240px"}
                                    h={"70%"}
                                    backgroundSize={"cover"}
                                    mb={0}
                                    _groupHover={{
                                        transform: "scale(1.05)",
                                        transition: "all 0.3s",
                                    }}
                                ></Box>
                                <Box
                                    p={20}
                                    mt={0}
                                    h={"35%"}
                                    bgColor={"#151515"}
                                    borderTop={"6px solid red"}
                                    color={"white"}
                                    fontWeight={"600"}
                                    fontSize={"18px"}
                                    _groupHover={{
                                        bgColor: "red",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    {comics.name}
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            )}
        </>
    );
}
