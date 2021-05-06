import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import logotienda from '../../assets/logotienda.jpg';
import { useHistory } from 'react-router-dom';

function Main(){

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'namberArticle', headerName: 'Articulo', width: 130 },
    { 
        field: 'relevancia', 
        headerName: 'Relevancia', 
        type: 'number',
        width: 130 
      },
      { 
          field: 'precio', 
          headerName: 'Precio', 
          type: 'number',
          width: 130 
        },
        { field: 'namberMaker', headerName: 'Fabricante', width: 130 },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  //   },
  ];
  
  const rows = [
    { id: 1, namberArticle: 'Air Jordan 1 Mid', relevancia: '10', precio: 120 , namberMaker:'Nike'},
    { id: 2, namberArticle: 'Gazelle', relevancia: '5', precio: 60, namberMaker: "Adidas"},
    { id: 3, namberArticle: 'Nike Blazer Mid 77 Vintage', relevancia: '8', precio: 99, namberMaker:'Nike'},
    { id: 4, namberArticle: 'Ultraboost 20', relevancia: '10', precio: 180, namberMaker:"Adidas"},
    { id: 5, namberArticle: 'Nike Downshifter 11', relevancia: '5', precio: 59, namberMaker: 'Nike'},
    { id: 6, namberArticle: 'SpeedCross 3 RACING', relevancia: 8, precio: 140, namberMaker: "Salomon"},
    { id: 7, namberArticle: 'Nike ZoomX Vaporfly', relevancia: '10', precio: 250, namberMaker: 'Nike'},
    { id: 8, namberArticle: 'X Ultra 4 GORE-TEX', relevancia: '10', precio: 270, namberMaker:"Salomon"},
    { id: 9, namberArticle: 'Superstar ', relevancia: '8', precio: 70, namberMaker:"Adidas"},
    { id: 10, namberArticle: 'XT-4 Advanced', relevancia: '10', precio: 185, namberMaker:"Salomon"},
    {id: 11, namberArticle: 'Air Jordan 1 Mid', relevancia: '10', precio: 120 , namberMaker:'Nike'},
    { id: 12, namberArticle: 'Gazelle', relevancia: '5', precio: 60, namberMaker: "Adidas"},
    { id: 13, namberArticle: 'Nike Blazer Mid 77 Vintage', relevancia: '8', precio: 99, namberMaker:'Nike'},
    { id: 14, namberArticle: 'Ultraboost 20', relevancia: '10', precio: 180, namberMaker:"Adidas"},
    { id: 15, namberArticle: 'Nike Downshifter 11', relevancia: '5', precio: 59, namberMaker: 'Nike'},
    { id: 16, namberArticle: 'SpeedCross 3 RACING', relevancia: 8, precio: 140, namberMaker: "Salomon"},
    { id: 17, namberArticle: 'Nike ZoomX Vaporfly', relevancia: '10', precio: 250, namberMaker: 'Nike'},
    { id: 18, namberArticle: 'X Ultra 4 GORE-TEX', relevancia: '10', precio: 270, namberMaker:"Salomon"},
    { id: 19, namberArticle: 'Superstar ', relevancia: '8', precio: 70, namberMaker:"Adidas"},
    { id: 20, namberArticle: 'XT-4 Advanced', relevancia: '10', precio: 185, namberMaker:"Salomon"},
  ];
  const history = useHistory();
  const handleClick= (row)=>{
    history.push(`/${row.row.namberMaker}`);
      console.log(row)  
  }
    return(

      <div className="main-main">
      <div style={{ height: 400, width: '100%' }}>
        <div className="text-name">
        <div className="imagen-logosalomon">
                    <img src={logotienda} alt="TiendaOnline" id="imagen-logotienda"></img>
                </div>
            
        </div>
      <DataGrid onRowClick={(GridRowParams)=>{handleClick(GridRowParams)}
        
      } 
      rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
    </div>
    )
}

export default Main;
// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'namberArticle', headerName: 'Articulo', width: 130 },
//   { 
//       field: 'relevancia', 
//       headerName: 'Relevancia', 
//       type: 'number',
//       width: 130 
//     },
//     { 
//         field: 'precio', 
//         headerName: 'Precio', 
//         type: 'number',
//         width: 130 
//       },
//       { field: 'namberMaker', headerName: 'Fabricante', width: 130 },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//   },


// const rows = [
//   { id: 1, namberArticle: 'Air Jordan 1 Mid', relevancia: '10', precio: 120 , namberMaker:'Nike'},
//   { id: 2, namberArticle: 'Gazelle', relevancia: '5', precio: 60, namberMaker: "Adidas"},
//   { id: 3, namberArticle: 'Nike Blazer Mid 77 Vintage', relevancia: '8', precio: 99, namberMaker:'Nike'},
//   { id: 4, namberArticle: 'Ultraboost 20', relevancia: '10', precio: 180, namberMaker:"Adidas"},
//   { id: 5, namberArticle: 'Nike Downshifter 11', relevancia: '5', precio: 59, namberMaker: 'Nike'},
//   { id: 6, namberArticle: 'SpeedCross 3 RACING', relevancia: 8, precio: 140, namberMaker: "Salomon"},
//   { id: 7, namberArticle: 'Nike ZoomX Vaporfly', relevancia: '10', precio: 250, namberMaker: 'Nike'},
//   { id: 8, namberArticle: 'X Ultra 4 GORE-TEX', relevancia: '10', precio: 270, namberMaker:"Salomon"},
//   { id: 9, namberArticle: 'Superstar ', relevancia: '8', precio: 70, namberMaker:"Adidas"},
//   { id: 10, namberArticle: 'XT-4 Advanced', relevancia: '10', precio: 185, namberMaker:"Salomon"},
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
//     </div>
//   );
// }
