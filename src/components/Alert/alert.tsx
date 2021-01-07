import React from 'react'
import classNames from 'classnames'

// 枚举
export enum ButtonType {
    Default = 'default',
    Danger = 'danger',
    Success = 'success',
    Warning = 'warning'
}
// 接口(定义传入的属性时事先声明)
interface BaseAlertProps {
    title: string;
    description?: string;
    type?: ButtonType;
    closable?: boolean;
    onClose?:  Function;
}
const Alert: React.FC<BaseAlertProps> = (props) => {
    const {
        title,
        description,
        type,
        closable,
        onClose
    } = props
    // const classes = classNames('btn', className , {
    //     [`btn-${btnType}`]: btnType,
    //     [`btn-${size}`]: size,
    //     'disabled': (btnType === ButtonType.Link) && disabled
    // })
    // if (btnType === ButtonType.Link && href) {
    //     return (
    //         <a href={href} className={classes} {...restProps}>{children}</a>
    //     )
    // } else {
    //     return (
    //         <button className={classes} disabled={disabled} {...restProps}>{children}</button>
    //     )
    // }
    const mainClass = classNames('alertMain')
    return (
        <div className={mainClass}>
            <div className='alertTop'>
                <div className="alertTitle">
                    {title}
                </div>
                <div className="close"></div>
            </div>
            <div className="alertBottom"></div>
        </div>
    )
}

Alert.defaultProps = {
    type: ButtonType.Default,
    closable: true
}

export default Alert