import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'
import classNames from 'classnames'

type InputSize = 'lg' | 'sm'
// Omit 忽略掉 Input原有属性的 size
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: string;
    append?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<InputProps> = (props) => {
    const { disabled, size, icon, prepend, append, className, style, ...restProps } = props
    const fixControlledValue = (value: any) => {
        if (typeof value === 'undefined' || value === null) {
            return ''
        }
        return value
    }
    if ('value' in props) {
        delete restProps.defaultValue
        restProps.value = fixControlledValue(props.value)
    }
    const wrapperClasses = classNames('rooting-input-inlineBlock-wrapper', className)
    const Iputclasses = classNames('rooting-input', className, {
        'rooting-input-disabled': disabled === true,
        [`rooting-input-${size}`]: size,
        'rooting-input-prepend': prepend,
        'rooting-input-append': append,
    })
    const prependClasses = classNames('input-prepend', {
        [`input-prepend-${size}`]: size
    })
    const appendClasses = classNames('input-append', {
        [`input-append-${size}`]: size
    })
    const iconClasses = classNames('rooting-input-icon', {
        [`rooting-input-icon-${size}`]: size
    })

    return (
        <div className={wrapperClasses} style={style}>
            <div className='rooting-input-flex-wrapper'>
                {prepend && <div className={prependClasses}> {prepend} </div>}
                <input type='text' className={Iputclasses} {...restProps} disabled={disabled} />
                {icon && <div className={iconClasses}><Icon icon={icon}></Icon></div>}
                {append && <div className={appendClasses}>{append}</div>}
            </div>
        </div>
    )
}

Input.defaultProps = {
}

export default Input