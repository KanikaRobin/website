import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


export default class App extends Component {
//functions 
  render(){
     var Headings = {
         fontSize: 40,
         color: '#FF0000'
      }

 var mystyle = {
      fontSize: 20,
      color: 'red'
  }

    var myStyle = {
         fontSize: 30,
         color: 'green'
  }
    return(
       <View style = {{marginBottom:500}}>
       <div>
      <h1 style = {Headings}>MY OWN WEBSITE</h1>
     </div>

     <h1> About ME: </h1> 
      
    <h2 > 
       <h1 style = {myStyle}> What Do I Do!!!: </h1>
    It was an other interesting day in my house as we were playing chess 
       during the holidays!!!,OH!!! I forgot to introduce                           myself I am Harrison,I am studing in class 7th in Chrysalis High.            Moving on, I was not so good at playing chess and I was not good at           anything that was what I used to always think. 
       
        <h1 style = {myStyle}> The Iron Man to the rescue : </h1>
       
     Until!!! My grandfather put me into a online coding class called            <h2 style = {mystyle}> WhitehatJr </h2>. It completely changed my           thoughts, my feelings I thought that I could work hard towards this          and acheive a goal, then my grandfather put me into a music class were       I noticed I had a talent for playing music then I thanked my                 grandfather for putting me into these classes, that day he said              "Harrison, everyone is good in something you have to take a goal and         work hard towards it" and then my life was perfect and I promised            myself that I would never forget my grandfather. 

  </h2>   

<h1 style = {Headings}> More About My School Experience:</h1>
  <h2>    
     The first day of my school, when I entered everyone was 
     looking at me; Initially, I thought I was new to school and  that was why everyone was looking at me but NO!!, Even the teachers, the 10th graders everyone, 
     the WHOLE school!! the WHOLE INDIA THE WHOLE EARTH was looking at me 
     I did not know why!!!.then I was told that a guy who looked just like        me was a famous person in the WHOLE school. I WAS Dommed but that was        the best experience I ever had
</h2>   

<h1 style = {Headings}> MY SCHOOL:</h1>
  <a href = "https://www.chrysalishigh.com/assets/images/default-school.JPG"> MY School photo</a> 
       </View>
    );
  }
}
