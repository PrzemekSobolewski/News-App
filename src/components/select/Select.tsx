import { FilterData } from "../../context/newsContext/news-context.types";
import { selectStyles } from "./Selects.styles";

type SelectProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  data: FilterData[];
  currentValue: string;
  label: string;
};

export const Select = ({
  id,
  data,
  onChange,
  currentValue,
  label,
}: SelectProps) => {
  return (
    <div css={selectStyles.selectContainer}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        css={selectStyles.select}
        value={currentValue}
        onChange={onChange}
      >
        {data.map((item) => {
          const { label, value } = item;
          return (
            <option key={value} css={selectStyles.option} value={value}>
              {label}
            </option>
          );
        })}
      </select>
      <i css={selectStyles.arrowDown}></i>
    </div>
  );
};
