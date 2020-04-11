import React, { useState } from 'react';
import { View, Text, Button, Modal, CheckBox } from 'react-native';
import { globalStyles } from '../styles/global';


// @brief Defines the preferences modal
const preferences = props => {
    
   // const [pref, setpref] = useState([]);
    const pref = [];

    const [breweriesSelec, setBreweriesSelec] = useState(false);
    const [nightlifeSelec, setNightLifeSelec] = useState(false);
    const [danceSelec, setDanceSelec] = useState(false);
    const [foodSelec, setFoodSelec] = useState(false);
    const [sportsSelec, setSportsSelec] = useState(false);
    const [beerSelec, setBeerSelec] = useState(false);
    const [wineSelec, setWineSelec] = useState(false);
    const [cocktailSelec, setCocktailSelec] = useState(false);

    // @brief Adds preference to list of preferences
    function addPrefHandler () {
        fetch()
        props.onAddPref();
    };

    // @brief Adds selected checkbox to preferences
    if (foodSelec) {
        if(pref.length !== 0) {
            pref.push('&');
        }
        pref.push('pref=pub food');
    }
    if (beerSelec) {
        if(pref.length !== 0) {
            pref.push('&');
        }
        pref.push('pref=beer');
    }
    if (sportsSelec) {
        if(pref.length !== 0) {
            pref.push('&');
        }
        pref.push('pref=sports');
    }
    if (breweriesSelec) {
        if(pref.length !== 0) {
            pref.push('&');
        }
        pref.push('pref=brew');
    }
    if (nightlifeSelec) {
        if(pref.length !== 0) {
            pref.push('&');
        }
        pref.push('pref=nightlife');
    }
    if (danceSelec) {
        if(pref.length !== 0) {
            pref.push('&');
        }
        pref.push('pref=dance');
    }
    if (wineSelec) {
        if(pref.length !== 0) {
            pref.push('&');
        }
        pref.push('pref=wine');
    }
    if (cocktailSelec) {
        if(pref.length !== 0) {
            pref.push('&');
        }
        pref.push('pref=cocktail');
    }

    // @brief Exits out of preferences modal and clears selection
    const cancelGoalHandler = () => {
        setBeerSelec(false);
        setCocktailSelec(false);
        setNightLifeSelec(false);
        setDanceSelec(false);
        setFoodSelec(false);
        setSportsSelec(false);
        setWineSelec(false);
        setBreweriesSelec(false);
        props.onCancel();
    };

    // @brief Returns view of preferences modal
    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={globalStyles.screen}>
                <View style={globalStyles.cancel}><Button title="X" color="red" onPress={cancelGoalHandler} /></View>
                <View style={globalStyles.inputContainer}>
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
                            value={beerSelec}
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
                            value={breweriesSelec}
                            onValueChange={setBreweriesSelec}
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
                            onValueChange={setDanceSelec}
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