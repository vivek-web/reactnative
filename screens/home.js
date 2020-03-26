
import React,{ Component } from 'react';
import 'react-native-gesture-handler';
import {TouchableOpacity,View,Text,Image} from 'react-native';


export default class home extends Component{
    
    render()
    {   const {navigate}=this.props.navigation;
        return( 
        <View style={{alignItems: 'center'}}>
         <Image
         style={{width: '100%', height: '100%'}}
         source={require('../images/4.jpg')}
         />
         <View style={{
           flex: 1,
           width: '100%',
           height: '100%',
           alignItems: 'center',
           alignContent: 'center',
           position:'absolute',
           
         }}>
           <View style={{
             flex: 1,
             width: '100%',
             height: '50%',
             alignContent:'center',
             alignItems:'center',
             marginTop:'75%'
             
             }}>
             <Text style={{color:'white',fontSize:50,}}>Welcome !</Text>
             <Text style={{color:'white',fontSize:23,marginLeft:25,marginRight:25,marginTop:140}}>Feel less stressed and more mindful</Text>
             <Text style={{color:'white',fontSize:23}}>with meditaion</Text>
           </View>
           <View style={{
             flex: 1,
             width: '100%',
             height: '50%',
             marginTop:'25%',
             alignItems:'center',
             justifyContent:'center' }} >
             <View style={{flex: 1, alignItems:'center',width:'70%',margin:14,}}> 
               <TouchableOpacity onPress={()=> navigate('login')}
                 style={{backgroundColor:'#26baae',padding:12,width:'100%', borderRadius:15,alignItems:'center'} }>
                 <Text style={{color:'white',fontSize:22}}>Login</Text>
               </TouchableOpacity>      
             </View>         
               <Text style={{fontSize:16,color:'white'}}>Dont have an account? Signup</Text>         
             </View>
         </View>  
         
         </View>
       
         );
    
    }
}



 /**function home({navigation})
{
  
   
};
 */           
        