import React from "react";
import PropTypes from "prop-types";

function TableHeader({ columnsNames }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th key={c}>{c}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;

TableHeader.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired
};
