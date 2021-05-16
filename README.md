## 💻 Languages and Tools.

![image](https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b)
![image](https://camo.githubusercontent.com/0b9bce580a369d91352cf37397f1e079ef104531fc0bc53a145deb8f43fca535/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f4e61746976652d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642)

## 📋  Requirements.
React Native apps may target iOS 11.0 and Android 5.0 (API 21) or newer. You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS. Tools like [Expo](https://expo.io/) can be used to work around this.

## 📲 Introduction.

![image](https://user-images.githubusercontent.com/83431609/118406771-ad3e1580-b653-11eb-9746-79ea00e7997a.png)
![image](https://user-images.githubusercontent.com/83431609/118406784-bd55f500-b653-11eb-9d62-2fe847d0ed0c.png)
![image](https://user-images.githubusercontent.com/83431609/118406796-c8a92080-b653-11eb-864c-4179066096d9.png)

## 👨🏿‍💻 Code.

```js

import React from 'react'
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';

  const data = [
    {
      title: 'Economize tempo organizando seus estudos',
      text: 'Organize seus horários,\n aulas, tarefas e etc',
      image: require('./Assets/Images/Group1.png'),
      
    },
    {
      title: 'Nunca deixa os conteúdos acumularem',
      text: 'Uma boa organização melhora\n seus resultados.',
      image: require('./Assets/Images/Group2.png'),
   
    },
    {
      title: 'Passe mais tempo fazendo aquilo que você ama',
      text: "Reduza seu estresse e aumente sua produtividade.",
      image: require('./Assets/Images/Group3.png'),
      
    },
  ];


  const App = (props) =>{
  
  const renderItem = ({item}) =>{

  return (
    <View>
      <Image source={item.image} style={Imagem} />
      <View style={Tela2}>
        <Text style={Titulo}>{item.title}</Text>
        <Text style={Texto}>{item.text}</Text>
      </View>
    </View>


    )
  }
  
  const KeyExtractor = (item) => item.title;
  
  const renderDoneButton = () => {
    return (
      <View>
        <Text style={{color: '#1C215D', fontSize: 16}} >Done</Text>
      </View>
    )
  }
  const renderNextButton = () =>{
    return(

      <View>
        <Text style={{color:'#1C215D', fontSize: 16}} >Next</Text>
      </View>
    )
  }

  const renderPrevButton = () =>{
    return(

      <View>
        <Text style={{fontSize: 16}}>Back</Text>
      </View>

    )
  }
  
  
  return (
    <View style={Tela}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={KeyExtractor}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          showPrevButton
          showDoneButton
          activeDotStyle={activeDotStyle}
          dotStyle={dotStyle}
          data={data}
        />
      </View>

    
  )


}

export default App;

const estilo = StyleSheet.create({
  
  Tela:{

    flex: 1,
    backgroundColor: 'white',
  

  },
  Tela2:{

    alignItems:'center',
    justifyContent: 'center',


  },

  Imagem:{

    marginTop: 195,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',


  },

  Titulo: {

    marginTop: 15 ,
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',



  },

  Texto:{

    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    marginTop: 10,

  },
  activeDotStyle: { 

    backgroundColor: '#1C215D'


  },
  dotStyle: {

    backgroundColor: '#8D8FAD'




  },

  




})

const {Tela, Tela2, Imagem, Titulo, Texto, activeDotStyle, dotStyle} = estilo;
```
