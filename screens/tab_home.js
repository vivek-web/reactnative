
import React,{ Component } from 'react';
import 'react-native-gesture-handler';
import {Image,TouchableOpacity,View,Text,} from 'react-native';

export default class tab_home extends Component{
    render(){
        
            return(<View style={{backgroundColor:'#e1f4f3',width:'100%',height:'100%'}}>
              <View style={{flex:1}}>
                <View style={{marginTop:'15%',marginLeft:'10%',}}>
                    <Image style={{width: 80, height:80,}} source={require('../images/6.png')}/>
                </View>
                <View style={{marginLeft:'12.5%',marginTop:'7%',alignItems:'center',marginHorizontal:'12.5%'}}>
              <Text style={{fontSize:17}}>Wij dringende wijselijk zij zes mekongdal bijge ret loof. Wolken mag bamboe mee genoeg die. Dan beteekent  </Text>
            </View>
              </View>
               <View style={{flex:3,marginTop:100}}>
                  <View  style={{flexDirection:'row',marginLeft:'12.5%'}}>
                    <TouchableOpacity>
                      <View style={{backgroundColor:'white',width: 125, height: 125,}}>
            <Image style={{padding:17,marginLeft:15,marginTop:25,position:'absolute',height:10,width:10}} source={require('../images/t.png')} />
            <Text style={{marginLeft:15,marginTop:100}}>Transactions</Text>
            </View>
            </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={{backgroundColor:'white',width: 125, height: 125,marginLeft:'5%'}}>
                      <Image style={{padding:17,marginLeft:15,marginTop:25,position:'absolute',height:10,width:10}} source={require('../images/b.png')} />
                        <Text style={{marginLeft:15,marginTop:100}}>Bills</Text></View>
                    </TouchableOpacity>
                  </View>
                  <View  style={{flexDirection:'row',marginLeft:'12.5%',marginTop:50}}>
                    <TouchableOpacity>
                      <View style={{backgroundColor:'white',width: 125, height: 125,}}>
                      <Image style={{padding:17,marginLeft:15,marginTop:25,position:'absolute',height:10,width:10}} source={require('../images/i.png')} />
                      <Text style={{marginLeft:15,marginTop:100}}>Invoices</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={{backgroundColor:'white',width: 125, height: 125,marginLeft:'5%'}}>
                      <Image style={{padding:17,marginLeft:15,marginTop:25,position:'absolute',height:10,width:10}} source={require('../images/s.png')} />
                      <Text style={{marginLeft:15,marginTop:100}}>Support</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              
              </View>
            );
          
          
    }
}