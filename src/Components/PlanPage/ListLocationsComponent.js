import React from 'react';
import SingleLocationComponent from './SingleLocationComponent';

const ListLocationsComponent = ({ plans, setPlans }) => {

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const draggedItem = plans.find(plan => plan.id.toString() === id);

    const draggedIndex = plans.indexOf(draggedItem);
    const dropIndex = Number(event.target.getAttribute('plan-index'));

    if (draggedIndex !== -1 && dropIndex !== -1 && draggedIndex !== dropIndex) {
      const updatedPlans = [...plans]
      updatedPlans.splice(draggedIndex, 1)
      updatedPlans.splice(dropIndex, 0, draggedItem)
      setPlans(updatedPlans)
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default to allow drop
  };

  return (
    <ol style={{ padding: 0, listStyle: "none" }}>
      {plans.map((plan, index) => (
        <li
          key={plan.id}
          draggable
          onDragStart={(event) => event.dataTransfer.setData("text/plain", plan.id.toString())}
          onDragOver={handleDragOver}
          onDrop={handleDrop} 
          plan-index={index} 
          style={{
            padding: "8px",
          }}
        >
          <SingleLocationComponent location={plan} />
        </li>
      ))}
    </ol>
  );
};

export default ListLocationsComponent;
