import React, { Component, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { globalStyles } from '../styles/global';

function Item({ id, title, selected, onSelect }) {
   return (
      <TouchableOpacity
         onPress={() => onSelect(id)}
         style={[
            styles.item,
            { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
         ]}
      >
         <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
   );
}

class BarsHTTP extends Component {
   const[selected, setSelected] = useState(new Map());
const onSelect = React.useCallback(
   id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
   },
   [selected],
);
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
            data: responseJson.map((item) => <View style={globalStyles.bar}><Text>{item.name}{"\n"}Address: {item.address}{"\n"}Star Rating: {item.stars}/5{"\n"}</Text></View>)
         })
      })
      .catch((error) => {
         console.error(error);
      });
}
render() {
   return (
      <View style={styles.container}>
         <FlatList
            info={this.state.data}
            renderItem={({ item }) => (
               <Item
                  id={item.id}
                  title={item.title}
                  selected={!!selected.get(item.id)}
                  onSelect={onSelect}
               />
            )}
            keyExtractor={item => item.id}
            extraData={selected}
         />
      </View>
   )
}
}
export default BarsHTTP