import React, { useState } from "react";
import data from "./data";
import styles from "./Accordion.module.css";

const Accordion = () => {
  const [selected, setSelected] = useState();
  const [enableMultiBtn, setEnableMultiBtn] = useState(false);
  const [multipleSelection, setMultipleSelection] = useState([]);

  const singleSelectionHandler = (getCurrentID) => {
    setSelected(getCurrentID === selected ? null : getCurrentID);
  };

  const multipleSelectionHandler = (getCurrentID) => {
    let  cpyMultipleSelection = [...multipleSelection];
    const findIndexOfCurrentId = cpyMultipleSelection.indexOf(getCurrentID);

    if(findIndexOfCurrentId === -1) cpyMultipleSelection.push(getCurrentID);
    else cpyMultipleSelection.splice(findIndexOfCurrentId, 1);

    setMultipleSelection(cpyMultipleSelection);
  }

  return (
    <div className={styles.wrapper}>
        <button onClick={() => setEnableMultiBtn(!enableMultiBtn)} className={styles.enableMultiBtn}>Enable Multiple Selection</button>
      {data && data.length > 0 ? (
        <div className={styles.accordionLists}>
          {data.map((dataItem) => (
            <div className={styles.accList}key={dataItem.id}>
              <div className={styles.accQuestion}onClick={enableMultiBtn ? () => multipleSelectionHandler(dataItem.id) : () => singleSelectionHandler(dataItem.id)}>
                <h4 className={styles.accQues}>{dataItem.question}</h4>
                <span className={styles.accQues}>+</span>
              </div>
              {selected === dataItem.id || multipleSelection.indexOf(dataItem.id) !== -1 ? (
                <div className={styles.accListP}>
                    <p>{dataItem.answer}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div>Data not found</div>
      )}
    </div>
  );
};

export default Accordion;
