import {Link} from 'react-router-dom'

export const HandleCategory = (props) => {

   const category=[...props.categories]
   const hover= (eve)=>{
      
      if (eve.currentTarget.className ==="container")

      
     
   {
                     eve.currentTarget.className="containerHover"
                     
                  
         if (eve.currentTarget.children[0].className==="title")  
                 {
                   eve.currentTarget.children[0].className="titlex"
                  
                 
                }
   } 
   
   }
  const endhover = (eve) =>{
    
    if (eve.currentTarget.className ==="containerHover")
    {
    
                      eve.currentTarget.className="container"    
          if (eve.currentTarget.children[0].className==="titlex")  
                  {
                    eve.currentTarget.children[0].className="title"
             
                 }
    } 
  }
 

  
 return  (
    <div id ="itemsContainer">
    {  category.map((ele,index)=> {
        let imgHandle=ele.image.substring(23)
        return (
          
          <Link   to ={`/:${ele.id}`} key={index}>
            <div className="container" style={{backgroundImage:`url(${imgHandle})`,backgroundSize:'cover',backgroundPosition:'center'}}>
           
           
             <div className="title" >
                    {ele.title} 
            </div>
            </div>
            </Link>
            
        )     
    })}
    
    </div>
    )
}
