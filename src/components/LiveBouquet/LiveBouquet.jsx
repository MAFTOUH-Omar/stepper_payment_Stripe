import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
const optionsData = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
  { id: '5', label: 'Option 5' },
  { id: '6', label: 'Option 6' },
  { id: '7', label: 'Option 7' },
  { id: '8', label: 'Option 8' },
  { id: '9', label: 'Option 9' },
  { id: '10', label: 'Option 10' },
];

const LiveBouquet = () => {
  const [options, setOptions] = useState(optionsData);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newOptions = Array.from(options);
    const [reorderedItem] = newOptions.splice(result.source.index, 1);
    newOptions.splice(result.destination.index, 0, reorderedItem);

    setOptions(newOptions);
  };

  const handleSelectAll = () => {
    const newOptions = options.map((option) => ({ ...option, selected: true }));
    setOptions(newOptions);
  };

  const handleUnselectAll = () => {
    const newOptions = options.map((option) => ({ ...option, selected: false }));
    setOptions(newOptions);
  };

  const handleMoveUp = () => {
    const selectedOptionIndex = options.findIndex((option) => option.selected);
    if (selectedOptionIndex > 0) {
      const newOptions = [...options];
      const selectedOption = newOptions[selectedOptionIndex];
      newOptions[selectedOptionIndex] = newOptions[selectedOptionIndex - 1];
      newOptions[selectedOptionIndex - 1] = selectedOption;
      setOptions(newOptions);
    }
  };

  const handleMoveDown = () => {
    const selectedOptionIndex = options.findIndex((option) => option.selected);
    if (selectedOptionIndex < options.length - 1 && selectedOptionIndex !== -1) {
      const newOptions = [...options];
      const selectedOption = newOptions[selectedOptionIndex];
      newOptions[selectedOptionIndex] = newOptions[selectedOptionIndex + 1];
      newOptions[selectedOptionIndex + 1] = selectedOption;
      setOptions(newOptions);
    }
  };

  const handleToggleSelection = (optionId) => {
    const newOptions = options.map((option) => {
      if (option.id === optionId) {
        return { ...option, selected: !option.selected };
      }
      return option;
    });
    setOptions(newOptions);
  };

  const handleLogResult = () => {
    const selectedOptions = options.filter((option) => option.selected);
    console.log(selectedOptions);
  };
  return (
    <div className="container mx-auto p-4">
    <div className="flex justify-between items-center mb-4">
      <div>
        <button
          className="bg-sky-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleSelectAll}
        >
          Select All
        </button>
        <button
          className="bg-orange-400 text-white px-4 py-2 rounded mr-2"
          onClick={handleMoveUp}
        >
          Top
        </button>
        <button
          className="bg-slate-900 text-white px-4 py-2 rounded mr-2"
          onClick={handleMoveDown}
        >
          Botton
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleUnselectAll}
        >
          Unselect All
        </button>
      </div>
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded"
        onClick={handleLogResult}
      >
        Console
      </button>
    </div>
    <div className='border-2 border-slate-500 rounded-md px-2 py-2'>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="options">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`grid grid-cols-1 gap-4 ${
              options.length > 3 ? 'max-h-64 overflow-y-auto' : ''
            }`}
          >
            {options.map((option, index) => (
              <Draggable key={option.id} draggableId={option.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    className={`bg-white p-4 rounded shadow flex justify-between items-center ${
                      option.selected ? 'bg-blue-300' : 'bg-white'
                    }`}
                    style={{ backgroundColor: option.selected ? '#7dd3fc' : 'white' }}
                    onClick={() => handleToggleSelection(option.id)}
                  >
                    <span>{option.label}</span>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
    </div>
  </div>
  )
}

export default LiveBouquet