import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export type NumberViewerProps = {
    number: number
}

export default function NumberViewer(props: React.PropsWithChildren<NumberViewerProps>) {
    const { data, error } = useQuery({
        queryKey: ["numberFact", props.number],
        async queryFn({ queryKey }) {
            const [, number] = queryKey;
            const res = await fetch(`http://numbersapi.com/${number}/trivia`);
            return await res.text()
        }
    });

    if (error) return <Typography>oh no! {error.message}</Typography>

    return <Box>
        <Typography>{data}</Typography>
    </Box>
}