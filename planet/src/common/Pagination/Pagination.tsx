import Grid from "@mui/material/Grid";
import { useState } from "react";
import { TractCard } from "../Tract/TractCard";
import { StyledReactPaginate } from "./Pagination.styled";

type PaginationProps = {
  items: any[];
  itemsPerPage?: number;
};

export const Items = ({
  currentItems,
}: {
  currentItems: PaginationProps["items"];
}) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <Grid key={item.fid} item className="tracts" xs>
            <TractCard key={item.fid} data={item} />
          </Grid>
        ))}
    </>
  );
};

export const Pagination = ({ items, itemsPerPage = 20 }: PaginationProps) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <StyledReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        className="pagination-container"
        pageLinkClassName="pagination-link"
        pageClassName="pagination-item"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        activeLinkClassName="pagination-link active"
        renderOnZeroPageCount={() => null}
      />
    </>
  );
};
