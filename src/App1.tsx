import React from 'react';
import AutoComplete, { DataSourceType } from './components/AutoComplete/autoComplete'


interface PlayerlistWithNumberProps {
    value: string;
    number: number;

}
function App1() {
    const Playerlist = ['James', 'Curry', 'Durant', 'Irving', 'Davis', 'George', 'Harden', 'Antetokounmpo', 'DeRozan', 'Embiid', 'Love', 'Green', 'Thompson', 'Butler', 'Lillard']

    const PlayerlistWithNumber = [
        { value: 'James', number: 23 },
        { value: 'Curry', number: 30 },
        { value: 'Durant', number: 35 },
        { value: 'Irving', number: 2 },
        { value: 'Davis', number: 23 },
        { value: 'George', number: 13 },
        { value: 'Harden', number: 13 },
        { value: 'Antetokounmpo', number: 34 },
        { value: 'DeRozan', number: 10 },
        { value: 'Embiid', number: 21 },
        { value: 'Love', number: 0 },
        { value: 'Green', number: 23 },
        { value: 'Thompson', number: 11 },
        { value: 'Butler', number: 23 },
        { value: 'Lillard', number: 0 },
    ]
    // const handleFetch = (input: string) => {
    //     return Playerlist.filter(item => {
    //         return item.includes(input)
    //     }).map(item => { return { value: item } })
    // }
    // const handleRender = (item: string) => {
    //     return (
    //         <h1>球员: {item}</h1>
    //     )
    // }


    const handleFetch = (input: string) => {
        return PlayerlistWithNumber.filter(item => {
            return item.value.includes(input)
        })
    }
    const handleRender = (item: DataSourceType) => {
        const itemWithNumber = item as DataSourceType<PlayerlistWithNumberProps>
        return (
            <>
                <span style={{marginRight: '20px'}}>球员: {itemWithNumber.value}</span>
                <span>号码: {itemWithNumber.number}</span>
            </>
        )
    }
    return (
        <div style={{ marginLeft: '20px' }}>
            <h1>autoComplete</h1>
            <AutoComplete
                style={{ width: '500px' }}
                fetchSuggestions={handleFetch}
                renderOptions={handleRender}
                onSelect={(item) => {
                    console.log(item);
                }}>
            </AutoComplete>
        </div>
    );
}

export default App1;
