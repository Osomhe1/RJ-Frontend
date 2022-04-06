import React, { useEffect } from 'react';
import { Box, Button, HStack, Icon, VStack, SimpleGrid } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import LoginHeader from './LoginHeader';
import BlogPostImg1 from './BlogPostImg1.jpg';
import axios from './axios';
import { useNavigate } from 'react-router-dom';

function Product(props) {
  const url = 'auth/me';

  let navigate = useNavigate();

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGJhNTRlNmY1ZTkxNzhhNjBlZmM0YiIsImlhdCI6MTY0OTIyNjE5MywiZXhwIjoxNjUxODE4MTkzfQ.Wg93Nm0_DAZWH4KmHwVPGr-1LRw-QFi0Xm0YIk4pGZM';



  useEffect(() => {
    axios
      .get(`${url}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('name')}, ${token}  `,
        },
      })
      .then(function (response) {
        // if (response.status !== 200) {
        // console.log(response, 'first res')
        redirectToLogin();
        //  console.log(response, 'second res');

        // }
      })
      .catch(function (error) {
        // redirectToLogin();
        // console.log(error);
      });
  });

  const redirectToLogin = () => {
    navigate('/Login');
  };

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
        <SimpleGrid
          d={{ base: 'grid', md:'grid',}}
          columns={[1, null, 2, null, 3]}
          spacing="20px"
          p={5}
        >
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

            bgImage={BlogPostImg1}
            // I tried calling the other image but it was not responding.
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
        </SimpleGrid>

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
            <HStack d={{ base: 'grid', lg: 'flex' }} columns={[1, null, 1, 2]}>
              <Box
                mb={{ base: 10, md: 2 }}
                w={450}
                borderRadius={16}
                h={300}
                bgPosition="center"
                bgRepeat="no-repeat"

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
                // mb={10}
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
            <HStack
              d={{ base: 'grid', lg: 'flex' }}
              columns={[1, null, 2]}
              p={3}
            >
              <Box
                mb={{ base: 10, md: 2 }}
                w={450}
                borderRadius={16}
                h={300}
                bgPosition="center"
                bgRepeat="no-repeat"

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
            <HStack
              p={3}
              d={{ base: 'grid', lg: 'flex' }}
              columns={[1, null, 1, 2]}
            >
              <Box
                mb={{ base: 10, md: 2 }}
                w={450}
                borderRadius={16}
                h={300}
                bgPosition="center"
                bgRepeat="no-repeat"

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
            <HStack
              p={3}
              d={{ base: 'grid', lg: 'flex' }}
              columns={[1, null, 1, 2]}
            >
              <Box
                mb={{ base: 10, md: 2 }}
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

export default Product;
