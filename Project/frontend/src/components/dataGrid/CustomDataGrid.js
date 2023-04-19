import React from 'react'

import { DataGrid } from "@mui/x-data-grid";
import CustomToolbar from "./CustomToolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import './customDataGrid.scss'

const customTheme = createTheme({
    palette: {
      primary: {
        main: "#9980FA"
      }
    }
});

function CustomDataGrid({data, columns}) {
  return (
    <ThemeProvider theme={customTheme}>
        <DataGrid
            className="customDataGrid"
            rows={data}
            columns={columns}
            pageSize={10}
            checkboxSelection
            components={{
                Toolbar: (props) => (
                    <CustomToolbar {...props} searchBar={<SearchBar />} />)
            }}
            getRowClassName={() => "grid-cell"}
        />
    </ThemeProvider>
  )
}

export default CustomDataGrid

const SearchBar = () => {

    const [search, setSearch] = useState('')

    console.log(search)

    const handleSearch = (e) => {
        e.preventDefault()
        alert(search)
    }

    return(
        <form>
            <input type="text" value={search} placeholder="search" onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </form>
    )
}