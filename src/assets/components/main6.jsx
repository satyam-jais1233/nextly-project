import React from "react";
import img8 from "../image/user1.webp";
import img9 from "../image/user2.webp";
import img10 from "../image/user3.webp";
function Main6() {
  return <>
  
         <div className="container-fluid bg-dark text-center py-5">
                 <div className="row g-3">
                   <div className="col-12 col-md-4">
                     <div className="p-5  rounded text-light shadow fs-4">
                       <p>
                         Share a real testimonial that hits some of your benefits from
                         one of your popular customer.
                       </p>
                       <div className="d-flex justify-content-center">
                         <img
                           src={img8}
                           className="img-fluid d-flex justify-content-start rounded-circle"
                         />
                         <div className="fs-5">
                           <h1>Sarah Steiner</h1>
                           <p>VP Sales at Google </p>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="col-12 col-md-4">
                     <div className="p-5  rounded text-light shadow fs-4">
                       <p>
                         Make sure you only pick the right sentence to keep it short and
                         simple.
                       </p>
                       <div className="d-flex justify-content-center ">
                         <img
                           src={img9}
                           className="img-fluid d-flex justify-content-start rounded-circle"
                         />
                         <div className="fs-5">
                           <h1>Dylan Ambrose</h1>
                           <p>Lead marketer at Netflix </p>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="col-12 col-md-4">
                     <div className="p-5  rounded text-light shadow  fs-4">
                       <p>
                         This is an awesome landing page template I've seen. I would use
                         this for anything.
                       </p>
                       <div className="d-flex justify-content-center">
                         <img
                           src={img10}
                           className="img-fluid d-flex justify-content-start rounded-circle"
                         />
                         <div className="fs-5">
                           <h1>Gabrielle Winn</h1>
                           <p>Co-founder of Acme Inc</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="container-fluid bg-dark py-5">
                 <div className="text-center">
                   <h2 className="fs-6 text-primary">FAQ</h2>
         
                   <h4 className="fw-bolt fs-1 text-light">
                     Frequently Asked Questions
                   </h4>
         
                   <p
                     className="text-light fs-5 mx-auto m-0 "
                     style={{ maxWidth: "700px" }}
                   >
                     Answer your customers possible questions here, it will increase the
                     conversion rate as well as support or chat requests.
                   </p>
                 </div>
               </div>
  </>;
}
export default Main6;
