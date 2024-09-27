import { List, ListItem } from "@mui/material";
import NumberListItem from "./NumberListItem";

export type NumberListProps = {
  numbers: number[];
};

export default function NumberList({ numbers }: NumberListProps) {
  return (
    <List>
      {numbers.map((number) => (
        <ListItem key={number}>
          <NumberListItem number={number} />
        </ListItem>
      ))}
    </List>
  );
}
