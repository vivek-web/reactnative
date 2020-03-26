import React,{ Component } from 'react';
import 'react-native-gesture-handler';
import {Image,TouchableOpacity,View,Text,ScrollView} from 'react-native';

export default class tab_feed extends Component{
    constructor(props)
    {super(props);
    this.state={
        isLoading :true,
        datasource:[],
    }
}
    componentDidMount()
    {return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((responseJson)=>
            {this.setState({
                isLoading:false,
                datasource: responseJson})})
                .catch(console.log)           
   
   }
   
    render()

    {   if(this.state.isLoading){
        return(
            <View><Text>check your internet connection</Text></View>
        ) }
        else{ return(
             this.state.datasource.map((data)=>(
            <View style={{marginTop:10,paddingTop:10}}>
                <View ><Text>{data.name}</Text></View>
                <View ><Text>{data.email}</Text></View>
                <View><Text>{data.username}</Text></View>
            </View>
        )))

                
              };
              
              
          
        }   



     
}

