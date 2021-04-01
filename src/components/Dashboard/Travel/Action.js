/* eslint-disable react/prop-types */
import React from 'react';

const Action = (props) => {
  const {
    count, selectedItems, clicked, changed, action,
  } = props;
  let options = [<option key={0} value="selected">---------------------------</option>];
  const firstTravel = selectedItems[0];
  const status = firstTravel && firstTravel.status;
  switch (status) {
    case 'pending':
      options.push(<option key={1} value="approve">Approve selected travels</option>);
      options.push(<option key={2} value="cancel">Cancel selected travels</option>);
      options.push(<option key={3} value="reject">Reject selected travels</option>);
      break;
    case 'approved':
      options.push(<option key={4} value="reject">Reject selected travels</option>);
      break;
    case 'rejected':
      options.push(<option key={5} value="approve">Approve selected travels</option>);
      break;
    default:
      break;
  }
  for (let i = 1; i < selectedItems.length; i += 1) {
    if (firstTravel && (selectedItems[i].status !== status)) {
      [options] = options;
    }
  }

  const buttonStyle = 'bg-blue-700 rounded text-gray-200 px-4 md:mx-2';
  const selectStyle = 'border border-gray-400 shadow-sm rounded-sm ml-2';

  return (
    <div className="flex flex-col md:flex-row justify-between mt-1">
      <label htmlFor="action">
        Action:
        <select
          title={selectedItems.length === 0 ? 'Select the travel request to change' : ''}
          onChange={changed}
          className={selectedItems.length === 0 ? `${selectStyle} cursor-not-allowed opacity-50` : selectStyle}
          id="action"
          defaultValue="selected"
          name="action"
          required=""
        >
          {options}
        </select>
      </label>
      <button
        type="button"
        onClick={clicked}
        className={!action ? `${buttonStyle} cursor-not-allowed opacity-75` : buttonStyle}
        title={!action ? 'Select an action to run' : 'Run the selected action'}
      >
        Go
      </button>

      <span className="text-sm text-gray-600">
        {selectedItems.length}
        {' '}
        of
        {' '}
        {count}
        {' '}
        selected
      </span>
    </div>
  );
};

export default Action;
