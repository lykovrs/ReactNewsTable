import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChartLib from 'chart.js';
import './style.css';

export default class Chart extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }
    

    render() {
        const {articles} = this.props;
        return (
            <div className="Chart">
                <h2 className="Chart__header">Dataset</h2>
                <canvas ref={this.getContainerRef}></canvas>
            </div>

        );
    }

    // componentWillRecieveProps() {  TODO: реализовать обновление данных }

    getContainerRef = (ref) => {
        const {articles} = this.props;
        const items = {};
        const result = {
            labels: [],
            data: []
        };
        // Считаем типы материалов по колличеству и уникальности
        articles.forEach((item) => {
            if (item.type_of_material in items) {
                items[item.type_of_material] += 1;
            } else {
                items[item.type_of_material] = 1;
            }
        })
        // Заполняем объект с массивами результатов для API chartjs
        for (let key in items) {
            result
                .labels
                .push(key);
            result
                .data
                .push(items[key])
        }
        // Данные для графика
        var data = {
            labels: result.labels,
            datasets: [
                {
                    label: "NYTimes dataset",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 2,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: result.data
                }
            ]
        };
        // Настройки для графика
        var option = {
            scales: {
                yAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            display: true,
                            color: "rgba(255,99,132,0.2)"
                        }
                    }
                ],
                xAxes: [
                    {
                        gridLines: {
                            display: false
                        }
                    }
                ]
            }
        };
        // Инициируем гарфик в контейнер
        ChartLib.Bar(ref, {
            data: data,
            options: option
        });

    }
}
