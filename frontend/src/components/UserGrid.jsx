
import { Flex, Grid, Spinner, Text } from '@chakra-ui/react'
//import {USERS} from '../dummy/dummy'
import UserCard from './UserCard'
import { useEffect, useState } from 'react'


const UserGrid = ({users, setUsers}) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      try{
        const res = await fetch("http://127.0.0.1:5000/api/friends")
        const data = await res.json()

        // if api call not ok
        if(!res.ok){
          throw new Error(data.error)
        }
        // if api call is ok
        setUsers(data)

      } catch (error){
        console.error(error)

      } finally {
        setIsLoading(false)
      }


    }
    getUsers()

  },[setUsers])
  return (
  <>
    <Grid 
    templateColumns={{
        base:"1fr",
        md: "repeat(2, 1fr)",
        lg:"repeat(3, 1fr)",
    }}
    gap={4}>

        {/* static data {USERS.map((user) */}
        {users.map((user) => (
            <UserCard key = {user.id} user={user} />
        ))}

    </Grid>

    {isLoading && (
      <Flex justifyContent={"center"}>
        <Spinner size={"x1"} />
      </Flex>
    )}
    {!isLoading && users.length === 0 && (
      <Flex justifyContent={"center"}>
        <Text fonSize={"x1"}>
          <Text as={"span"} fontSize={"2x1"} fontWeight={"bold"} mr={2}>
            No friends found! 😐
          </Text>
          Let's start adding some friends
        </Text>
      </Flex>
    )}
    </> 

    
  )
}

export default UserGrid