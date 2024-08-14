import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

const ValidationsCheckbox=()=>{


    return(
        <>
            <div>
                <ValidationsCheckbox />
                  <Form.Group className='d-flex mt-2 ps-3 pe-3'>
                  <Form.Label className="display-zone-label">
                      <span>{label}</span>
                  </Form.Label>
                  <Form.Check
                      type="checkbox"
                      name={name}
                      className="display-zone-checkbox"
                      checked={defaultValue}
                      data-testid="checkbox-input-check"
                      onChange={handleCheckboxChange}
                  />
              </Form.Group>
               {requiredChar&& <div>
                     <Form.Group className='d-flex mt-2 ps-3 pe-3'>
                        <Form.Label className="display-zone-label">
                            <span>{requiredCharacterObj.label}</span>
                        </Form.Label>
                        {console.log(type, name, defaultValue, "names props")}
                        <Form.Control type={requiredCharacterObj.type} name={requiredCharacterObj.name} value={defaultValue} data-testid="text-input-checkreq" className="display-zone-option" onChange={handleChange} required />
                    </Form.Group>
                </div> } 
                </div>  
        </>
    )
}
export default ValidationsCheckbox;