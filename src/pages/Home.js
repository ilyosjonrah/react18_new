import * as React from 'react';
// import Blog from './Blog';

const Home =  () => {
  
    const [data, setData] = React.useState([]);
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => setData(data));
    // console.log(data);
    return(
        <>
            {
                data.map((data,index) => (
                    <p key={data.id}>{data.title}</p>
                ))
            }
        </>
    )
}
       
export default Home;