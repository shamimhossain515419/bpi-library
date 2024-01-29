"use client"

const page = () => {

     const handleClick = async () => {
          const postData = {
               title: "shamim",
               image: "https://lcoajdf.jpg",
               category: "new brand",
               price: 34
          }

          const requestOptions = {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json' // You may need to adjust the content type based on your API requirements
               },
               body: JSON.stringify(postData)
          };
          const res = await fetch('http://localhost:3000/api/products', requestOptions);
          const data = await res.json();
          console.log(data);
     }

     return (
          <div>
               <div className=" p-9">
                     <button onClick={handleClick} className=" p-4   bg-red-400 text-white  rounded"> Click post</button>
               </div>
          </div>
     );
};

export default page;