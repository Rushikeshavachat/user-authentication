import React, { useContext } from 'react';
import AppContext from './AppContext';

const LinkWithRef = () => {
  const { basename } = useContext(AppContext);

  return (
    <div>
      Base name is: {basename}
    </div>
  );
};

export default LinkWithRef;
