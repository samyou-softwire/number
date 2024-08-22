import { IconButton, ListItem, ListItemText } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import RefreshIcon from "@mui/icons-material/Refresh"

export type NumberListItemProps = {
    number: number
}

export default function NumberListItem(props: NumberListItemProps) {
    const queryClient = useQueryClient();

    const { data, error, isPending } = useQuery({
        queryKey: ["numberFact", props.number],
        async queryFn({ queryKey }) {
            const [, number] = queryKey;
            const res = await fetch(`http://numbersapi.com/${number}/trivia`);
            return await res.text()
        }
    });

    if (isPending) return <ListItem key={props.number}>
        <ListItemText primary="loading"/>
    </ListItem>

    if (error) return <ListItem key={props.number}>
        <ListItemText primary="error"/>
    </ListItem>

    return <ListItem key={props.number}>
        <ListItemText primary={data} secondary={props.number.toString()}/>
        <IconButton edge="end" aria-label="comments" onClick={() => {
            queryClient.invalidateQueries({queryKey: ["numberFact", props.number]})
        }}>
            <RefreshIcon/>
        </IconButton>
    </ListItem>
}