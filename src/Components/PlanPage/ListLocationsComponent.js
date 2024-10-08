import React from "react";
import { Box } from "@mui/material";
import SingleLocationComponent from "./SingleLocationComponent";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ListLocationsComponent = ({ plans, setPlans }) => {

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(plans);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPlans(items);
  };

  return (
    <Box
      width="100%"
      height="90vh"
      display="flex"
      flexDirection="column"
      padding="4vh"
    >
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="doppadble-element">  
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ width: "100%", minHeight: "100px" }}  
            >
              {plans.map((loc, index) => (
                <Draggable
                  key={String(loc.id)}  
                  draggableId={String(loc.id)}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        marginBottom: "8px" 
                      }}
                    >
                      <SingleLocationComponent location={loc} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder} 
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default ListLocationsComponent;
