import React from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import {HandleItems} from './handle_items'
import {HandleCategory} from './handle_category'
import {HandleDetail} from './handle_detail'
import {Modify} from '../Modify/modify'
import {ModifyItems} from '../Modify/modifyitems'
import {ModifyCategory} from '../Modify/modifycategory'
import{Login} from '../authentication/login'
import{Signup} from '../authentication/signup'
import {Update} from '../Modify/updateitem'
import {Mobiles} from './mobiles'
import {CreateItem} from '../Modify/createitems'
import {Cookies, CookiesProvider, withCookies} from 'react-cookie'
import {instanceOf} from 'prop-types'
import {Main} from './animation'



class DataStore extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor (props) {
        super(props)
       const {cookies}=this.props
    
        this.state={
            admittance:true,
            category:[],
            items:[],
            loading_done:true,
            refresh : true,
            isAuthenticated:cookies.cookies.token? true :false,
            isAdmin :false
        }
    this.adminCheck=this.adminCheck.bind(this)
    this.refresh=this.refresh.bind(this)
    this.LogOut=this.LogOut.bind(this)
    this.setAdmittance=this.setAdmittance.bind(this)
    } 

     componentDidMount () {
        const {cookies}=this.props
      
         this.refresh()
         this.adminCheck()
        axios.get('http://localhost:8000/')
              .then(res=> {this.setState({
                  category:res.data[0],
                  items : res.data[1],
                 loading_done:true,

              })
             
              })
             
    } 
   
  adminCheck () {
    const {cookies}=this.props
   
if (cookies.cookies.token)  {
        
    axios.get('http://localhost:8000/accounts/admin', {
        headers:{'Authorization':`Bearer ${cookies.cookies.token}`}
        })
        .then (res=>{
    
    if (res.status===200 && res.data.message ==='admin')
        {
          
          this.setState({
              isAdmin:true
          })
         
   
        }
    })
     

    }
   
}
refresh () {
   
    const {cookies}=this.props
       
       if (cookies.cookies && cookies.cookies.refresh)   
        {
            axios('http://localhost:8000/accounts/api/token/refresh/',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            data:JSON.stringify( {'refresh':`${cookies.cookies.refresh}`})
})
        .then (res => {
            cookies.set('token', res.data.access)
            console.log(res.data.access)
            
    })}
    
        
}
LogOut () {
    const {cookies} =this.props
    cookies.remove('token')
    cookies.remove('refresh')
    this.setState({isAdmin:false,isAuthenticated:false})
    


   
}
setAdmittance (val) {
    this.setState({admittance:false})
}

    render () {
        if (this.state.isAdmin) { setInterval( ()=> { this.refresh()},300000)}
      
        const loading_done=this.state.loading_done
        
        if (loading_done) {
           
            return (
                <div id="preRoot">
                <Router> 
                <div className="headerBar">
                  <Link to ='/' > Main</Link>
                  <Link to ="/show/">Show</Link>
                 { this.state.isAdmin ?
                  <Link to ='/modify'>Modify</Link> : ''}
                   <Link onClick={()=>this.LogOut()} to={this.state.isAuthenticated? '/' : '/login'}>
                   {this.state.isAuthenticated? 'LOGOUT' : 'LOGIN' }</Link>
                   <Link to={this.state.isAuthenticated? '' : '/signup'}>
                   {this.state.isAuthenticated? '' : 'SingUp' }</Link>
                   
                </div>
               
                <div id = "maincontainer">

                    <Switch>
                      
                       <Route  exact path="/modify" > <Modify categories={this.state.category} items={this.state.items}/> </Route>
                       <Route  exact path="/modify/:categoryid" > <ModifyItems categories={this.state.category} items={this.state.items}/> </Route>
                       <Route exact  path="/" > <Main  state={this.state.admittance} func={this.setAdmittance}></Main></Route>
                       <Route exact  path="/show/" component={()=> <HandleCategory categories={this.state.category} />} ></Route>            
                       <Route exact path="/:categoryid" component={()=> <HandleItems items={this.state.items}/>} ></Route>                       
                       <Route exact path="/:categoryid/:itemid" component={()=> <HandleDetail items={this.state.items}/>}/>
                    
                      
                    </Switch>
                    <Switch>
                 
                    <Route  exact path = "/login" ><CookiesProvider> <Login  reload={()=>this.reloading()} update={this.setAuthentication} /></CookiesProvider></Route>
                   
                    <Route exact path = "/signup" > <CookiesProvider><Signup update={this.setAuthentication} /></CookiesProvider></Route>
                    </Switch>
                    <Switch>
                               <Route exact path="/create/"> 
                                      <CreateItem categories={this.state.category} items={this.state.items}/>
                                 </Route> 
                                 <Route exact path="/modify/:catid/:itemid/update"> 
                                      <Update categories={this.state.category} items={this.state.items}/>
                                 </Route>
                                
                    </Switch>
                    <Switch>
                        <Route exact path = "/createcategory/" >
                            <ModifyCategory  categories={this.state.category}/>
                        </Route>
                        <Route exact path = "/createcategory/modifycategory/:id/" >
                            <ModifyCategory  categories={this.state.category}/>
                        </Route>
                    </Switch>
                   </div>
                   <Switch>
                   <Route exact path ="/mobiles/"> <Mobiles></Mobiles></Route>
                   </Switch>
                 </Router>
                
                </div>
            )
        }
        return (<div id ="loading" >
         <span>
        we are loading the data please wait
        </span>
        </div>)
    }
}
export default withCookies( DataStore);
