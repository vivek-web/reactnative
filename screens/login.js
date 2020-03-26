
import React,{ Component } from 'react';
import 'react-native-gesture-handler';
import {TouchableOpacity,View,Text,TextInput} from 'react-native';
 

export default class login extends Component{
    render(){const {navigate}=this.props.navigation;
        var username=''
        var password=''
        return(  
                <View style={{backgroundColor:'#e1f4f3',height:'100%',width:'100%'}}>
                <Text style={{fontSize:45,marginTop:'30%',marginLeft:'10%',fontWeight:'bold'}}>Welcome,</Text>
                 <Text style={{fontSize:25,marginLeft:'10%'}}>Sign in to Continue</Text>
                 <View style={{paddingVertical:12,marginLeft:'7%',marginRight:'10%'}}>
                   <TextInput style={{height:40,borderRadius:10,fontSize:20,marginTop:'7%',backgroundColor:'#ffffff'}} placeholder="Username" onChangeText={(text)=> username=text} />
                   <TextInput style={{height:40,borderRadius:10,fontSize:20,marginTop:'2%',backgroundColor:'#ffffff'}} placeholder="Password" onChangeText={(text1)=> password=text1} />
                 </View>
                 <View style={{flex:1,padding:10,width:'70%',marginLeft:'5%',}}>
                   <TouchableOpacity style={{width:'100%',borderRadius:15,alignItems:'center',padding:10,backgroundColor:'#142850'}} onPress={()=>
                    {if (username=='admin' && password == 'Admin@123') 
                       {  
                         navigate('tab')
                       } else
                        {alert('Invalid credentials')
                         }}}>
                        <Text style={{fontSize:18,color:'white'}}>Submit</Text>
                   </TouchableOpacity>
                 </View>
                 
               </View>
               
               
                 
            
               
               
        )
    }

}