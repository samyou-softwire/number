import { ListItem, ListItemText } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export type NumberListItemProps = {
    number: number
}

export default function NumberListItem(props: NumberListItemProps) {
    const { data, error, isPending } = useQuery({
        queryKey: ["numberFact", props.number],
        async queryFn({ queryKey }) {
            const [, number] = queryKey;
            const res = await fetch(`http://numbersapi.com/${number}/trivia`);
            return await res.text()
        }
    });

    if (isPending) return <ListItem>
        <ListItemText primary="loading"/>
    </ListItem>

    if (error) return <ListItem>
        <ListItemText primary="error"/>
    </ListItem>

    return <ListItem>
        <ListItemText primary={data} secondary={props.number.toString()}/>
    </ListItem>
}