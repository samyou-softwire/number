import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";
import { useState } from "react";

export type NumberAdderProps = {
  addNumberToList(number: number): void;
  numberExistsInList(number: number): boolean;
};

const NumberAdder = ({
  addNumberToList,
  numberExistsInList,
}: NumberAdderProps) => {
  const [number, setNumber] = useState(0);

  const onClickAdd = () => {
    if (!numberExistsInList(number)) {
      addNumberToList(number);
    }
  };

  return (
    <Box>
      <FormControl>
        <InputLabel htmlFor="add-number">Add new number</InputLabel>
        <Input
          type="number"
          id="add-number"
          aria-describedby="my-helper-text"
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </FormControl>
      <Button type="submit" onClick={onClickAdd} id="add-button">
        Add
      </Button>
    </Box>
  );
};

export default NumberAdder;
