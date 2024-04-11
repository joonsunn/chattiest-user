import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function FreeSoloAutoComplete({ options, ...props }) {
  return (
    <Autocomplete
      freeSolo
      id="freesolo-autocomplete"
      disableClearable
      options={options.map((option) => option.toString())}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Top # chattiest users"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
      sx={{
        width: "180px",
      }}
      {...props}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
