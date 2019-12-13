import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush
} from 'recharts';

import './chart.sass';
import { Header } from '../../components';
import { fetchDataAction } from '../../store/actions/dataAction/dataAction';

import { dropDown, btnGroup } from '../../utils/constants';

class Chart extends Component {
  state = {
    parameter: dropDown[0],
    period: 'max'
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.props.fetchDataAction(this.state.period);
  };

  handleChangeBtn = (btn) => {
    this.setState({ period: btn }, () => {
      this.fetchData();
    });
  };

  handleChangeDropdown = (e) => {
    this.setState({
      parameter: dropDown.filter((item) => item.id === e)[0]
    });
  };

  render() {
    const { parameter, period } = this.state;
    const { myData } = this.props;

    return (
      <>
        <div className='row justify-content-center button-content'>
          <Header
            dropDown={dropDown}
            handleChangeDropdown={this.handleChangeDropdown}
            dropDownValue={parameter}
            btnGroup={btnGroup}
            handleChangeBtn={this.handleChangeBtn}
            activeBtn={period}
          />
        </div>
        <div className='row justify-content-center chart-content'>
          <LineChart
            width={750}
            height={400}
            data={myData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
            <Line
              connectNulls
              type='monotone'
              dataKey={parameter.name}
              stroke='#8884d8'
              fill='#8884d8'
            />
            <Brush />
          </LineChart>
        </div>
      </>
    );
  }
}

Chart.propTypes = {
  myData: PropTypes.array
};

const mapStateToProps = createSelector(R.path(['dataReducer']), (myData) => ({
  myData
}));

export default connect(mapStateToProps, { fetchDataAction })(Chart);
