import React, { useEffect, useState } from 'react';


const ManageTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("https://floating-basin-04314.herokuapp.com/tools")
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])


     

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `https://floating-basin-04314.herokuapp.com/tools/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                 
                    const remaining = tools.filter(tool => tool._id !== id);
                    setTools(remaining);

                   
                   
                })
        }
        
    }




    return (
        <div>
            <p className='text-3xl text-center'>Our Tools</p>
            <div >
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>

                                <th>Tools Name</th>
                                <th>MIn order</th>
                                <th>Avaible Tools</th>
                                <th>price</th>
                                <th>Delete Tools</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tools.map(tool =>
                                    <tr>

                                        <td>{tool.name}</td>
                                        <td>{tool.minorder}</td>
                                        <td>{tool.availableQuantity}</td>
                                        <td>{tool.price}</td>
                                        <td>
                                            <button onClick={() => handleDelete(tool._id)} className='btn btn-primary'>Delete</button></td>
                                    </tr>)

                            }



                        </tbody>
                    </table>
                </div>



            </div>


        </div>
    );
};

export default ManageTools;