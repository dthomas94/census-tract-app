import Card from "@mui/material/Card";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
  .card-heading {
    font-size: 18px;
    line-height: 28px;
    color: #4a5255;
    font-weight: 600;
    font-family: "Gotham", sans-serif;
  }

  p {
    font-family: "Gotham", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #919698;
  }
`;
