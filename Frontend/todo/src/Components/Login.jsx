import React, { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom';
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleLogin = () => {
        const obj = {
            email,
            password
        }
        axios.post("http://localhost:8080/user/login", obj).then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", res.data.user.name)
            alert("Login Successfull!")
            navigate("/todo")
        })
            .catch((err) => {
                console.log(err)
            })
    }

    // const responseGoogle = (res) => {
    //     console.log(res)
    // }

    // const responseError = (err) => {
    //     console.log(err)
    // }
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
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
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
                                onClick={handleLogin}
                            >
                                Sign in
                            </Button>
                            {/* <GoogleOAuthProvider clientId='589959859226-g0ilanvmhl5sd6fqa42i5t7t1aa60mt2.apps.googleusercontent.com'>
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        console.log(credentialResponse);
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />;
                            </GoogleOAuthProvider> */}
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}
