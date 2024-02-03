import {
    Box,
    Center,
    HStack,
    Heading,
    Image,
    Spinner,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { characterDetail } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonBox } from "./comicsDetail";
import { useEffect } from "react";

export default function CharacterDetail() {
    const { characterId } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useQuery(
        ["characterDetail", characterId],
        characterDetail
    );
    const charData = data?.data.results[0];
    console.log(charData);

    function onClickBack() {
        navigate(-1);
    }
    function onClickHome() {
        navigate("/");
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {!isLoading ? (
                <Box bgColor={"#202020"} h={"70vh"} position={"relative"}>
                    <Image
                        src={`${charData?.thumbnail.path}.${charData?.thumbnail.extension}`}
                        filter={"auto"}
                        brightness={"10%"}
                        blur={"5px"}
                        w={"100%"}
                        h={"100%"}
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
                            <Image
                                objectFit={"cover"}
                                w={"100%"}
                                src={`${charData?.thumbnail.path}.${charData?.thumbnail.extension}`}
                            />

                            <HStack
                                mt={10}
                                w={"100%"}
                                justifyContent={"space-between"}
                                position={["absolute", "relative"]}
                                bottom={["-120px", "0"]}
                            >
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

                        <VStack
                            marginLeft={[0, 10, 15, 15, 15, 40]}
                            alignItems={"flex-start"}
                            w={"100%"}
                        >
                            <Heading fontSize={["1rem", "1.75rem"]} margin={0}>
                                {charData?.name}
                            </Heading>

                            <Box
                                maxW={"100%"}
                                mt={[0, 20]}
                                fontSize={["10px", "1rem"]}
                            >
                                {charData?.description}
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
