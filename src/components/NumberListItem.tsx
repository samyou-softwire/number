import { IconButton, ListItem, ListItemText, Skeleton } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import RefreshIcon from "@mui/icons-material/Refresh"

export type NumberListItemProps = {
    number: number
}

export default function NumberListItem(props: NumberListItemProps) {
    const queryClient = useQueryClient();

    const { data, error, fetchStatus } = useQuery({
        queryKey: ["numberFact", props.number],
        async queryFn({ queryKey }) {
            const [, number] = queryKey;
            const res = await fetch(`http://numbersapi.com/${number}/trivia`);
            return await res.text()
        }
    });

    if (fetchStatus === 'fetching') return <Skeleton width={"100%"}>
        <ListItem key={props.number}>
            <ListItemText primary={"fact"} secondary={"number"}/>
            <IconButton edge="end" aria-label="comments" onClick={() => {
                queryClient.invalidateQueries({queryKey: ["numberFact", props.number]})
            }}>
                <RefreshIcon/>
            </IconButton>
        </ListItem>
    </Skeleton>

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