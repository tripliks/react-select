/* eslint-disable react/prop-types */
import React from 'react';
import ReactSelect from 'react-select';
import './SelectCustom.less';
import MenuPortal from '../MenuPortal__fix.react';

export default ({ className = '', isClearable = true, ...restProps }) => (
  <ReactSelect
    className={`opuscapita_react-select--2-0-0 ${className}`}
    classNamePrefix="opuscapita_react-select"
    components={{ MenuPortal }}
    {...restProps}
  />
);
