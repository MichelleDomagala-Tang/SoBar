import React, { Component } from 'react'
import { View, Text } from 'react-native'

class BarsHTTP extends Component {
   state = {
      data: []
   }

   // NOTE: Update URL to include endpoint
   componentDidMount = () => {
      
      var website = 'http://1b381c88.ngrok.io/nearby?origin=43.524202,-79.647924&radius=1000';

      if (global.pref) {
         website = 'http://1b381c88.ngrok.io/nearby?origin=43.524202,-79.647924&radius=1000' + "&pref=" + encodeURIComponent(JSON.stringify(global.pref));
      }

      fetch(website, {
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
                  {global.pref.toString()}
            </Text>
         </View>
      )
   }
}
export default BarsHTTP