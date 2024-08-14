import "./properties-zone.css";
import React, { useEffect, useState } from "react";
import { formUIElements } from "./properties-constants";
import PropertiesAccordion from "./properties-accordion/properties-accordion";
import store from "../../../component-renderer/store";
import { connect } from "react-redux";
import { Accordion } from "react-bootstrap";
import PropertiesConditions from "../properties-zone/properties-conditions/properties-conditions";
import PropertiesConditionsSum from "../properties-zone/properties-conditions-sum/properties-conditions-sum";

const PropertiesZone = (props) => {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    setJsonData(store.getState().renderData);
  }, [store.getState().renderData]);

  const formUIElementsData = Object.keys(
    formUIElements[props.draggedElement.settings.type]
  );
  const jsonIndex = props.editIndex
    ? parseInt(props.editIndex)
    : jsonData.length - 1;
  const jsonDatas = props.create
    ? props.renderData
    : store.getState().renderData;
  return (
    <>
      <div>
        {formUIElementsData.map((eachFormUIElement, index) => {
          return (
            <PropertiesAccordion
              data={
                formUIElements[props.draggedElement.settings.type][
                  eachFormUIElement
                ]
              }
              accordionName={eachFormUIElement}
              index={index}
              jsonData={jsonDatas}
              editIndex={props.editIndex}
              create={props.create}
              customEleUpdated={props.customEleUpdated}
            />
          );
        })}
      </div>
      <Accordion
        className={
          props.create
            ? "component-builder-accordion-create"
            : "component-builder-accordion"
        }
      >
        {jsonData.length > 0 &&
          jsonData[jsonIndex].settings.type !== "formula" && (
            <Accordion.Item eventKey="1">
              <Accordion.Header>Conditions</Accordion.Header>
              <Accordion.Body>
                <PropertiesConditions
                  jsonData={jsonData}
                  jsonIndex={jsonIndex}
                />
              </Accordion.Body>
            </Accordion.Item>
          )}
        {jsonData.length > 0 &&
          props.draggedElement.settings.type == "scoreSum" && (
            <Accordion.Item eventKey="2">
              <Accordion.Header>Conditions-Sum</Accordion.Header>
              <Accordion.Body>
                <PropertiesConditionsSum
                  jsonData={jsonData}
                  jsonIndex={jsonIndex}
                />
              </Accordion.Body>
            </Accordion.Item>
          )}
      </Accordion>
    </>
  );
};
const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps)(PropertiesZone);
