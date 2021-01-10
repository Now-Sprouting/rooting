import React, { ChangeEvent, FC, ReactElement, useState } from 'react'
import Input, { InputProps } from '../Input/input'
import classNames from 'classnames'

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => string[];
    onSelect?: (item: string) => void,
    renderOptions?: (item: string) => ReactElement
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
    const [inputValue, setinputValue] = useState(value)
    const [suggestions, setsuggestions] = useState<string[]>([])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setinputValue(value)
        if (value) {
            const result = fetchSuggestions(value)
            setsuggestions(result)
        } else {
            setsuggestions([])
        }
    }
    const handleSelect = (item: string) => {
        setinputValue(item)
        setsuggestions([])
        if (onSelect) {
            onSelect(item)
        }
    }
    const renderTemplete = (item: string) => {
        return renderOptions ? renderOptions(item) : item
    }
    const listRender = () => {
        if (suggestions.length > 0) {
            return (
                <div className='rooting-autoList'>
                    {suggestions.map((item) => {
                        return <li key={item} onClick={() => { handleSelect(item) }}>{renderTemplete(item)}</li>
                    })}
                </div>
            )
        }
    }
    const classes = classNames('rooting-auto-complete', className)
    return (
        <div className={classes} style={style}>
            <Input value={inputValue} {...restProps} onChange={(e) => { handleChange(e) }} style={{ width: '100%' }}>
            </Input>
            {listRender()}
        </div>
    )
}
export default AutoComplete