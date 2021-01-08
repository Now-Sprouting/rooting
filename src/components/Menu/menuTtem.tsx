import React, { useContext } from 'react'
import classNames from 'classnames'

import {MenuContext} from './menu'

// 属性接口
export interface MenuItemProps {
    label: string;
    index?: number;
    disable?: boolean;
    className?: string;
    style?: React.CSSProperties
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
    const {
        label,
        index,
        disable,
        className,
        style,
    } = props
    const context = useContext(MenuContext)
    const handleClick = (index?: number) => {
        if (context.onSelect && !disable && typeof index === 'number') {
            context.onSelect(index)
        }
    }
    const classes = classNames('rooting-menuItem', className, {
        'disable': disable === true, 
        'active': index === context.index
    })
    return (
        <li className={classes} style={style} onClick={() => {handleClick(index)}}>
            {label}
        </li>
    )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem
