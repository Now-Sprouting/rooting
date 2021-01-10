import React from 'react';
import AutoComplete from './components/AutoComplete/autoComplete'

function App1() {
    const Playerlist = ['James', 'Curry', 'Durant', 'Irving', 'Davis', 'George', 'Harden', 'Antetokounmpo', 'DeRozan', 'Embiid', 'Love', 'Green', 'Thompson', 'Butler', 'Lillard']

    const PlayerlistWithNumber = [
        { name: 'James', number: 23 },
        { name: 'Curry', number: 30 },
        { name: 'Durant', number: 35 },
        { name: 'Irving', number: 2 },
        { name: 'Davis', number: 23 },
        { name: 'George', number: 13 },
        { name: 'Harden', number: 13 },
        { name: 'Antetokounmpo', number: 34 },
        { name: 'DeRozan', number: 10 },
        { name: 'Embiid', number: 21 },
        { name: 'Love', number: 0 },
        { name: 'Green', number: 23 },
        { name: 'Thompson', number: 11 },
        { name: 'Butler', number: 23 },
        { name: 'Lillard', number: 0 },
    ]
    const handleFetch = (input: string) => {
        return Playerlist.filter(item => {
            return item.includes(input)
        })
    }
    const handleRender = (item: string) => {
        return (
            <h1>球员: {item}</h1>
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
