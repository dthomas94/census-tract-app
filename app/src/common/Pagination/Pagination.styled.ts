import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const StyledReactPaginate = styled(ReactPaginate)`
  padding: 0;
  height: 35px;
  width: 100%;

  .pagination-item,
  .next,
  .previous,
  .break {
    display: inline-block;
  }
  .pagination-link,
  .next,
  .previous,
  .break {
    cursor: pointer;
    min-width: 32px;
    padding: 0.375rem 0.75rem;
    border: 1px solid #dee2e6;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
    text-align: center;

    &:hover {
      color: #0a58ca;
      background-color: #e9ecef;
      border-color: #dee2e6;
    }

    &.active {
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
    }

    &.disabled {
      pointer-events: none;
      background-color: #b8a8a821;
    }
  }
`;
