import React, { Component } from 'react';
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './HorizontalNavBar.css';

class HorizontalNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      activePage: 'overview'
    };
  }

  componentDidMount() {
    const getUserUri = 'https://reqres.in/api/users/2';

    fetch(getUserUri)
      .then((response) => {
        if (response.ok !== true) {
          throw new Error(`HTTP response code is '${response.status}'.`);
        }
        return response.json();
      })
      .then((object) => {
        this.setState({
          userName: `${object.data.first_name} ${object.data.last_name}`
        });
      })
      .catch((error) => {
        console.log('Failed to fetch user data. ' + error.message);
      });
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activePage: name });
    this.props.onPageChange(name);
  }

  render() {
    const { activePage } = this.state;

    return (
      <Menu inverted size='large' className='horizontal-nav-bar'>
        <Container>
          <Menu.Item as='a' icon='sidebar' onClick={this.props.toggleSidebar}
                     className='hidden-on-small-monitor hidden-on-large-monitor'/>

          <Menu.Item as='a' header onClick={() => this.handleItemClick(null, { name: 'overview' })}>
            <Icon name='sun' color='yellow'/> MySolarSystem
          </Menu.Item>
          <Menu.Item as='a' name='overview' active={activePage === 'overview'} onClick={this.handleItemClick}>
            Overview
          </Menu.Item>
          <Menu.Item as='a' name='solarInput' active={activePage === 'solarInput'} onClick={this.handleItemClick}>
            Solar Data Input
          </Menu.Item>
          <Menu.Item as='a' name='solarPanels' active={activePage === 'solarPanels'} onClick={this.handleItemClick}>
            Solar Panels
          </Menu.Item>
          <Menu.Item as='a' name='inverters' active={activePage === 'inverters'} onClick={this.handleItemClick}>
            Inverters
          </Menu.Item>
          <Menu.Item as='a' name='batteries' active={activePage === 'batteries'} onClick={this.handleItemClick}>
            Batteries
          </Menu.Item>

          <Menu.Menu position='right' className='hidden-on-tablet hidden-on-phone'>
            <Dropdown item icon='dropdown' text={this.state.userName}>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => this.handleItemClick(null, { name: 'profile' })} icon='user' text='Profile'/>
                <Dropdown.Item onClick={() => this.handleItemClick(null, { name: 'settings' })} icon='setting' text='Settings'/>
                <Dropdown.Item onClick={() => this.handleItemClick(null, { name: 'help' })} icon='help circle' text='Help'/>
                <Dropdown.Divider/>
                <Dropdown.Item onClick={() => this.handleItemClick(null, { name: 'signout' })} icon='log out' text='Sign out'/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

HorizontalNavBar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default HorizontalNavBar;