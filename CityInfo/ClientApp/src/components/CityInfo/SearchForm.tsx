import React, { Dispatch } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useField from "../../hooks/useField";

interface ISearchBarProps {
  setCityQuery: Dispatch<string>;
}

const SearchForm = ({ setCityQuery }: ISearchBarProps) => {
  const countryInput = useField("text");

  return (
    <Paper
      component={"form"}
      variant={"outlined"}
      sx={{
        my: { xs: 3, md: 6 },
        p: { xs: 2, md: 3 },
        alignItems: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        setCityQuery(countryInput.value);
      }}
    >
      <Typography variant="h5" textAlign="center">
        Search City
      </Typography>
      <TextField
        required
        fullWidth
        style={{ margin: "5px" }}
        {...countryInput}
      />
      <Button fullWidth variant="contained" type="submit">
        Search
      </Button>
    </Paper>
  );
};

export default SearchForm;
