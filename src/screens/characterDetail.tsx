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
                    ></Image>
                    <Center
                        maxW={"1280px"}
                        w={"100%"}
                        margin={"auto"}
                        position={"absolute"}
                        top={"70px"}
                        left={"350px"}
                        justifyContent={"space-between"}
                    >
                        <VStack
                            color={"white"}
                            gap={0}
                            alignItems={"flex-start"}
                        >
                            <Heading m={0} fontSize={"32px"}>
                                {charData?.name}
                            </Heading>
                            <Text maxW={"70%"} my={20}>
                                {charData?.description}
                            </Text>
                            <HStack gap={20} mt={10}>
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

                        <Image
                            src={`${charData?.thumbnail.path}.${charData?.thumbnail.extension}`}
                            height={"500px"}
                            width={"500px"}
                        />
                    </Center>
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
                        w={"180px"}
                        h={"180px"}
                        thickness="4px"
                        speed="0.65s"
                    />
                </Center>
            )}
        </>
    );
}
