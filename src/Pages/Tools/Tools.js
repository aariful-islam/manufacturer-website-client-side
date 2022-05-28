import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("https://floating-basin-04314.herokuapp.com/tools")
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            <p className='text-3xl text-center'>Our Tools</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ml-12 gap-4'>

                {
                    tools.slice(0, 6).map(tool => <Tool
                        key={tool.id}
                        tool={tool}
                    ></Tool>)

                }

            </div>


        </div>
    );
};

export default Tools;