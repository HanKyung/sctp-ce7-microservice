import React from 'react'
import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Textarea, useDisclosure } from '@chakra-ui/react'
import { BiAddToQueue } from "react-icons/bi"


const CreateUserModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (<>
    <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
    </Button>
    <Modal
    isOpen={isOpen}
    onClose={onClose}
    >
    <ModalOverlay />
    <ModalContent>
        <ModalHeader> My new Peer 😍</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
                {/* left */}
                <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder="John Doe" />
                </FormControl>
                {/* right */}
                <FormControl>
                    <FormLabel>Role</FormLabel>
                    <Input placeholder="Software Engineer" />
                </FormControl>
                
            </Flex>

            <FormControl marginTop={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                    resize={"none"}
                    overflowY={"scroll"}
                    placeholder="He's a great guy who loves to build stuff."
                    />
            </FormControl>

            <RadioGroup mt={4}>
                <Flex gap={5}>
                    <Radio
                        value='male'
                        
                    >
                        Male
                    </Radio>
                    <Radio
                        value='female'
                        
                    >
                        Female
                    </Radio>
                </Flex>
            </RadioGroup>

        </ModalBody>
            
        <ModalFooter>
            <Button colorScheme='blue' mr={3}>
                Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>

        </ModalFooter>

    </ModalContent>



    </Modal>


    </>   
  )
}

export default CreateUserModal