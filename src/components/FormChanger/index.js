import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';

export default class FormChanger extends Component {
    static propTypes = {
        prop: PropTypes.string
    }

    state = {
        selectedDay: new Date().toString()
    };
    handleDayClick = day => {
        this.setState({selectedDay: day.toString()});
    };

    render() {
        const selectedDay = this.state.selectedDay
        return (
            <div className="FormChanger">
                <DayPicker
                    onDayClick={this.handleDayClick}
                    selectedDays={this.state.selectedDay}/>
                <p>{selectedDay}</p>
            </div>
        );
    }
}
