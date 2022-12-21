import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import filters from "./filters";

export default function SelectBox({ setSelectedFilters, selectedFilters }) {
  const handleChange = (event) => {
    setSelectedFilters(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedFilters || ""}
          label="filters"
          onChange={handleChange}
        >
          {filters?.map((filter) => (
            <MenuItem key={filter} value={filter}>
              {filter}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
