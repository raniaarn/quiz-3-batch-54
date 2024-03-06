import dynamic from "next/dynamic";
import { Card } from "@/components/elements/card";
import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Note } from "./interface";
import { useRouter } from "next/router";

const LayoutComponent = dynamic(
  () => import('@/layout').then(mod => mod.Layout)
);

export default function Notes() {
  const router = useRouter()
  const [notes, setNotes] = useState<Note[]>([])

  const HandleDelete = async (id: any) => {
    try {
      const response = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${id}`,
        {
          method: "DELETE",
        })
      const result = await response.json();
      if (result?.success) {
        router.reload();
      }
    } catch (error) { }
  };

  useEffect(() => {
    async function fetchingData() {
      const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes")
      const listNotes = await res.json();
      setNotes(listNotes)
    }
    fetchingData();
  }, [])

  return (
    <LayoutComponent metaTitle="Notes" metaDescription="Welcome to Raniaarn's App">
      <div className="px-2 pt-8 text-lg font-bold">
        Notes
      </div>
      <Box padding="5">
        <Flex justifyContent="end">
          <Button className="my-4" colorScheme="purple" onClick={() => router.push('/notes/add')}>
            Add Notes
          </Button>
        </Flex>
        <Flex>
          <Grid templateColumns='repeat(3, 1fr)' gap={5}>
            {
              notes?.data?.map((item: Note) => (
                <GridItem>
                  <div key={item.id}>
                    <Card
                      title={item.title}
                      description={item.description}
                      deleteButton={true}
                      editButton={true}
                      onClickDelete={() => HandleDelete(item?.id)}
                      onClickEdit={() => router.push(`/notes/edit/${item?.id}`)}
                    >

                    </Card>
                  </div>
                </GridItem>
              ))
            }
          </Grid>
        </Flex>
      </Box>
    </LayoutComponent>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('https://paace-f178cafcae7b.nevacloud.io/api/notes');
//   const data = await res.json()
//   return { props: { data }, revalidate: 10 }
// }