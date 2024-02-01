import { Box, Grid, Image, Text } from "@chakra-ui/react";
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
            <Box maxW={"1280px"} margin={"auto"} px={20} mb={100} h={"100%"}>
                <Box>
                    <Text fontSize={"42px"} fontWeight={"600"}>
                        Marvel Comics
                    </Text>
                </Box>
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
                            <Box cursor={"pointer"} _hover={{ color: "red" }}>
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
        </>
    );
}
