import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button/index'


const datas = [
    {
        id: 1,
        name: 'Richard'
    }, {
        id: 2,
        name: 'Kelly'
    }
]

function App() {
    return (
        <div className="App">
            {
                datas.map((data, idx) => {
                    return (
                        <Button datas={datas} data={data} />
                    )
                })
            }
        </div>
    );
}

export default App;
