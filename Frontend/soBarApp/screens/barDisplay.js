import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { globalStyles } from '../styles/global';

function Item({ id, name, address, stars, selected, onSelect }) {
    return (
       <TouchableOpacity
          onPress={() => onSelect(id)}
          style={[
             styles.item,
             { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
          ]}
       >
          <Text style={globalStyles.bar}>{name}{"\n"}Address: {address}{"\n"}Star Rating: {stars}/5{"\n"}</Text>
       </TouchableOpacity>
    );
 }

const BarDisplay = props => {
    const[selected, setSelected] = useState(new Map());
    const onSelect = React.useCallback(
        id => {
            const newSelected = new Map(selected);
            newSelected.set(id, !selected.get(id));

            setSelected(newSelected);
        },
        [selected],
    );

    return (
        <View style={globalStyles.barsContainer}>
           <FlatList
              info={props.values}
              renderItem={({ item }) => (
                 <Item
                    id={item.id}
                    name={item.name}
                    address={item.address}
                    stars={item.stars}
                    selected={!!selected.get(item.id)}
                    onSelect={onSelect}
                 />
              )}
              keyExtractor={item => item.id}
              extraData={selected}
           />
        </View>
     );
};

export default BarDisplay;