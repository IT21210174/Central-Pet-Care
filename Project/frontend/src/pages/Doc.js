import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import orderSuccess from '../assets/imgs/PrototypeResources/error-displayers/no-data.png';

const Table = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

const App = () => {
    const downloadPDF = () => {
        const doc = new jsPDF();
        
        // Add the logo image to the document
        const logoWidth = 50;
        const logoHeight = 50;
        const pageWidth = doc.internal.pageSize.getWidth();
        const logoX = (pageWidth - logoWidth) / 2;
        doc.addImage(orderSuccess, "PNG", logoX, 10, logoWidth, logoHeight); // (image, type, x, y, width, height)

        // Add custom text next to the logo
        doc.setFontSize(40);
        doc.text("Central Pet Care", (pageWidth / 2), 80, { align: "center" });

// Add the underlined text
const text = "Order Report";
const x = 40;
const y = 100;
const lineHeight = doc.getLineHeight();

// Calculate the width of the text
const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;

// Set the color and width of the underline
doc.setDrawColor(0, 0, 0);
doc.setLineWidth(0.5);

// Draw the underline
doc.line(x, y + 2 , x + textWidth, y + 2);

// Add the text
doc.text(text, (pageWidth / 2), y, { align: "center" });

        doc.setFillColor(255, 0, 0);
        // Add the table to the document
        doc.autoTable({
          head: [["Name", "Age", "Location", "Name", "Age", "Location", "Name", "Age", "Location"]],
          body: [
            ["John Doe", "25", "New York"],
            ["Jane Smith", "30", "Los Angeles", "Jane Smith", "30", "Los Angeles", "Name", "Age", "Location"],
            ["Bob Johnson", "45", "Chicago"],
            ["John Doe", "25", "New York"],
            ["Jane Smith", "30", "Los Angeles"],
            ["Bob Johnson", "45", "Chicago"],
            ["John Doe", "25", "New York"],
            ["Jane Smith", "30", "Los Angeles"],
            ["Bob Johnson", "45", "Chicago"],
            ["John Doe", "25", "New York"],
            ["Jane Smith", "30", "Los Angeles"],
            ["Bob Johnson", "45", "Chicago"],
            ["John Doe", "25", "New York"],
            ["Jane Smith", "30", "Los Angeles"],
            ["Bob Johnson", "45", "Chicago"],
            ["John Doe", "25", "New York"],
            ["Jane Smith", "30", "Los Angeles"],
            ["Bob Johnson", "45", "Chicago"],
            ["John Doe", "25", "New York"],
            ["Jane Smith", "30", "Los Angeles"],
            ["Bob Johnson", "45", "Chicago"],
            ["John Doe", "25", "New York"],
            ["Jane Smith", "30", "Los Angeles"],
            ["Bob Johnson", "45", "Chicago"],
          ],
          startY: 120, // start the table below the logo
          headStyles: {
            fontSize: 15,
            fillColor: [255, 0, 0], // red color
            textColor: 255, // white text color
          }
        });
    
        doc.save("table.pdf");
      };

  return (
    <div>
      <Table
        data={[
          { id: 1, name: "John Doe", age: 25, location: "New York" },
          { id: 2, name: "Jane Smith", age: 30, location: "Los Angeles" },
          { id: 3, name: "Bob Johnson", age: 45, location: "Chicago" },
          { id: 4, name: "Bob Johnson", age: 45, location: "Chicago" },
          { id: 5, name: "Bob Johnson", age: 45, location: "Chicago" },
          { id: 6, name: "Bob Johnson", age: 45, location: "Chicago" },
          { id: 7, name: "Bob Johnson", age: 45, location: "Chicago" },
          { id: 8, name: "Bob Johnson", age: 45, location: "Chicago" },
          { id: 9, name: "Bob Johnson", age: 45, location: "Chicago" },
          { id: 10, name: "Bob Johnson", age: 45, location: "Chicago" },
        ]}
      />
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default App;
