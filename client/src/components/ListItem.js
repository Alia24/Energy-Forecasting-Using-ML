import React from 'react';
import PropTypes from 'prop-types';
import { List, Icon } from 'semantic-ui-react';

const ListItem = ({ icon, header, description, imageSrc }) => {
  return (
    <List.Item style={{ marginBottom: "10px", display: 'flex', alignItems: 'center' }}>
      <Icon name={icon} style={{ marginRight: '15px' }} />
      <List.Content style={{ flex: 1 }}>
        <List.Header>{header}</List.Header>
      </List.Content>
      <List.Content style={{ marginRight: '15px' }}>
        <List.Description>{description}</List.Description>
      </List.Content>
      <img src={imageSrc} alt="dummy" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
    </List.Item>
  );
};

ListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default ListItem;