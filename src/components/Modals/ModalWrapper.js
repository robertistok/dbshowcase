import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import styled from 'styled-components';

const { PropTypes } = React;

const styles = {
  back: {
    position: 'fixed',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.618)',
    zIndex: 9,
    cursor: 'default',
  },
  panelAboveSpacer: {
    flex: '2 0 auto',
  },
  panelBelowSpacer: {
    flex: '6 0 auto',
  },
};

const StyledAppBar = styled(AppBar)`
  width: 50% !important;
`

const Wrapper = styled.div`
  width: 50%;
  background-color: white;
`

const ModalWrapper = (props) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) props.hideModal();
  };

  const onOk = () => {
    props.onOk();
    props.hideModal();
  };

  const okButton = props.showOk
    ? (
      <FlatButton
        label={props.okText}
        onClick={onOk}
      />
    ) : null;

  const closeButton = (
    <IconButton onClick={props.hideModal}>
      <NavigationClose />
    </IconButton>
  )

  return (
    <div style={styles.back} onClick={handleBackgroundClick}>
      <Wrapper>
        <AppBar
          title={props.title}
          iconElementRight={okButton}
          iconElementLeft={closeButton}
        />
        <div>
          {props.children}
        </div>
      </Wrapper>
    </div>
  );
};

ModalWrapper.propTypes = {
  // props
  title: PropTypes.string,
  showOk: PropTypes.bool,
  okText: PropTypes.string,
  okDisabled: PropTypes.bool,
  width: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,

  // methods
  hideModal: PropTypes.func,
  onOk: PropTypes.func
};

ModalWrapper.defaultProps = {
  title: '',
  showOk: true,
  okText: 'OK',
  okDisabled: false,
  width: 400,
  onOk: () => {}
};

export default ModalWrapper;
