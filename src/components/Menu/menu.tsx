import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuTtem'

// 字面量代替枚举
type MenuMode = 'horizontal' | 'vertical'
type selectCallback = (selectIndex: number) => void
// 属性接口
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    displayContant?: boolean;
    onSelect?: selectCallback;
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
        displayContant,
        onSelect
    } = props
    const [currentIndex, setCurrentIndex] = useState(defaultIndex)
    // 类型断言(正常编写代码)
    let a = children as Array<any>
    const [contant, setContant] = useState(a[currentIndex as number].props.children)
    const handleClick = (index: number) => {
        setCurrentIndex(index)
        setContant(a[index].props.children)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passContext: IMenuContext = {
        index: currentIndex ? currentIndex : 0,
        onSelect: handleClick
    }
    const classes = classNames('rooting-menu', className, {
        'rooting-menu-vertical': mode === 'vertical',
        'rooting-menu-horizontal': mode === 'horizontal'
    })
    const contentClasses = classNames('menu-content', {
        'displayContant': displayContant === false
    })
    // 对 chlidren 类型进行约束(只能是 MenuItem)
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            // 类型断言
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem') {
                // 复制节点并在元素上面追加属性
                return React.cloneElement(childElement, { index: index })
            } else {
                console.error('Menu 的子元素只能是 MenuItem');
            }
        })
    }

    return (
        <div>
            <ul className={classes} style={style}>
                <MenuContext.Provider value={passContext}>
                    {renderChildren()}
                </MenuContext.Provider>
                <div className={contentClasses}>
                    {contant}
                </div>
            </ul>
        </div>
    )
}
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}
export default Menu
