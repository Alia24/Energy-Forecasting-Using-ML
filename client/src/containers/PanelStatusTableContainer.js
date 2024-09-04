import {connect} from 'react-redux'
import {enablePanels, disablePanels} from '../actions';
import PanelStatusTable from '../components/PanelStatusTable/PanelStatusTable';

const mapStateToProps = function (state) {
  return {
    panels: state.panelCollection.panels
  };
};

const mapDispatchToProps = {
  enablePanels,
  disablePanels
};

const PanelStatusTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PanelStatusTable);

export default PanelStatusTableContainer;
