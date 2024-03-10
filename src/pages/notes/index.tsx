import dynamic from "next/dynamic";
import { Card } from "@/components/elements/card";
import { Box, Button, Flex, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { Note } from "./interface";
import { useRouter } from "next/router";
import toast from 'react-hot-toast';
import { NotesApiResponse } from "./interface";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea,
  Text
} from '@chakra-ui/react'
import { useMutation } from "@/components/hooks/useMutation";


const LayoutComponent = dynamic(
  () => import('@/layout').then(mod => mod.Layout)
);

export default function Notes({ data }: NotesApiResponse) {
  const router = useRouter()
  const [notes, setNotes] = useState<Note[]>(data.data)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false)
  const [isModalAddOpen, setIsModalAddOpen] = useState<boolean>(false)
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false)
  const [id, setId] = useState<any>(undefined)

  const handleModalDeleteOpen = () => setIsModalDeleteOpen(!isModalDeleteOpen)
  const handleModalAddOpen = () => setIsModalAddOpen(!isModalAddOpen)
  const handleModalEditOpen = () => setIsModalEditOpen(!isModalEditOpen)

  const [notesAdd, setNotesAdd] = useState({
    title: "",
    description: ""
  })

  const HandleSubmit = async () => {
    try {
      const response = await fetch(
        `/api/addNotes`,
        {
          method: "POST",
          body: JSON.stringify({ title: notesAdd?.title, description: notesAdd?.description })
        })
      const result = await response.json();
      if (result?.success) {
        router.reload();
      }
      toast.success("Berhasil menambahkan notes")
    } catch (error) { }
  }


  const HandleEdit = async () => {
    try {
      const response = await fetch(
        `/api/editNotes/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify({ title: notesAdd?.title, description: notesAdd?.description })
        })
      const result = await response.json();
      if (result?.success) {
        router.reload();
      }
      toast.success("Berhasil mengubah notes")
    } catch (error) { }
  }

  const HandleDelete = async () => {
    try {
      const response = await fetch(
        `/api/deleteNotes/${id}`,
        {
          method: "DELETE",
        })
      const result = await response.json();
      if (result?.success) {
        router.reload();
      }
      console.log(result)
      toast.success("Berhasil menghapus notes")
    } catch (error) { }
  };

  return (
    <LayoutComponent metaTitle="Notes" metaDescription="Welcome to Raniaarn's App">
      <div className="px-2 pt-8 text-lg font-bold">
        Notes
      </div>
      <Box padding="5">
        <Flex justifyContent="end">
          <Button className="my-4" colorScheme="purple" onClick={handleModalAddOpen}>
            Add Notes
          </Button>
        </Flex>
        <Flex>
          <Grid templateColumns='repeat(3, 1fr)' gap={5}>
            {
              notes.map((item: Note) => (
                <GridItem key={item.id}>
                  <Card
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    deleteButton={true}
                    editButton={true}
                    onClickDelete={handleModalDeleteOpen}
                    onClickEdit={handleModalEditOpen}
                    setId={setId}
                    setNotesAdd={setNotesAdd}
                  />
                </GridItem>
              ))
            }
          </Grid>
        </Flex>
      </Box>

      <Modal isOpen={isModalDeleteOpen} onClose={handleModalDeleteOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Deletion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete this note?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleModalDeleteOpen}>
              Close
            </Button>
            <Button colorScheme="purple" onClick={HandleDelete}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isModalAddOpen || isModalEditOpen} onClose={isModalAddOpen ? handleModalAddOpen : handleModalEditOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Notes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <Grid gap={5}>
                <GridItem>
                  <Text>Title</Text>
                  <Input type="text" value={notesAdd?.title || ""} onChange={(event) => setNotesAdd({ ...notesAdd, title: event.target.value })} />
                </GridItem>
                <GridItem>
                  <Text>Description</Text>
                  <Textarea value={notesAdd?.description || ""} onChange={(event) => setNotesAdd({ ...notesAdd, description: event.target.value })} />
                </GridItem>
                <GridItem>
                </GridItem>
              </Grid>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleModalAddOpen}>
              Close
            </Button>
            <Button onClick={isModalAddOpen ? HandleSubmit : HandleEdit} colorScheme="purple">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LayoutComponent>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://paace-f178cafcae7b.nevacloud.io/api/notes');
  const data = await res.json()
  return { props: { data }, revalidate: 10 }
}