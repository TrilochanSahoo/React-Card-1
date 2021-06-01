import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

function Disney(){
    return (
        <div className="container search">
            {Sdata.map((value)=>{
                if(value.link.includes('hotstar', 12)){
                    return (
                        <Card key ={value.id}
                            image ={value.imgsrc}
                            title = {value.title}
                            desc = {value.desc}
                            link = {value.link}
                        />
                    )
                }
            })}

        </div>
    )
}

export default Disney;