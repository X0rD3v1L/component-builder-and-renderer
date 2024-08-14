import './properties-accordion.css';
import { Accordion } from "react-bootstrap";
import PropertiesAccordionBody from "../properties-accordion-body/properties-accordion-body";
import DataModalPopup from '../data-table-popup/data-table';

const PropertiesAccordion = (props) => {
    const { data, accordionName, index, jsonData } = props
    return (
        <div>
            <Accordion defaultActiveKey="0" className={(props.create ? "component-builder-accordion-create" : "component-builder-accordion")}>
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>{accordionName}</Accordion.Header>
                    <Accordion.Body>
                        {/* {accordionName === "Data" ?
                        <DataModalPopup data={jsonData} editIndex={props.editIndex}/>: */}
                        <PropertiesAccordionBody name={accordionName} data={data} jsonData={jsonData} editIndex={props.editIndex} create={props.create} customEleUpdated={props.customEleUpdated}/>
                        {/* } */}
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )   
}
export default PropertiesAccordion;