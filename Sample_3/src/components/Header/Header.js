import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import './header.sass';

const Header = ({
  dropDown,
  btnGroup,
  activeBtn,
  dropDownValue,
  handleChangeBtn,
  handleChangeDropdown
}) => {
  const renderBtnGroup = () => {
    return btnGroup.map((item) => (
      <Button
        key={item.id}
        onClick={() => handleChangeBtn(item.name)}
        variant='light'
        active={item.name === activeBtn}
      >
        {item.name}
      </Button>
    ));
  };

  const renderDropdown = () => {
    return dropDown.map((item) => (
      <Dropdown.Item
        key={item.id}
        eventKey={item.id}
        onSelect={handleChangeDropdown}
      >
        {item.name}
      </Dropdown.Item>
    ));
  };

  return (
    <>
      <div className='col-sm-4'>
        <ButtonGroup>{renderBtnGroup()}</ButtonGroup>
      </div>
      <div className='col-sm-3'>
        <DropdownButton
          id='dropdown-basic-button'
          title={dropDownValue.name}
          variant='light'
        >
          {renderDropdown()}
        </DropdownButton>
      </div>
    </>
  );
};

Header.propTypes = {
  dropDown: PropTypes.array,
  btnGroup: PropTypes.array,
  activeBtn: PropTypes.string,
  dropDownValue: PropTypes.object,
  handleChangeBtn: PropTypes.func,
  handleChangeDropdown: PropTypes.func
};

export default Header;
