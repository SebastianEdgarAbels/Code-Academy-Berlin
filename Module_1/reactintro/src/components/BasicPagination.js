import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ getPaginationInput }) {
  console.log("getPaginationInput :>> ", getPaginationInput);
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        onChange={(e) => {
          // console.log(e.target.innerText);
          getPaginationInput(e.target.innerText);
        }}
      />
    </Stack>
  );
}
