import React from 'react';
import { Link } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';
import { MdNotifications } from 'react-icons/md';
import { BsAward } from 'react-icons/bs';
import { AiOutlinePushpin } from 'react-icons/ai';
import { IoGridSharp } from "react-icons/io5";
import { BsCardText } from 'react-icons/bs';
import { AiFillAlert } from 'react-icons/ai';
import { RiLayoutRowLine } from 'react-icons/ri';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import { Tooltip } from 'antd';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col p-4 space-y-4">
      <Link to="/" className="flex items-center space-x-2">
        <RiDashboardFill />
        <h3>Dashboard</h3>
      </Link>
      <Link to="/alerts" className="flex items-center space-x-2">
        <AiFillAlert />
        <h6>Alert</h6>
      </Link>
      <Link to="/badges" className="flex items-center space-x-2">
        <BsAward />
        <h6>Badges</h6>
      </Link>
      <Link to="/buttons" className="flex items-center space-x-2">
        <AiOutlinePushpin />
        <h6>Buttons</h6>
      </Link>
      <Link to="/cards" className="flex items-center space-x-2">
        <BsCardText />
        <h6>Cards</h6>
      </Link>
      <Link to="/layout" className="flex items-center space-x-2">
        <IoGridSharp />
        <h6>Layout</h6>
      </Link>
      <Link to="/pagination" className="flex items-center space-x-2">
        <RiLayoutRowLine />
        <h6>Pagination</h6>
      </Link>
      <Tooltip title="Tooltip">
        <Link to="/popover" className="flex items-center space-x-2">
          <MdNotifications />
          <h6>Popover</h6>
        </Link>
      </Tooltip>
      <Tooltip title="Tooltip">
        <Link to="/tooltip" className="flex items-center space-x-2">
          <BsFillExclamationTriangleFill />
          <h6>Tooltip</h6>
        </Link>
      </Tooltip>
    </div>
  );
};

export default Sidebar;

