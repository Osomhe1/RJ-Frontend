import React from 'react'
import {Box, Button, HStack,Icon, VStack } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons';
import LoginHeader from './LoginHeader'
import BlogPostImg1 from './BlogPostImg1.jpg'
// import BlogPostImg2 from './BlogPostImg2.jpg'
// import BlogPostImg2 from './BlogPostImg2.jpg'

export default function Blog() {
  return (
    <Box w="100%" bg="#F4F4F4">
      <Box>
        <LoginHeader />
      </Box>

      <Box bg="#F4F4F4">
        <HStack p={5}>
          <Icon
            as={ChevronUpIcon}
            h={38}
            w={38}
            borderRadius={50}
            color="#fff"
            bgColor="#BABABA"
          />
          <Box as="h4" color="#000000" fontSize={20} fontWeight={700}>
            Top Post
          </Box>
        </HStack>
        <HStack p={5}>
          <Box
            w={500}
            borderRadius={16}
            bgPosition="center"
            bgRepeat="no-repeat"
            h={300}
            bgImage={BlogPostImg1}
          >
            <Box
              bg="#636262"
              as="p"
              color="#fff"
              borderRadius={16}
              fontWeight={700}
              fontSize={18}
              w={400}
              opacity="50%"
              m="auto"
              p={5}
              mt={40}
            >
              Things you need to know to eat well and be healthy....
            </Box>
          </Box>
          <Box
            w={500}
            borderRadius={16}
            h={300}
            bgPosition="center"
            bgRepeat="no-repeat"
            // bgImage={BlogPostImg2}

            // bgImage="url('/image/BlogPostImg2.jpg')"
            bgImage={BlogPostImg1}
            // bgImage={BlogPostImg2}
          >
            <Box
              bg="#636262"
              as="p"
              color="#fff"
              borderRadius={16}
              fontWeight={700}
              fontSize={18}
              w={400}
              opacity="50%"
              m="auto"
              p={5}
              mt={40}
            >
              Things you need to know to eat well
            </Box>
          </Box>
          <Box
            w={500}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius={16}
            h={300}
            bgImage={BlogPostImg1}
          >
            <Box
              bg="#636262"
              as="p"
              color="#fff"
              borderRadius={16}
              fontWeight={700}
              fontSize={18}
              w={400}
              opacity="50%"
              m="auto"
              p={5}
              mt={40}
            >
              Things you need to know to eat well
            </Box>
          </Box>
        </HStack>

        <Box>
          <HStack p={5}>
            <Icon
              as={ChevronUpIcon}
              h={38}
              w={38}
              borderRadius={50}
              color="#fff"
              bgColor="#BABABA"
            />
            <Box as="h4" color="#000000" fontSize={20} fontWeight={700}>
              Trending
            </Box>
          </HStack>

          <VStack>
            <HStack>
              <Box
                w={450}
                borderRadius={16}
                h={300}
                bgPosition="center"
                bgRepeat="no-repeat"
                // bgImage={BlogPostImg2}

                //    bgImage="url('/image/BlogPostImg1.jpg')"
                bgImage={BlogPostImg1}
              >
                <Box
                  bg="#636262"
                  as="p"
                  color="#fff"
                  borderRadius={16}
                  fontWeight={700}
                  fontSize={18}
                  w={400}
                  opacity="50%"
                  m="auto"
                  p={5}
                  mt={40}
                >
                  Things you need to know to eat well
                </Box>
              </Box>
              <Box
                w={450}
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius={16}
                h={300}
                bgImage={BlogPostImg1}
              >
                <Box
                  bg="#636262"
                  as="p"
                  color="#fff"
                  borderRadius={16}
                  fontWeight={700}
                  fontSize={18}
                  w={400}
                  opacity="50%"
                  m="auto"
                  p={5}
                  mt={40}
                >
                  Things you need to know to eat well
                </Box>
              </Box>
            </HStack>
            <HStack p={5}>
              <Box
                w={450}
                borderRadius={16}
                h={300}
                bgPosition="center"
                bgRepeat="no-repeat"
                // bgImage={BlogPostImg2}

                //    bgImage="url('/image/BlogPostImg1.jpg')"
                bgImage={BlogPostImg1}
              >
                <Box
                  bg="#636262"
                  as="p"
                  color="#fff"
                  borderRadius={16}
                  fontWeight={700}
                  fontSize={18}
                  w={400}
                  opacity="50%"
                  m="auto"
                  p={5}
                  mt={40}
                >
                  Things you need to know to eat well
                </Box>
              </Box>
              <Box
                w={450}
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius={16}
                h={300}
                bgImage={BlogPostImg1}
              >
                <Box
                  bg="#636262"
                  as="p"
                  color="#fff"
                  borderRadius={16}
                  fontWeight={700}
                  fontSize={18}
                  w={400}
                  opacity="50%"
                  m="auto"
                  p={5}
                  mt={40}
                >
                  Things you need to know to eat well
                </Box>
              </Box>
            </HStack>
            <HStack p={5}>
              <Box
                w={450}
                borderRadius={16}
                h={300}
                bgPosition="center"
                bgRepeat="no-repeat"
                // bgImage={BlogPostImg2}

                //    bgImage="url('/image/BlogPostImg1.jpg')"
                bgImage={BlogPostImg1}
              >
                <Box
                  bg="#636262"
                  as="p"
                  color="#fff"
                  borderRadius={16}
                  fontWeight={700}
                  fontSize={18}
                  w={400}
                  opacity="50%"
                  m="auto"
                  p={5}
                  mt={40}
                >
                  Things you need to know to eat well
                </Box>
              </Box>
              <Box
                w={450}
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius={16}
                h={300}
                bgImage={BlogPostImg1}
              >
                <Box
                  bg="#636262"
                  as="p"
                  color="#fff"
                  borderRadius={16}
                  fontWeight={700}
                  fontSize={18}
                  w={400}
                  opacity="50%"
                  m="auto"
                  p={5}
                  mt={40}
                >
                  Things you need to know to eat well
                </Box>
              </Box>
            </HStack>
            <HStack p={5}>
              <Box
                w={450}
                borderRadius={16}
                h={300}
                bgPosition="center"
                bgRepeat="no-repeat"
                // bgImage={BlogPostImg2}

                //    bgImage="url('/image/BlogPostImg1.jpg')"
                bgImage={BlogPostImg1}
              >
                <Box
                  bg="#636262"
                  as="p"
                  color="#fff"
                  borderRadius={16}
                  fontWeight={700}
                  fontSize={18}
                  w={400}
                  opacity="50%"
                  m="auto"
                  p={5}
                  mt={40}
                >
                  Things you need to know to eat well
                </Box>
              </Box>
              <Box
                w={450}
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius={16}
                h={300}
                bgImage={BlogPostImg1}
              >
                <Box
                  bg="#636262"
                  as="p"
                  color="#fff"
                  borderRadius={16}
                  fontWeight={700}
                  fontSize={18}
                  w={400}
                  opacity="50%"
                  m="auto"
                  p={5}
                  mt={40}
                >
                  Things you need to know to eat well
                </Box>
              </Box>
            </HStack>
            <Box fontWeight={700} fontSize={23} fontFamily="Chalkboard SE">
              <Button
                pt={4}
                borderRadius={16}
                w={400}
                color="#fff"
                bgColor="#EA7052"
              >
                Load More
              </Button>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
