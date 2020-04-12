import React, { useState } from 'react';
import { View, Text, Button, Modal, CheckBox } from 'react-native';
import { globalStyles } from '../styles/global';


// @brief Defines the preferences modal
const preferences = props => {

   global.pref = [];

    const [breweriesSelected, setBreweriesSelected] = useState(false);
    const [nightlifeSelected, setNightLifeSelected] = useState(false);
    const [danceSelected, setDanceSelected] = useState(false);
    const [foodSelected, setFoodSelected] = useState(false);
    const [sportsSelected, setSportsSelected] = useState(false);
    const [beerSelected, setBeerSelected] = useState(false);
    const [wineSelected, setWineSelected] = useState(false);
    const [cocktailSelected, setCocktailSelected] = useState(false);

    // @brief Adds preference to list of preferences
    // NOTE: Update URL to include endpoint
    function addPrefHandler () {
        props.onAddPref();
    };

    // @brief Adds selected checkbox to preferences
    if (foodSelected) {
        global.pref.push('pub food');
    }
    if (beerSelected) {
        global.pref.push('beer');
    }
    if (sportsSelected) {
        global.pref.push('sports');
    }
    if (breweriesSelected) {
        global.pref.push('brew');
    }
    if (nightlifeSelected) {
        global.pref.push('nightlife');
    }
    if (danceSelected) {
        global.pref.push('dance');
    }
    if (wineSelected) {
        global.pref.push('wine');
    }
    if (cocktailSelected) {
        global.pref.push('cocktail');
    }

    // @brief Exits out of preferences modal and clears selection
    const cancelGoalHandler = () => {
        setBeerSelected(false);
        setCocktailSelected(false);
        setNightLifeSelected(false);
        setDanceSelected(false);
        setFoodSelected(false);
        setSportsSelected(false);
        setWineSelected(false);
        setBreweriesSelected(false);
        props.onCancel();
    };

    // @brief Returns view of preferences modal
    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={globalStyles.screen}>
                <View style={globalStyles.cancel}><Button title="X" color="red" onPress={cancelGoalHandler} /></View>
                <View style={globalStyles.prefContainer}>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={foodSelected}
                            onValueChange={setFoodSelected}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Food</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={sportsSelected}
                            onValueChange={setSportsSelected}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Sports</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={beerSelected}
                            onValueChange={setBeerSelected}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Beer</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={wineSelected}
                            onValueChange={setWineSelected}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Wine</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={cocktailSelected}
                            onValueChange={setCocktailSelected}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Cocktail</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={breweriesSelected}
                            onValueChange={setBreweriesSelected}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Breweries</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={nightlifeSelected}
                            onValueChange={setNightLifeSelected}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Nightlife</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={danceSelected}
                            onValueChange={setDanceSelected}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Dance</Text>
                    </View>
                </View>
                    <View style={globalStyles.buttonContainer} >
                        <View style={globalStyles.button}><Button title="CONFIRM" color="grey" onPress={addPrefHandler} /></View>
                    </View>
            </View>
        </Modal>
    )
}

export default preferences;