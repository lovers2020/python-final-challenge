import { Box, Center, Grid, Image, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { listComics } from "../api";
import { Link } from "react-router-dom";
import { ComicsResponse } from "../types";
import MainBanner from "./mainBanner";

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
                        w={["100px", "180px"]}
                        h={["100px", "180px"]}
                        thickness="4px"
                        speed="0.65s"
                    />
                </Center>
            ) : (
                <>
                    <MainBanner />
                    <Box
                        maxW={["280px", "530px", "680px", "680px", "1280px"]}
                        margin={"auto"}
                        mb={100}
                        position="relative"
                        h={"100%"}
                    >
                        <Text
                            mt={8}
                            fontSize={["16px", "24px", "34px"]}
                            fontWeight={"600"}
                            position="relative"
                            bgColor={"white"}
                            zIndex="99"
                        >
                            Marvel Comics
                        </Text>

                        <Box
                            position={"absolute"}
                            top={["12px", "20px", "25px"]}
                            bgColor={"#c6a972"}
                            w={["60px", "100px", "120px"]}
                            h="2px"
                            transform="rotateZ(-45deg)"
                        ></Box>
                        <Grid
                            mt={10}
                            columnGap={4}
                            rowGap={10}
                            templateColumns={[
                                "1,1fr",
                                "repeat(2,1fr)",
                                "repeat(3,1fr)",
                                "repeat(3,1fr)",
                                "repeat(5,1fr)",
                            ]}
                        >
                            {data?.data.results.map((comics, index) => (
                                <Link
                                    to={`comics/${comics.id}`}
                                    color="white"
                                    key={index}
                                    style={{ height: "100%", width: "100%" }}
                                >
                                    <Box
                                        role="group"
                                        cursor={"pointer"}
                                        _hover={{ color: "red" }}
                                        h={"100%"}
                                    >
                                        <Image
                                            _groupHover={{
                                                transform: "translateY(-15px)",
                                                transition: ".3s",
                                            }}
                                            borderRadius={"10px"}
                                            boxShadow={
                                                "0px 26px 24px -14px rgba(0,0,0,0.4)"
                                            }
                                            src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                                            w={["250px"]}
                                            h={["200px", "400px"]}
                                        ></Image>
                                        <Box>
                                            <Text
                                                fontSize={["12px", "15px"]}
                                                fontWeight={"600"}
                                                px={4}
                                                mt={4}
                                                mb={1}
                                            >
                                                {comics.title}
                                            </Text>
                                            <Text
                                                fontSize={["10px", "14px"]}
                                                px={4}
                                                m={0}
                                            >
                                                {comics.creators.items[0]?.name}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Link>
                            ))}
                        </Grid>
                    </Box>
                </>
            )}
        </>
    );
}
