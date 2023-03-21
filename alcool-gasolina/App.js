import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      precoAlcool: 0,
      precoGasolina: 0,
      resultado: ''
    };
    
    this.pegaPrecoAlcool = this.pegaPrecoAlcool.bind(this);
    this.pegaPrecoGasolina = this.pegaPrecoGasolina.bind(this);
    this.calcular = this.calcular.bind(this);
  }

    calcular(){
    res = this.state.precoAlcool / this.state.precoGasolina
    if (res > 0.7)
      texto = 'Melhor Gasolina'
    else
      texto = 'Melhor Alcool'
    this.setState({
      resultado: texto
    });
  }

  pegaPrecoAlcool(preco){
    this.setState({precoAlcool: preco});
  }

  pegaPrecoGasolina(preco){
    this.setState({precoGasolina: preco});
  }
 
  render(){
    return(
      <View style={styles.container}>

      <Text style={styles.titulo}>Álcool ou Gasolina</Text>

      <Image
            source={{ uri: 'https://m.media-amazon.com/images/I/61lcaZUfH9L.png' }}
            style={{width:120 ,height: 120, alignSelf: 'center', marginTop: 10}}
        />

      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        placeholderTextColor="black"
        onChangeText={this.pegaPrecoAlcool}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        placeholderTextColor="black"
        onChangeText={this.pegaPrecoGasolina}
      />

      <Button title="Calcular" onPress={this.calcular} />
 
      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}
 
export default App;