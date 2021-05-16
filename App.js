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