import React, { useEffect, useState } from 'react';


const ManageTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/tools")
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
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
                                tools.slice(0, 6).map(tool =>
                                    <tr>

                                        <td>{tool.name}</td>
                                        <td>{tool.minorder}</td>
                                        <td>{tool.availableQuantity}</td>
                                        <td>{tool.price}</td>
                                        <td>
                                            <button className='btn btn-primary'>Delete</button></td>
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