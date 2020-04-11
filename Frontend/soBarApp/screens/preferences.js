import React, { useState } from 'react';
import { View, Text, Button, Modal, ScrollView, CheckBox } from 'react-native';
import { globalStyles } from '../styles/global';


// @brief Defines the preferences modal
const preferences = props => {
    
   // const [pref, setpref] = useState([]);
    const pref = [];

    const [breweriesSelected, setBreweriesSelected] = useState(false);
    const [nightlifeSelec, setNightLifeSelec] = useState(false);
    const [danceSelec, setDanceselec] = useState(false);
    const [foodSelec, setFoodSelec] = useState(false);
    const [sportsSelec, setSportsSelec] = useState(false);
    const [beerSelect, setBeerSelec] = useState(false);
    const [wineSelec, setWineSelec] = useState(false);
    const [cocktailSelec, setCocktailSelec] = useState(false);

    // @brief Adds preference to list of preferences
    function addPrefHandler () {
        props.onAddPref();
    };

    if (foodSelec) {
        pref.push('pub food');
    }
    if (beerSelect) {
        pref.push('beer');
    }
    if (sportsSelec) {
        pref.push('sports');
    }
    if (breweriesSelected) {
        pref.push('brew');
    }
    if (nightlifeSelec) {
        pref.push('nightlife');
    }
    if (danceSelec) {
        pref.push('dance');
    }
    if (wineSelec) {
        pref.push('wine');
    }
    if (cocktailSelec) {
        pref.push('cocktail');
    }

    // @brief Exits out of preferences modal and clears selection
    const cancelGoalHandler = () => {
        setBeerSelec(false);
        setCocktailSelec(false);
        setNightLifeSelec(false);
        setDanceselec(false);
        setFoodSelec(false);
        setSportsSelec(false);
        setWineSelec(false);
        setBreweries(false);
        props.onCancel();
    };

    // @brief Removes preference from list of preferences
    // @param prefId id value of preference to be deleted
    const removePrefHandler = prefId => {
        setpref(currentPref => {
            return currentPref.filter((pref) => pref.id !== prefId)
        });
    };

    // @brief Returns view of preferences modal
    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={globalStyles.screen}>
                <View style={globalStyles.cancel}><Button title="X" color="red" onPress={cancelGoalHandler} /></View>
                <View style={{ padding: 30 }}>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={foodSelec}
                            onValueChange={setFoodSelec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Food</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={sportsSelec}
                            onValueChange={setSportsSelec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Sports</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={beerSelect}
                            onValueChange={setBeerSelec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Beer</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={wineSelec}
                            onValueChange={setWineSelec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Wine</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={cocktailSelec}
                            onValueChange={setCocktailSelec}
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
                            value={nightlifeSelec}
                            onValueChange={setNightLifeSelec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Nightlife</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={danceSelec}
                            onValueChange={setDanceselec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Dance</Text>
                    </View>
                    <View style={globalStyles.buttonContainer} >
                        <View style={globalStyles.button}><Button title="CONFIRM" color="grey" onPress={addPrefHandler} /></View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default preferences;