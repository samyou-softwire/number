import { Box, Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";

export type NumberViewerProps = {}

export default function NumberViewer(_props: React.PropsWithChildren<NumberViewerProps>) {
    const { data, error } = useQuery({
        queryKey: ["repoData"],
        async queryFn() {
            const res = await fetch("http://numbersapi.com/40/trivia");
            return await res.text()
        }
    })



    if (error) return <Typography>oh no! {error.message}</Typography>

    return <Box>
        <Typography>{data}</Typography>
    </Box>
}