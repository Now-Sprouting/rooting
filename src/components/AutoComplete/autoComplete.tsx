import React, { ChangeEvent, KeyboardEvent, FC, ReactElement, useState, useEffect, useRef } from 'react'
import Input, { InputProps } from '../Input/input'
import Loading from '../Loading/loading'
import classNames from 'classnames'
import useDebunce from '../../hooks/useDebunce'
import useClickOutside from '../../hooks/useClickOutside'


interface DataSourceObject {
    value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: DataSourceType) => void,
    renderOptions?: (item: DataSourceType) => ReactElement
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const {
        fetchSuggestions,
        onSelect,
        renderOptions,
        value,
        style,
        className,
        ...restProps
    } = props
    const [inputValue, setinputValue] = useState(value as string)
    const [suggestions, setsuggestions] = useState<DataSourceType[]>([])
    const [loadingVisivale, setLoadingVisivale] = useState(false)
    const [highLightIndex, setHighLightIndex] = useState(-1)
    const debuceValue = useDebunce(inputValue, 500)
    // 解决 select 后重新搜索的 bug(useState也可以实现相同功能)
    const triggerSearch = useRef(false)
    const componentRef = useRef<HTMLDivElement>(null)
    useClickOutside(componentRef, ()=> {setsuggestions([])})
    useEffect(() => {
        if (debuceValue && triggerSearch.current) {
            setLoadingVisivale(true)
            const result = fetchSuggestions(debuceValue)
            if (result instanceof Promise) {
                result.then((resolve) => {
                    setsuggestions(resolve)
                    setLoadingVisivale(false)
                })
            } else {
                setsuggestions(result)
            }
        } else {
            setsuggestions([])
        }
        setHighLightIndex(-1)
    }, [debuceValue, fetchSuggestions])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        const value = e.target.value.trim()
        setinputValue(value)
        triggerSearch.current = true
    }
    const handleSelect = (item: DataSourceType) => {
        setinputValue(item.value)
        setsuggestions([])
        if (onSelect) {
            onSelect(item)
        }
        triggerSearch.current = false
    }
    const highlight = (index: number) => {
        if (index <= -1){
            index = 0
        }
        if (index >= suggestions.length){
            index = suggestions.length - 1
        }
        setHighLightIndex(index)
    }
    const handleKeyDowm = (e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'ArrowUp':
                highlight(highLightIndex - 1)
                break;
            case 'ArrowDown':
                highlight(highLightIndex + 1)
                break;
            case 'Escape':
                if(suggestions.length > 0) {
                    setsuggestions([])
                }
                break;
            case 'Enter':
                handleSelect(suggestions[highLightIndex])
                break;
            default:
                break;
        }
    }
    const renderTemplete = (item: DataSourceType) => {
        return renderOptions ? renderOptions(item) : item.value
    }
    const listRender = () => {
        if (suggestions.length > 0) {
            return (
                <div className='rooting-autoList'>
                    {suggestions.map((item, index) => {
                        const highLight = classNames('listItem', {
                            'hightLight': index === highLightIndex
                        })
                        return <li className={highLight} key={item.value} onClick={() => { handleSelect(item) }}>{renderTemplete(item)}</li>
                    })}
                </div>
            )
        }
    }
    const classes = classNames('rooting-auto-complete', className)
    return (
        <div className={classes} style={style} ref={componentRef}>
            <Input
                value={inputValue}
                style={{ width: '100%' }}
                onChange={handleChange}
                onKeyDown={handleKeyDowm}
                {...restProps}>
            </Input>
            {!loadingVisivale && listRender()}
            <Loading type='round' size='20px' gloable/>
            {loadingVisivale &&
                    <Loading type='round'/>
            }
        </div>
    )
}
export default AutoComplete