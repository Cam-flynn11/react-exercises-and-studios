import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      { label: 'Football Sundays', value: 'Football Sundays' },
      {label: 'Subway could not compete', value: 'Subway could not compete' },
      {label: 'Gordan Ramsay Recipes', value: 'Gordan Ramsay Recipes' }];

const [boardName, setBoardName] = useState('no boards yet!')

   const handleChange = (event) => {
   setBoardName(event.target.value);  

   };

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
            {boards.map((board) => (
               <option key={board.value} value={board.value}>
                  {board.label}
               </option>
            ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
