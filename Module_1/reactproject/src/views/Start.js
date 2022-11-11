import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import "../img/naruto.svg";

export default function StartPage() {
  const imagePath = "..img/naruto.svg";
  const imageAlt = "naruto";
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      <ImageListItem>
        <img
          src={`${imagePath}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${imagePath}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={imageAlt}
          loading="lazy"
        />
      </ImageListItem>
    </ImageList>
  );
}
