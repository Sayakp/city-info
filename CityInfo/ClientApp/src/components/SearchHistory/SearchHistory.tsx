import React from "react";
import useHistory from "../../hooks/useHistory";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SearchHistory = () => {
  const { history } = useHistory();
  return (
    <Box alignItems="center" justifyContent={"center"} display={"flex"}>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Search History
        </Typography>
        <List dense={true}>
          {[...history].reverse().map((query, index) => (
            <ListItem key={`hls_${query.id}`}>
              <ListItemText
                primary={`${query.city}`}
                secondary={`${query.queryTime}`}
                key={`hs_${index}`}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Box>
  );
};

export default SearchHistory;
