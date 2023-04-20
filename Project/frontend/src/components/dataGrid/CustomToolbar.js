import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarFilterButton,
    GridToolbarColumnsButton,
  } from "@mui/x-data-grid";


const CustomToolbar = ({searchBar}) => {


  return (
    <div className="customToolbarRoot" style={{height: '50px', padding: '0 15px', display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
      <div className="left">
      <GridToolbarColumnsButton/>
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      </div>
      <div className="right">
        {searchBar}
      </div>
    </div>
  );
};

export default CustomToolbar;
