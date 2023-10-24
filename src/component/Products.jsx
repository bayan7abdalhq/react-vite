import React from 'react'
import Product from './Product.jsx'

export default function Products() {


    const products = [
        {id:1,title:'Full stack',name:'with Tariq Shreem',desc:'Enroll in the Full Stack course and turn your programming dreams into reality!',about:'See Details'},
        {id:2,title:'Problem Solving',name:'with Tariq Shreem',desc:'Discover the keys to successful decision-making with our Problem Solving course!',about:'See Details'},
        {id:3,title:'Digital Markiting',name:'with Tariq Shreem',desc:'Unlock the secrets of successful digital marketing with our cutting-edge course!',about:'See Details'},
        {id:4,title:'Flutter',name:'with Tariq Shreem',desc:'Learn how to create stunning, high-performance apps with our Flutter course!',about:'See Details'},
        {id:5,title:'UI / UX',name:'with Tariq Shreem',desc:'Join our UI/UX Design course and become a proficient designer in no time!',about:'See Details'},
        {id:6,title:'QA',name:'with Tariq Shreem',desc:'Elevate your career with our comprehensive Quality Assurance (QA) course!',about:'See Details'},
        {id:7,title:'intro to cs',name:'with Tariq Shreem',desc:'Get a solid foundation in computer science principles with our specialized program!',about:'See Details'},
        {id:8,title:'C++',name:'with Tariq Shreem',desc:'Boost your programming career with our dynamic and interactive C++ course!',about:'See Details'},
    ];
  
  return(
    <>
    <div className='products d-flex container justify-content-center pb-5 flex-wrap'>

      {products.map((product)=>{
        return <Product {...product} key={product.id}/>
      })}
    </div>
    </>
  )

}
