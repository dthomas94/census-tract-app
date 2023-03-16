import { Tract as TractType } from "../../types/Tract";

type TractProps = {
  data: TractType;
};
export const Tract = ({ data }: TractProps) => {
  return (
    <>
      <span>{data.NAMELSAD}</span>
    </>
  );
};
