import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    useToast,
  } from '@chakra-ui/react'
import { AiTwotoneEdit } from 'react-icons/ai'
import axios from 'axios'

export const EditModal = ({id,getData}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData] = useState("")
    const toast = useToast();
    const token = localStorage.getItem("token")
    console.log(id)
    useEffect(()=>{
        singleData()
    },[])


    const handlechange=(e)=>{
        const {name,value} = e.target
        console.log(value,"value")
        setData(prev=>{
            return {...prev , [name]:value}
        })
    }
    
    const singleData = async()=>{
        axios.get(`http://localhost:8080/todo/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res)=>{
            console.log(res)
            setData(res.data)
        })
        .catch((err)=>{
            alert(err)
        })
    }
    const options={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const handlePatch=()=>{
        axios.patch(`http://localhost:8080/todo/${id}`,data,options)
        .then((res)=>{
            toast({
                title: `Edited Successfully!`,
                status: "success",
                duration: 1000,
                isClosable: true,
              });
            getData()
        })
        .catch((err)=>{
            alert(err)
        })
    }

    console.log(data)
    return (
        <div>
            <Button colorScheme="green" onClick={onOpen}><AiTwotoneEdit /></Button> 

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input type='text' name="completed" value={data.completed} 
                        onChange={handlechange} 
                        />
                        <Button 
                        onClick={handlePatch} 
                        position={"relative"} top={"2vh"} colorScheme='blue' >Edit</Button>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
