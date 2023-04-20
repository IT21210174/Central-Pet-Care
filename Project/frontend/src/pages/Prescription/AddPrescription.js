import './AddPrescription.scss'
import React, { useState } from "react";

import AdminLayout from '../Layouts/AdminLayout'

const AddPrescription = () => {

  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows([...rows, { medicine: "", dosage: "" }]);
  };

  const handleInputChange = (event, index, key) => {
    const { value } = event.target;
    const newRows = [...rows];
    newRows[index][key] = value;
    setRows(newRows);
  };

  return (
    <AdminLayout>
    <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-item-form-container" onSubmit="">
            <span className="tagline-add-item">Fill the form for add prescription</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">
                <section className="input-container">
                  <span className="input-title">pet name</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">address</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                    <span className="input-title">description</span>
                     <textarea className='input-textarea' id="" cols="30" rows="10"></textarea>
                    </section>
              </div>
              {/* column two */}
    <div>
      <table>
        <thead>
          <tr>
            <th>Medicine</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.medicine}
                  onChange={(e) => handleInputChange(e, index, "medicine")}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.dosage}
                  onChange={(e) => handleInputChange(e, index, "dosage")}
                />
              </td>
              </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Medicine</button>
    </div>


              <div className="add-item-column">
                    
                    <div className="btn-container-add-item">
                      <button type='submit' className="submit-btn">Submit</button>
                      <button type='reset' className="reset-btn">Reset</button>
                    </div>
              </div>
            </div>
        </form>
    </div>
    </AdminLayout>
  )
}

export default AddPrescription
