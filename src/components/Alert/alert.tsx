import React, { useState } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import Icon from '../Icon/icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

type AlertType = 'info' | 'error' | 'success' | 'warning'
// 接口(定义传入的属性时事先声明)
interface BaseAlertProps {
    title: string;
    type?: AlertType;
    closable?: boolean;
    onClose?: Function;
    className?: string;
}
const Alert: React.FC<BaseAlertProps> = (props) => {
    const {
        title,
        type,
        closable,
        onClose,
        className,
        ...restProps
    } = props

    let icon: any = ''
    let iconColor: string = ''
    switch (type) {
        case 'info':
            iconColor = '#2196f3'
            icon = 'info-circle'
            break;
        case 'success':
            iconColor = '#4caf50'
            icon = 'check-circle'
            break;
        case 'warning':
            iconColor = '#ff9800'
            icon = 'exclamation-circle'
            break;
        case 'error':
            iconColor = '#f44336'
            icon = 'bug'
            break;
        default:
            break;
    }
    const handleClose = (e?: any) => {
        // setmainClass('rooting-alert-none')
        setisShow(false)
        if (onClose) {
            onClose(e)
        }
    }
    const [isShow, setisShow] = useState(true)
    const closableClass = classNames('alert-close', {
        [`alert-close-none`]: closable === false
    })
    const mainClass = classNames('rooting-alert', className, {
        [`rooting-alert-${type}`]: type
    })
    return (
        <CSSTransition classNames='rooting-alert-item' timeout={300} in={isShow} unmountOnExit={true}>
            <div className={mainClass} {...restProps}>
                <div className='rooting-alertTop'>
                    <div className="alert-top-left">
                        <Icon icon={icon} style={{ fontSize: '20px' }} color={iconColor}></Icon>
                        <div className="alert-title">
                            {title}
                        </div>
                    </div>
                    <div className={closableClass} onClick={(e) => { handleClose(e) }}>
                        <Icon icon='times'></Icon>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

Alert.defaultProps = {
    type: 'info',
    closable: true
}

export default Alert