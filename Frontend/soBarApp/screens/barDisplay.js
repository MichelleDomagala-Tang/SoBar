import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { globalStyles } from '../styles/global';

function Item({ item, selected, onSelect }) {
    return (
       <TouchableOpacity
          onPress={() => onSelect(id)}
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
            <Text>{props.values[0]}</Text>
           <FlatList
              data={props.values}
              renderItem={({ item }) => ( 
                 <Item
                    item={item}
                    selected={!!selected.get('hbfeiqwjn')}
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