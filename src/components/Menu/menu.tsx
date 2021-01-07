import React, { createContext, useState } from 'react'
import classNames from 'classnames'


// 字面量代替枚举
type MenuMode = 'horizontal' | 'vertical'
type selectCallback = (selectIndex: number) => void
// 属性接口
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: selectCallback
}
// context 接口
interface IMenuContext {
    index: number,
    onSelect?: selectCallback
}
// 创建 context 默认值为子组件传递索引和父组件选择的回调函数
export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
    const {
        defaultIndex,
        className,
        mode,
        style,
        children,
        onSelect
    } = props
    const [currentIndex, setCurrentIndex] = useState(defaultIndex)
    const handleClick = (index: number) => {
        setCurrentIndex(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passContext: IMenuContext = {
        index: currentIndex ? currentIndex : 0,
        onSelect: handleClick
    }
    const classes = classNames('root-menu', className, {
        'root-menu-vertical': mode === 'vertical'
    })
    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}
export default Menu
