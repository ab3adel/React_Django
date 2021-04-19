import {useParams,Link} from 'react-router-dom'
export  const HandleItems= (props) =>{
  


   let {categoryid} =useParams()
   let [...items]=props.items 
   categoryid=parseInt( categoryid.substring(1))
   
   const itemsArr=items.filter(ele=>ele.category===categoryid? ele : '')
   
  return (
      <div id="itemsContainer">

      {itemsArr.map((ele,index)=>{
         if (ele && ele.image)
         { const Image = ele.image.substring(24)
          return (<div className="items" key={index} >
          <Link className="standA" to = {{pathname:`/${categoryid}/:${ele.id}`,state:{show:true}}}> 
                    <img className = 'cardImage'src={`${Image}`} alt = {`${ele.title}`}/> 
                    </Link>
                     <div className="cardText" >
                       <p> {ele.title} </p>
                       <p> {ele.price} </p>
                    </div>
                   
                 </div>)
      }})}
      
  
      </div>
  )
}
