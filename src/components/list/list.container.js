import React from 'react';
import {connect} from 'react-redux';
import {getPlayers} from '../../state/state';
import List from './list.component';

const mapStateToProps = state => ({players: getPlayers(state)});

export default connect(mapStateToProps)(props =>
    <List {...props} />
);