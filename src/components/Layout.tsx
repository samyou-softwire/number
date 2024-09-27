import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import NumberList from "./NumberList";
import { useState } from "react";
import NumberAdder from "./NumberAdder";

export default function Layout() {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addNumberToList = (number: number) => {
    setNumbers((oldNumbers) => [...oldNumbers, number]);
  };

  const numberExistsInList = (number: number) => {
    return numbers.includes(number);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography>Number Facts & Trivia Generator</Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={8}>
          <NumberAdder
            addNumberToList={addNumberToList}
            numberExistsInList={numberExistsInList}
          />
          <NumberList numbers={numbers} />
        </Grid>
        <Grid item xs={0} md={2} />
      </Grid>
    </>
  );
}
