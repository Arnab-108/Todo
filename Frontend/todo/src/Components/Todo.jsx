import React, { useState, useEffect } from "react";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Icon,
  Image,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { EditModal } from "./EditModal";
const Todo = () => {
  const [data, setData] = useState([]);
  const [title, setNewTitle] = useState("");
  const [description, setNewDescription] = useState("");
  const token = localStorage.getItem("token")
  const name = localStorage.getItem("user")
  const toast = useToast();
  
  const navigate = useNavigate()
  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    axios.get("http://localhost:8080/todo/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setData(res.data.todos)
    })
      .catch((err) => {
        console.log("Something went wrong!")
      })
  };
  const options = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const createTodo = () => {
    const obj = {
      title,
      description,
    }

    axios.post("http://localhost:8080/todo/add", obj, options).then((res) => {
      console.log(res)
      toast({
        title: `Todo Added!`,
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      setNewTitle("")
      setNewDescription("")
      getData()

    }).catch((err) => {
      alert(err)
    })
  }


  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/todo/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      toast({
        title: `Todo Removed!`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      getData()
    }).catch((err) => {
      alert(err)
    })
  }
  console.log(data)

  const handleLogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/")
  }
  return (
    <>
    {
      token ? 
      <>
      <HStack margin={"auto"} gap={"40vh"} align={"center"} justifyContent={"center"}>
        <Heading mt={"5vh"}>Welcome {name}</Heading>
        <Button
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </HStack>
      <div className="todo-app">
        <h1>Todo App</h1>
        <form
          className="todo-form"
          onSubmit={(e) => {
            e.preventDefault();
            createTodo();
          }}
        >
          <input
            type="text"
            className="todo-input"
            value={title}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Add a new title"
          />
          <input
            type="text"
            className="todo-input"
            value={description}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Add a new description"
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </form>
        <TableContainer>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Complete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                data?.map((el) => (

                  <Tr key={el._id}>
                    <Td>{el.title}</Td>
                    <Td>{el.description}</Td>
                    <Td>{el.completed ? "Done" : "Not Done"}</Td>
                    <Td>
                      <Center>
                        {/* <Link to={`/admin/${el.id}`}> */}
                        {/* <Button
                            colorScheme="green"
                          > */}
                        <EditModal
                          id={el._id}
                          getData={getData}
                        />
                        {/* </Button> */}
                        {/* </Link> */}
                      </Center>
                    </Td>
                    <Td>
                      <Center>
                        <Button
                          colorScheme="red"
                          onClick={() => handleDelete(el._id)}
                        >
                          <AiOutlineDelete />
                        </Button>
                      </Center>
                    </Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      </> :
      alert("Login First" , navigate("/"))
    }
    </>
  );
};

export default Todo;
