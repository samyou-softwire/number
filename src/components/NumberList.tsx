import { List, ListItem } from "@mui/material";
import NumberListItem from "./NumberListItem";

export default function NumberList() {
    const numbers = [1, 2, 3, 4];

    return <List>
        {numbers.map(number => <ListItem>
            <NumberListItem number={number}/>
        </ListItem>)};
    </List>
}
