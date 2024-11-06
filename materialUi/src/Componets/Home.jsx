import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { SearchItemsContext } from "../Usecontext/useContext";
import { Avatar, Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import Photoshop from "./Card";

function Home() {
  const { search } = useContext(SearchItemsContext);
  const [Images, setImages] = useState([]);
  const [Loader, setLoader] = useState(true);
  const [Model, setModel] = useState(false);
  const [chosen, setChosen] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos?page=1&client_id=zJ5G5CmSdk0UHuUSMLsbvXQBAAR4vw1CfUH9K5_p3tI"
      )
      .then((res) => setImages(res.data))
      .then(() => setLoader(false))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (search) {
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=zJ5G5CmSdk0UHuUSMLsbvXQBAAR4vw1CfUH9K5_p3tI`
        )
        .then((res) => setImages(res.data.results))
        .then(() => setLoader(false))
        .catch((err) => console.log(err));
    }
  }, [search]);

  // console.log(Images);

  return (
    <>

      <Modal
        className="rounded-lg border-2 border-green-400"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        open={Model}
        onClose={() => setModel(false)}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Ensure that both img elements are wrapped in a single parent container */}
          <>
            <img src={chosen?.urls?.small} alt="" />
            
          </>
        </Box>
      </Modal>
  
      <div> 
        <ImageList
          className="imageList"
          sx={{
            width: '90%',
            height: 'auto',
            margin: 'auto',
            marginTop: '20px',
            border: 2,
            borderColor: 'red'
          }}
          cols={3}
          gap={8}
        >
          {
          Loader ? (
            <h1 className="text-3xl text-red-500">Loading...</h1>
          ) : (
            Images.map((item) => (
            <Photoshop key={item.id} item={item} />
            ))
          )}
        </ImageList>
      </div>
    </>
  );
  }

export default Home;
