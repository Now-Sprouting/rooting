import React, { useContext } from 'react'
import classNames from 'classnames'

import {MenuContext} from './menu'

// 属性接口
export interface MenuItemProps {
    index: number;
    disable?: boolean;
    className?: string;
    style?: React.CSSProperties
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
    const {
        index,
        disable,
        className,
        style,
        children
    } = props
    const context = useContext(MenuContext)
    const handleClick = (index: number) => {
        if (context.onSelect && !disable) {
            context.onSelect(index)
        }
    }
    const classes = classNames('root-menuItem', className, {
        'root-menuItem-disable': disable === true, 
        'active': index === context.index
    })
    return (
        <li className={classes} style={style} onClick={() => {handleClick(index)}}>
            {children}
        </li>
    )
}
export default MenuItem
