import React, { Component } from 'react'
import { View, Text, CheckBox } from 'react-native'

class BarsHTTP extends Component {
   state = {
      data: []
   }

   // NOTE: Update URL to include endpoint
   componentDidMount = () => {
      
      var website = 'http://1b381c88.ngrok.io/nearby?origin=43.524202,-79.647924&radius=1000';

      if (global.pref.length !== 0) {
         website = 'http://1b381c88.ngrok.io/nearby/filter?origin=43.524202,-79.647924&radius=1000' + "&pref=" + encodeURIComponent(JSON.stringify(global.pref));
      }

      fetch(website, {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson)
         this.setState({
         data: responseJson.map((item) => <Text>{item.name}{"\n"}Address: {item.address}{"\n"}Star Rating: {item.stars}/5{"\n\n"}</Text>)
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