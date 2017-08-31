import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import Moment from 'react-moment';
import './style.css';

export default class FormChanger extends Component {
    static propTypes = {
        prop: PropTypes.string
    }

    state = {
        selectedDay: new Date().toString()
    };
    handleDayClick = day => {
        this.setState({
            selectedDay: day.toString()
        });
    };

    render() {
        const selectedDay = this.state.selectedDay
        return (
            <div className="FormChanger">
                <h2>
                    <Moment format="YYYY/MM/DD">{selectedDay}</Moment>
                </h2>
                <DayPicker
                    onDayClick={this.handleDayClick}
                    selectedDays={new Date(this.state.selectedDay)}/>

            </div>
        );
    }
}
