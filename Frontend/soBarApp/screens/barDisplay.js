import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { globalStyles } from '../styles/global';

function Item({ item, selected, onSelect }) {
    const words = item.toString().split(',');
    return (
       <TouchableOpacity
          onPress={() => onSelect(item.id)}
          style={[
             globalStyles.item,
             { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
          ]}
       >
          <Text style={globalStyles.bar}>{item}</Text>
         
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
              data={props.values}
              renderItem={({ item }) => ( 
                 <View>
                    <Text>{item.name}</Text>
                 <Item
                    item={item}
                    selected={!!selected.get(item)}
                    onSelect={onSelect}
                 />
                 </View>
              )}
              keyExtractor={item => item.id}
              extraData={selected}
           />
        </View>
     );
};

export default BarDisplay;