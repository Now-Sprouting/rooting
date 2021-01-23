import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'


export interface LoadingProps {
    type?: 'rectangle' | 'round';
    size?: string;
    color?: string;
    gloable?: boolean;
}
const Loading: React.FC<LoadingProps> = (props) => {
    const { type, color, size, gloable } = props
    const index = size?.indexOf(' ')
    const rectangleWidth = size?.slice(0, index)
    const rectanglHeight = size?.slice(index)
    const globalLading: any = document.getElementById('global-loading')
    if (gloable) {
        const classes = classNames({
            [`global-${type}-loading-wraper`]: type
        })
        if (type === 'round') {
            return ReactDOM.createPortal(
                <div className={classes}>
                    <div className='loading-items'>
                        <div style={{ backgroundColor: `${color}`, width: `${size}`, height: `${size}` }}></div>
                        <div style={{ backgroundColor: `${color}`, width: `${size}`, height: `${size}` }}></div>
                        <div style={{ backgroundColor: `${color}`, width: `${size}`, height: `${size}` }}></div>
                    </div>
                </div>,
                globalLading
            )
        }
        if (type === 'rectangle') {
            return ReactDOM.createPortal(
                <div className={classes}>
                    <div className='loading-items'>
                        <div style={{ backgroundColor: `${color}`, width: `${rectangleWidth}`, height: `${rectanglHeight}` }}></div>
                        <div style={{ backgroundColor: `${color}`, width: `${rectangleWidth}`, height: `${rectanglHeight}` }}></div>
                        <div style={{ backgroundColor: `${color}`, width: `${rectangleWidth}`, height: `${rectanglHeight}` }}></div>
                        <div style={{ backgroundColor: `${color}`, width: `${rectangleWidth}`, height: `${rectanglHeight}` }}></div>
                        <div style={{ backgroundColor: `${color}`, width: `${rectangleWidth}`, height: `${rectanglHeight}` }}></div>
                    </div>
                </div>,
                globalLading
            )
        }
    }
    if (type === 'round') {
        return (
            <div className='rooting-autoList round-loading-wraper'>
                <div style={{ backgroundColor: `${color}`, width: `${size}`, height: `${size}` }}></div>
                <div style={{ backgroundColor: `${color}`, width: `${size}`, height: `${size}` }}></div>
                <div style={{ backgroundColor: `${color}`, width: `${size}`, height: `${size}` }}></div>
            </div>
        )
    } else {
        return (
            <div className='rooting-autoList rectangle-loading-wraper'>
                <div style={{ backgroundColor: `${color}`, width: `${rectangleWidth}`, height: `${rectanglHeight}` }}></div>
                <div style={{ backgroundColor: `${color}`, width: `${rectangleWidth}`, height: `${rectanglHeight}` }}></div>
                <div style={{ backgroundColor: `${color}`, width: `${rectangleWidth}`, height: `${rectanglHeight}` }}></div>
                <div style={{ backgroundColor: `${color}`, width: `${rectangleWidth}`, height: `${rectanglHeight}` }}></div>
                <div style={{ backgroundColor: `${color}`, width: `${rectangleWidth}`, height: `${rectanglHeight}` }}></div>
            </div>
        )
    }
}

Loading.defaultProps = {
    type: 'round',
    gloable: false
}
export default Loading