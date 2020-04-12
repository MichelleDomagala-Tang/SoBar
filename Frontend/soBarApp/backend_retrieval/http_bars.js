import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../styles/global';
import BarsDisplay from '../screens/barDisplay';

class BarsHTTP extends Component {
state = {
   data: []
}

// NOTE: Update URL to include endpoint
//<View style={globalStyles.bar}><Text>{item.name}{"\n"}Address: {item.address}{"\n"}Star Rating: {item.stars}/5{"\n"}</Text></View>
componentDidMount = () => {

   var website = 'http://41638684.ngrok.io/nearby?origin=43.524202,-79.647924&radius=1000';

   if (global.pref.length !== 0) {
      website = 'http://41638684.ngrok.io/nearby/filter?origin=43.524202,-79.647924&radius=1000' + "&pref=" + encodeURIComponent(JSON.stringify(global.pref));
   }

   fetch(website, {
      method: 'GET'
   })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson)
         this.setState({
            data: responseJson.map((item) => <Text>{item.id},{item.name},{item.address},{item.stars}</Text>)
         })
      })
      .catch((error) => {
         console.error(error);
      });
}
render() {
   return (
      <View>
         <BarsDisplay values={this.state.data} />
      </View>
   )
}
}
export default BarsHTTP;