import { List, ListItem } from "@mui/material";
import NumberListItem from "./NumberListItem";

export default function NumberList() {
  const numbers = [44, 50, -295, 0, 13];

  return (
    <List>
      {numbers.map((number) => (
        <ListItem>
          <NumberListItem number={number} />
        </ListItem>
      ))}
    </List>
  );
}
