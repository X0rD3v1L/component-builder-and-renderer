import React, { useCallback, useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ComponentRender from "../../../../component-renderer/component-render";

import "./modal.css";

function ModalPopup(props) {
  console.log(props, '==props')
  const [state, setState] = useState({ currentPage: 1, gridReady:false, pageSize:9 , show:true});
  const gridRef = useRef();

  const columnDefs = [{ headerName: "Form Name", field: "formName", width: "750px", }]
  const onGridReady = (params) => {
    console.log(params.api, 'Ongrid ready')
    
    setState({ ...state, gridApi: params.api, gridColumnApi: params.columnApi, gridReady:true })
  };
  const onPageSizeChanged = useCallback(() => {
    var value = document.getElementById('page-size').value;
    setState({ ...state, pageSize: Number(value) })
    gridRef.current.api.paginationSetPageSize(Number(value));
  }, []);

  const onPageChanged = (e) => {
    // var value = document.getElementById('current-page').value;
    setState({ ...state, currentPage: e.target.value })
    gridRef.current.api.paginationGoToPage(Number(e.target.value) - 1);
  }

  const onSelectionChanged = ((event) => {
    let selectedData = event.api.getSelectedRows();
    props.onHide(selectedData)
    console.log(selectedData, "selectedData--")
    // setState({ ...state, selectedRowData: selectedData })
  })
  const onClose=()=>{
    props.onHide()
  }
  const defaultColDef = { resizable: false, sortable: true, width: "90px", fontSize: "6px", }
  const getData=()=>{

  }
  return (
    <Modal
      show={state.show}
      onHide={onClose}
      backdrop="static"
      size="lg"
      aria-labelledby="example-modal-sizes-title-lg"
      data-testid="modal"
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title>
          <strong>{props.title}</strong>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {props.title === "Preview" ?  <ComponentRender renderData={props.jsondata} sendFormData={getData} refId="form3" />
          : (
            <div>
              {/* {JSON.stringify(props.body)} */}
              <div className="ag-grid-table-container ag-theme-alpine column-table mt-4 mb-5 form-search-grid">
                <AgGridReact rowHeight={40}
                  debug={true}
                  ref={gridRef}
                  headerHeight={30}
                  rowData={props.body}
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDef}
                  enableCellChangeFlash={true}
                  pagination={true}
                  paginationPageSize={9}
                  onGridReady={onGridReady}
                  rowSelection="single"
                  onSelectionChanged={onSelectionChanged}
                  data-testid="aggrid"
                  // paginationNumberFormatter={paginationNumberFormatter}
                >
                </AgGridReact>
             
                Current Page: <input type='number' id='current-page' value={state.currentPage} onChange={onPageChanged} min={1} data-testid="inputPage"/>
                <select onChange={onPageSizeChanged} value={state.pageSize} id="page-size">
                  <option value={9} >
                    9
                  </option>
                  <option value={18}>18</option>
                  <option value={27}>27</option>
                </select> Items per page
              </div>
            </div>
           
          )
        }
      </Modal.Body>
    </Modal>
  );
}

export default ModalPopup;
