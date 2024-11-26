import React, { useEffect } from "react";
//importo la librería de informes
import MaterialTable from "@material-table/core";
//Importo la librería que nos permite exportar a CSV y PDF
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { Column } from "@material-table/core";
import { useState } from "react";
//Creo la interfaz para los tipos de los campos (field) de la tabla.
//La tabla tendrá los campos firstName: string, lastName: string, birthYear: number
interface coleccion {
 nombre: string;
 marca: string;
 tipo: string,
 precio: number;
}
function EjemploInforme(){
    const [tableData, setTableData] = useState([])
    async function fetchData() {
        fetch(`http://localhost:3030/getItems`)
          .then(response => response.json())
          .then(response => {
            console.log(response.data)
            setTableData(response.data)
          })
      };
      useEffect(() => {
        fetchData();
      }, []);

 const col: Array<Column<coleccion>> = [
 { title: "Nombre", field: "nombre" , filtering: true},
 { title: "Marca", field: "marca",filtering: true },
 { title: "Tipo", field: "tipo",filtering: false },
 { title: "Precio", field: "precio", type: "numeric",filtering: false }
 ];

return (
<MaterialTable columns={col} data={tableData} title={"Coleccion de tabla"}
renderSummaryRow={({ column, data }) =>
    column.field === "precio"
          ? {
              value: data.reduce((agg, row) => agg + row.precio, 0),
              style: { background: "#3c1cc9" },
            }
          : undefined
      } 
options={{
    draggable: true,
    columnsButton: true,
    filtering: true,
    rowStyle: {
        background:'#5f43d6',
        color:'white'
    },
    headerStyle: {
        backgroundColor: '#d66197',
        color: 'white'},
    exportMenu: [
        {
            label: "Exportar a PDF",
            exportFunc: (cols, datas) => ExportPdf(cols, datas, "myPdfFileName"),
            }, 
            {
                label: "Exportar a CSV",
                exportFunc: (cols, datas) => ExportCsv(cols, datas, "myCsvFileName"),
                },],
        }}/>

)
}
export default EjemploInforme