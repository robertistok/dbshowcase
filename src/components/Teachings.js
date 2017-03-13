import React from 'react';
import styled from 'styled-components';
import IconButton from 'material-ui/IconButton';
import PlusOne from 'material-ui/svg-icons/social/plus-one';

import Icon, { ICONS } from './Icon';

const LargeIconButton = styled(IconButton)`
  width: 120px !important;
  height: 120px !important;
  border: 1px solid black !important;

  svg {
    width: 60px !important;
    height: 60px !important;
    padding: 10px !important;
  }
`

const Wrapper = styled.div`
  padding: 20px 0px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 16px;

  .courses: {
    display: flex;
  }
`

const TeachingCard = styled.div`
  width: 200px;
  height: 120px;
`

const Teachings = (props) => {
  const { changeModal } = props;

  const changeModalTo = () => {
    changeModal('ADD_TEACHING');
  }

  return (
    <Wrapper>
      <h4>Teaching</h4>
    <div className='courses'>
      <LargeIconButton
        tooltip='Add Teaching'
        onClick={changeModalTo}
      >
        <PlusOne />
      </LargeIconButton>
      {props.teacher.teaching.map(t => console.log(t))}
    </div>
    </Wrapper>
  )
}

export default Teachings;
