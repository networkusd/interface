import React, {
    useLayoutEffect
} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {
    useSelector
} from "react-redux";

function CoinChart() {
    const {
        wallet
    } = useSelector((state) => state);
    const {
        fundListForCoinChart
    } = wallet;

    useLayoutEffect(() => {
        if (fundListForCoinChart.length > 0) {
            let sum = 0;
            let funds = fundListForCoinChart.map((a) => Object.assign({}, a));

            if (funds) {
                for (let index = 0; index < funds.length; index++) {
                    const element = funds[index];
                    sum += element.usdAmount;
                }
                for (let index = 0; index < funds.length; index++) {
                    const element = funds[index];
                    if (
                        element.usdAmount < sum / (funds.length * 2) &&
                        element.usdAmount > 0
                    ) {
                        element.usdAmount += sum / (funds.length * 3);
                    }
                }
                if (sum === 0) {
                    funds = [{
                        coin: null,
                        usdAmount: 100,
                    }, ];
                }
            }
            am4core.useTheme(am4themes_animated);
            let chart = am4core.create("chartdiv", am4charts.PieChart);
            chart.logo.height = -15;
            chart.data = funds;
            var pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "usdAmount";
            pieSeries.dataFields.category = "coin";
            pieSeries.hiddenState.properties.endAngle = -90;
            chart.innerRadius = 115;
            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;
            pieSeries.slices.template.tooltipText = "";
            pieSeries.slices.template.propertyFields.fill = "color";
            pieSeries.slices.template.stroke = am4core.color("#fff");
            pieSeries.slices.template.strokeWidth = 1;
            pieSeries.hiddenState.properties.endAngle = -90;
            pieSeries.slices.template.strokeOpacity = 1;
            let slice = pieSeries.slices.template;
            slice.states.getKey("hover").properties.scale = 1;
            slice.states.getKey("active").properties.shiftRadius = 0;
            slice.propertyFields.fillOpacity = "opacity";

            return () => {
                chart.dispose();
            };
        }
    }, [fundListForCoinChart]);

    return <div id = "chartdiv"
    style = {
        {
            width: "100%",
            height: "300px"
        }
    } > < /div>;
}

export default CoinChart;