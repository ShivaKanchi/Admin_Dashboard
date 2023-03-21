import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'
class Sparkline extends React.PureComponent {
    render() {
        const { id, height, width, color, data, type, currentColor } = this.props

        return (
            <SparklineComponent
                id={id}
                height={height}
                width={width}
                LineWidth={1}
                valueType="Numeric"
                fill={color}
                border={{ color: currentColor, width: 2 }}
                dataSource={data}
                xName="x"
                yName="yval"
                type={type}
                tooltipSettings={{
                    visible: true,
                    format: '${x}: Data ${yval}',
                    trackLineSettings: {
                        visible: true
                    }
                }}
            >
                <Inject services={[SparklineTooltip]} />
            </SparklineComponent>
        );
    }
}
export default Sparkline





//     < SparklineComponent
// id = 'sparkLine'
// height = '100px'
// width = '70%'
// dataSource = { data }
// xName = 'x'
// yName = 'yval'
// type = { type }
// tooltipSettings = {{
//     visible: true, format: '${x} : ${yval}',
//         }}
//     >
//     <Inject services={[SparklineTooltip]} />
//     </SparklineComponent >