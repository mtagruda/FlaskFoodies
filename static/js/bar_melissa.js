FusionCharts.ready(function () {
    var fusioncharts = new FusionCharts({
        type: 'mscolumn3d',
        renderAt: 'chart-container',
        width: '520',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Average Ratings in Houston and New York",
                "drawcrossline": "1",
                "yaxisname": "Average Ratings",
                "syaxisname": "Average Ratings",
                "showvalues": "0",
                "showanchors": "0",
                "numberprefix": "",
                "plothighlighteffect": "fadeout",
                "theme": "fusion"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "American Cuisine"
                        },
                        {
                            "label": "BBQ Cuisine"
                        },
                        // {
                        //     "label": "Indian"
                        // },
                        {
                            "label": "Italian Cuisine"
                        },
                        {
                            "label": "Mediterranean Cuisine"
                        },
                        {
                            "label": "Mexican Cuisine"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "seriesname": "Houston",
                    "plottooltext": "Ratings for $label : <b>$dataValue</b>",
                    "data": [
                        {
                            "value": "4.144"
                        },
                        {
                            "value": "3.794"
                        },
                        // {
                        //     "value": "4.063"
                        // },
                        {
                            "value": "3.441"
                        },
                        {
                            "value": "3.963"
                        },
                        {
                            "value": "3.566"
                        }
                    ]
                },
                {
                    "seriesname": "New York",
                    "plottooltext": "Ratings for $label : <b>$dataValue</b>",
                    "renderas": "area",
                    "showvalues": "0",
                    "data": [
                        {
                            "value": "4.142"
                        },
                        {
                            "value": "3.687"
                        },
                        // {
                        //     "value": "4.357"
                        // },
                        {
                            "value": "3.921"
                        },
                        {
                            "value": "3.900"
                        },
                        {
                            "value": "3.8205"
                        }
                    ]
                },
            ]
        }

    });
fusioncharts.render();
});