import { useState } from 'react'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Checkbox,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name , setName] = useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate()
    const handleClick = ()=>{
        const obj={
            name,
            email,
            password,
            age
        }
        console.log(obj)
        axios.post("http://localhost:8080/user/signup",obj).then((res)=>{
            console.log(res)
            alert("Signup Successfull!")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                    <FormControl id="name">
                            <FormLabel>Name</FormLabel>
                            <Input type="text" 
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" 
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" 
                                value={password}
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                        </FormControl>
                        <FormControl id="age">
                            <FormLabel>Number</FormLabel>
                            <Input type="number" 
                                value={age}
                                onChange={(e)=>{setAge(e.target.value)}}
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={'blue.400'}>Forgot password?</Text>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={handleClick}
                                >
                                Sign Up
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
  )
}