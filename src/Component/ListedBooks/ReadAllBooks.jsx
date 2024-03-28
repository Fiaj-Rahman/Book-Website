// import React from 'react';
// import '../Banner/Banner.css';
// import { IoMdPeople } from "react-icons/io";
// import { MdOutlineContactPage } from "react-icons/md";
// import { Button } from '@material-tailwind/react';
// import { CiLocationOn } from "react-icons/ci";

// const ReadAllBooks = ({data}) => {


//     const {
//         bookId,
//         bookName,
//         author,
//         image,
//         review,
//         totalPages,
//         rating,
//         category,
//         tags,
//         publisher,
//         yearOfPublishing
//     } = data || {};

//     return (
//         <div className="card card-side bg-base-100 shadow-xl mx-auto max-w-7xl mt-5 mb-10">
//   <figure><img src={image} alt="Movie" className='cardImage p-4'/></figure>
//   <div className="card-body">
//     <h2 className="card-title">{bookName}</h2>
//     <p>By : {author}</p>
//     <div className='flex gap-6 mb-2'>
//         <span className=' font-bold align-center justify-center'>tag</span>
//                 <div className='flex gap-3 justify-between'>
//                     <div>
//                     {tags && tags.map((tag, index) => (
//                         <div key={index} className="badge badge-outline tagsAll">{tag}</div>
//                     ))}
//                     </div>

//                     <div className='flex gap-1'><CiLocationOn /> Year of Publishing : {yearOfPublishing}</div>
//                 </div>
//                 </div>
    
//     <div className='FullCardDetails'>
//         <div className='flex gap-2'>
//         <IoMdPeople /> <span>Publisher : {publisher}</span>
//         </div>

//         <div className='flex gap-2'>
//         <MdOutlineContactPage /> <span>Page {totalPages}</span>
//         </div>
//     </div>
//     <hr />
    

//     <div className="card-actions mt-4">
//       <span className='bg-info rounded-lg p-2 font-bold'>Category : {category}</span>
//       <span className='bg-info rounded-lg p-2 font-bold'>Rating : {rating}</span>
//       <Button>View Details</Button>
//     </div>
//   </div>
// </div>
//     );
// };

// export default ReadAllBooks;