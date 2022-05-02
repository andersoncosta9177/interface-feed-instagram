import React, { useState } from 'react'
import { View, Text, StyleSheet,FlatList } from 'react-native'
import Header from './src/Header'
import List from './src/List/List'

function App() {
  const [feed,setFeed] = useState([
    {
      id: '1',
      nome: 'Lucas Silva',
      descricao: 'Mais um dia de trabalho',
      imgperfil: 'https://programadoresbrasil.com.br/wp-content/uploads/2019/10/mulher-programando-1200x900.jpeg',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: false,
      likers: 0
    },
    {
      id: '2',
      nome: 'Lucas Silva',
      descricao: 'Mais um dia de trabalho',
      imgperfil: 'https://programadoresbrasil.com.br/wp-content/uploads/2019/10/mulher-programando-1200x900.jpeg',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 33
    },
    {
      id: '3',
      nome: 'Lucas Silva',
      descricao: 'Mais um dia de trabalho',
      imgperfil: 'https://static.imasters.com.br/wp-content/uploads/2013/01/Figura1_ProgramarDivertido.jpg',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 4
    },
    {
      id: '4',
      nome: 'Lucas Silva',
      descricao: 'Mais um dia de trabalho',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 33
    },
    {
      id: '5',
      nome: 'Lucas Silva',
      descricao: 'Mais um dia de trabalho',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 98
    },
  ])

 
  return (
    <View style={styles.container}>
        <Header/>

   <FlatList
   showsVerticalScrollIndicator={false}
   keyExtractor={ (item) =>item.id}
   data={feed}
   renderItem={( {item})=> <List data={item}/>}
   
   />



        
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})


export default App