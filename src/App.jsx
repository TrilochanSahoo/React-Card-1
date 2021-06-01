import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

function App (){
    return (
        <div className="container">
            {Sdata.map((value) => {
        // console.log(value)
        return (
            <Card key = {value.id}
                image = {value.imgsrc}
                title = {value.title}
                desc = {value.desc}
                link = {value.link}
            />
        )
    })}
        </div>
    )
}

export default App;