import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";

export default function TitleImage({ images, gameTitle }) {
  //   console.log("images :>> ", typeof image);

  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {images &&
        images.map((image) => (
          <ImageListItem key={image.id}>
            <Typography>{gameTitle}</Typography>
            <img
              src={`${image.image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={gameTitle}
              loading="lazy"
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
}
