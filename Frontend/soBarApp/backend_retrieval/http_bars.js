import React, { Component } from 'react'
import { View, Text } from 'react-native'

class BarsHTTP extends Component {
   state = {
      data: []
   }
   componentDidMount = () => {
      fetch('http://1b381c88.ngrok.io/nearby?origin=43.524202,-79.647924&radius=1000', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson)
         this.setState({
         data: responseJson.map((item) => <Text>{item.name} {item.address}</Text>)
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View>
            <Text>
               
                  {this.state.data}
               
            </Text>
         </View>
      )
   }
}
export default BarsHTTP