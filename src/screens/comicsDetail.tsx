import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { comicDetail } from "../api";
import { useQuery } from "react-query";
import { ComicDetailResponse } from "../types";

export default function ComicsDetail() {
    const { comicId } = useParams();
    const { isLoading, data } = useQuery<ComicDetailResponse>(
        ["comics", comicId],
        comicDetail
    );
    console.log(data?.data.results);
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
    return (
        <>
            {!isLoading ? (
                <Box bgColor={"#202020"} h={"100vh"} position={"relative"}>
                    <Image
                        filter={"auto"}
                        brightness={"10%"}
                        blur={"5px"}
                        w={"100%"}
                        h={"90%"}
                        src={photo}
                    />
                    <HStack
                        maxW={"1280px"}
                        margin={"auto"}
                        position={"absolute"}
                        top={"7%"}
                        left={"20%"}
                        alignItems={"flex-start"}
                        color={"white"}
                    >
                        <Image objectFit={"cover"} w={"40%"} src={photo} />
                        <VStack
                            marginLeft={40}
                            alignItems={"flex-start"}
                            w={"100%"}
                        >
                            <Heading fontSize={"1.75rem"} margin={0}>
                                {title}
                            </Heading>

                            <HStack justify={"space-between"} w={"100%"}>
                                <VStack alignItems={"flex-start"}>
                                    <Heading marginTop={20} mb={0}>
                                        Writer:
                                    </Heading>
                                    <Text margin={0} fontWeight={"500"}>
                                        {writer}
                                    </Text>
                                </VStack>
                                <VStack alignItems={"flex-start"}>
                                    <Heading marginTop={20} mb={0}>
                                        Cover Artist:
                                    </Heading>
                                    <Text margin={0} fontWeight={"500"}>
                                        {coverArtist}
                                    </Text>
                                </VStack>
                            </HStack>
                            <Box maxW={"70%"} mt={20}>
                                {description ? description : "-"}
                            </Box>
                        </VStack>
                    </HStack>
                </Box>
            ) : null}
        </>
    );
}
