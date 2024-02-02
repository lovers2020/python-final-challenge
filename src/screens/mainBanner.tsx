import { Box, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";

const ButtonBox = styled.div`
    width: 150px;
    height: 60px;
    background: linear-gradient(
                -45deg,
                transparent 15px,
                rgba(255, 255, 255, 0.4) 0
            )
            right,
        linear-gradient(135deg, transparent 15px, rgba(255, 255, 255, 0.4) 0)
            left;
    background-size: 50% 100%;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 3.5;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

export default function MainBanner() {
    return (
        <>
            <Center position={"relative"}>
                <Image
                    w={"100%"}
                    h={"500px"}
                    objectFit={"cover"}
                    filter={"auto"}
                    brightness={"40%"}
                    src="https://cdn.marvel.com/u/prod/marvel/i/mg/b/d0/65b2b4bc56bd1.jpg"
                />
                <VStack
                    gap={0}
                    position={"absolute"}
                    top={"80px"}
                    left={"400px"}
                    color={"white"}
                    align={"flex-start"}
                >
                    <Heading fontSize={"16px"} m={0}>
                        'IMMORTAL THOR'
                    </Heading>
                    <Text fontWeight={"600"} fontSize={"32px"}>
                        THE ROXXON AGE OF MARVEL COMICS BEGINS
                    </Text>
                    <a
                        href="https://www.marvel.com/articles/comics/roxxon-presents-thor-al-ewing-greg-land"
                        target="blank"
                    >
                        <ButtonBox>
                            <Text>Read Now!</Text>
                        </ButtonBox>
                    </a>
                </VStack>
            </Center>
        </>
    );
}
