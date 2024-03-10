import dynamic from "next/dynamic";
import {
  Grid,
  GridItem,
  Text,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LayoutComponent = dynamic(
  () => import('@/layout').then(mod => mod.Layout)
);

export default function EditNotes() {
  const router = useRouter();
  const { id } = router?.query;
  const [notes, setNotes] = useState({
    title: "",
    description: ""
  })

  const HandleSubmit = async () => {
    try {
      const response = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: notes?.title, description: notes?.description }),
        }
      );
      const result = await response.json();
      console.log(result)
    } catch (error) { }
  };

  useEffect(() => {
    async function fetchingData() {
      const res = await fetch(`https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`);
      const listNotes = await res.json();
      setNotes(listNotes?.data)
    }
    fetchingData();
  }, [id]);

  return (
    <>
      <LayoutComponent metaTitle="Notes" metaDescription="Welcome to Raniaarn's App">
        <div className="px-2 pt-8 text-lg font-bold">
          Notes
        </div>
        <div>
          <Grid gap={5}>
            <GridItem>
              <Text>Title</Text>
              <Input
                type="text"
                value={notes?.title || ""}
                onChange={(event) => setNotes({ ...notes, title: event.target.value })}
              />
            </GridItem>
            <GridItem>
              <Text>Description</Text>
              <Textarea
                value={notes?.description || ""}
                onChange={(event) => setNotes({ ...notes, description: event.target.value })}
              />
            </GridItem>
            <GridItem>
              <Button onClick={() => HandleSubmit()} colorScheme="purple">Submit</Button>
            </GridItem>
          </Grid>
        </div>
      </LayoutComponent>
    </>
  );
}