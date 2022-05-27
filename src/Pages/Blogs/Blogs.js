import React from 'react';

const Blogs = () => {
    return (
        <div className='ml-12 m-8'>
            <h1 className='text-xl font-bold'>How will you improve the performance of a React Application?</h1>
            <p>Answer: There are lots of ways to improve the performance of react applicaton. <br />
                Here I'm describe some ways:
                <ul className='ml-8'>
                    <li>First of all we can use react router for routing.</li>
                    <li>We can use components.</li>
                    <li>We can use hooks.</li>
                    <li>We can use react forms</li>
                </ul>
            </p>
            <h1 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h1>
            <p>Answer: There are 4 ways,
                <br />
                They are :
                <ul className='ml-8'>
                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Server state</li>
                    <li>URL state</li>
                </ul>

            </p>
            <h1 className='text-xl font-bold'> How does prototypical inheritance work?</h1>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.
                It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
            </p>

            <h1 className='text-xl font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
            <p>In react usestate there have two parts one is variale and another is a function.
                We set the value to a variable by the function . In the above example here the products is variable and the setProducts returns a function. If want to set value to products then we have to do it by setProducts function. We can't directly put value to the variable. The variable receive value from the function.

            </p>
            <h1 className='text-xl font-bold'>What is a unit test? Why should write unit tests?</h1>
            <p>Answer: Unit testing is an essential instrument in the toolbox of any serious software developer. However, it can sometimes be quite difficult to write a good unit test for a particular piece of code. Having difficulty testing their own or someone else code, developers often think that their struggles are caused by a lack of some fundamental testing knowledge or secret unit testing techniques.
            Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.

            </p>

        </div>
    );
};

export default Blogs;