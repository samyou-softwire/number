import {
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import RefreshIcon from "@mui/icons-material/Refresh";
import { FactCategory, numberQuery } from "../query";
import { useState } from "react";

export type NumberListItemProps = {
  number: number;
};

export default function NumberListItem(props: NumberListItemProps) {
  const queryClient = useQueryClient();
  const [category, setCategory] = useState<FactCategory>("trivia");

  const { data, error, fetchStatus } = useQuery(
    numberQuery(props.number, category),
  );

  if (fetchStatus === "fetching")
    return (
      <Skeleton width={"100%"}>
        <ListItem key={props.number}>
          <ListItemText primary={"fact"} secondary={"number"} />
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => {
              queryClient.invalidateQueries({
                queryKey: ["numberFact", props.number],
              });
            }}
          >
            <RefreshIcon />
          </IconButton>
        </ListItem>
      </Skeleton>
    );

  if (error)
    return (
      <ListItem key={props.number}>
        <ListItemText primary="error" />
      </ListItem>
    );

  return (
    <ListItem key={props.number}>
      <Grid container>
        <Grid item xs={7}>
          <ListItemText primary={data} secondary={props.number.toString()} />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Age"
              onChange={(e) => {
                setCategory(e.target.value as FactCategory);
              }}
            >
              <MenuItem value={"math"}>Math</MenuItem>
              <MenuItem value={"trivia"}>Trivia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            aria-label="comments"
            onClick={() => {
              queryClient.invalidateQueries({
                queryKey: ["numberFact", props.number],
              });
            }}
          >
            <RefreshIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
}
