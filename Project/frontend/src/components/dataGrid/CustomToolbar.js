import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarColumnsButton,
  } from "@mui/x-data-grid";


const CustomToolbar = ({searchBar}) => {


  return (
    <div className="customToolbarRoot" style={{height: '50px', display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
      <div className="left">
      <GridToolbarColumnsButton/>
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
