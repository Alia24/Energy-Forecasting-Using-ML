import React, {Component} from 'react';
import {Button, Checkbox, Icon, Table} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './PanelStatusTable.css';

class PanelStatusTable extends Component {
  handleCheckboxChange(event, data) {
    const checkboxMarked = data.checked,
      panelId = data.name;

    if (checkboxMarked === true) {
      this.props.enablePanels([panelId]);
    } else {
      this.props.disablePanels([panelId]);
    }
  }

  enableAllPanels(event, data) {
    const panelIds = PanelStatusTable.getPanelIds(this.props.panels);
    this.props.enablePanels(panelIds);
  }

  disableAllPanels(event, data) {
    const panelIds = PanelStatusTable.getPanelIds(this.props.panels);
    this.props.disablePanels(panelIds);
  }

  allPanelsAreEnabled() {
    return this.props.panels.every((panel) => {
      return (panel.enabled === true);
    });
  }

  allPanelsAreDisabled() {
    return this.props.panels.every((panel) => {
      return (panel.enabled === false);
    });
  }

  static getPanelIds(panels) {
    return panels.map((panel) => panel.id);
  }

  static forkOnGitHub() {
    window.location.assign('https://github.com/gitname/solar-ui');
  }

  render() {
    const rows = this.props.panels.map((panel) => {
      return (
        <Table.Row key={panel.id}>
          <Table.Cell collapsing>
            <Checkbox slider checked={panel.enabled} name={'' + panel.id}
                      onChange={this.handleCheckboxChange.bind(this)}/>
          </Table.Cell>
          <Table.Cell className="panel-status-table--data-cell"><a title={'View Panel ' + panel.id + ' details'}>{panel.id}</a></Table.Cell>
          <Table.Cell disabled={!panel.enabled} className="panel-status-table--data-cell">{panel.inputRadianceKWM2.toFixed(2)} kW/m²</Table.Cell>
          <Table.Cell disabled={!panel.enabled} className="panel-status-table--data-cell">{panel.outputVoltageV.toFixed(2)} V</Table.Cell>
          <Table.Cell disabled={!panel.enabled} className="panel-status-table--data-cell">{panel.outputCurrentA.toFixed(2)} A</Table.Cell>
        </Table.Row>
      );
    });

    return (
      <div className="panel-status-table--wrapper">

        <Table unstackable celled compact definition className='panel-status-table--table'>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Enabled</Table.HeaderCell>
              <Table.HeaderCell>Panel</Table.HeaderCell>
              <Table.HeaderCell>Solar Radiance</Table.HeaderCell>
              <Table.HeaderCell>Output Voltage</Table.HeaderCell>
              <Table.HeaderCell>Output Current</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{rows}</Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='7'>
                <Button.Group size='small'>
                  <Button basic color='green' disabled={this.allPanelsAreDisabled()} onClick={this.disableAllPanels.bind(this)}>Disable All</Button>
                  <Button color='green' disabled={this.allPanelsAreEnabled()} onClick={this.enableAllPanels.bind(this)}>Enable All</Button>
                </Button.Group>

                <Button size='small' color='green' icon labelPosition='left' floated='right'
                        onClick={PanelStatusTable.forkOnGitHub}>
                  <Icon name='fork'/> Fork on GitHub
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>

        </Table>

      </div>
    );
  }
}

PanelStatusTable.propTypes = {
  panels: PropTypes.array.isRequired,
  enablePanels: PropTypes.func.isRequired,
  disablePanels: PropTypes.func.isRequired
};

export default PanelStatusTable;
