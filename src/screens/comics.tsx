import { Box, Center, Grid, Image, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { listComics } from "../api";
import { Link } from "react-router-dom";
import { ComicsResponse } from "../types";

export default function Comics() {
    const { data, isLoading } = useQuery<ComicsResponse>(
        ["comics"],
        listComics
    );
    return (
        <>
            {isLoading ? (
                <Center
                    w={"100%"}
                    h={"100vh"}
                    mt={50}
                    alignItems={"flex-start"}
                >
                    <Spinner
                        color={"red"}
                        w={"180px"}
                        h={"180px"}
                        thickness="4px"
                        speed="0.65s"
                    />
                </Center>
            ) : (
                <Box
                    maxW={"1280px"}
                    margin={"auto"}
                    px={20}
                    mb={100}
                    position="relative"
                    h={"100%"}
                >
                    <Text
                        p={0}
                        fontSize={"42px"}
                        fontWeight={"600"}
                        position="relative"
                        bgColor={"white"}
                        zIndex="99"
                    >
                        Marvel Comics
                    </Text>

                    <Box
                        position={"absolute"}
                        top="27px"
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
                        {data?.data.results.map((comics, index) => (
                            <Link
                                to={`comics/${comics.id}`}
                                color="white"
                                key={index}
                            >
                                <Box
                                    cursor={"pointer"}
                                    _hover={{ color: "red" }}
                                >
                                    <Image
                                        _hover={{
                                            transform: "translateY(-15px)",
                                            transition: ".3s",
                                        }}
                                        borderRadius={"10px"}
                                        boxShadow={
                                            "0px 26px 24px -14px rgba(0,0,0,0.4)"
                                        }
                                        src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                                        w={"250px"}
                                        h={"400px"}
                                    ></Image>
                                    <Box>
                                        <Text
                                            fontSize={"15px"}
                                            fontWeight={"600"}
                                            px={10}
                                            mt={20}
                                            mb={5}
                                        >
                                            {comics.title}
                                        </Text>
                                        <Text fontSize={"14px"} px={10} m={0}>
                                            {comics.creators.items[0]?.name}
                                        </Text>
                                    </Box>
                                </Box>
                            </Link>
                        ))}
                    </Grid>
                </Box>
            )}
        </>
    );
}
