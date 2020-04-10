import React, { useState } from 'react';
import { View, Text, Button, Modal, ScrollView, CheckBox } from 'react-native';
import { globalStyles } from '../styles/global';

const preferences = props => {
    const [karaokeSelected, setKaraokeSelected] = useState(false);
    const [nightlifeSelec, setNightLifeSelec] = useState(false);
    const [danceSelec, setDanceselec] = useState(false);
    const [foodSelec, setFoodSelec] = useState(false);
    const [sportsSelec, setSportsSelec] = useState(false);
    const [beerSelect, setBeerSelec] = useState(false);
    const [wineSelec, setWineSelec] = useState(false);
    const [cocktailSelec, setCocktailSelec] = useState(false);
    const [pref, setpref] = useState([]);

    const addPrefHandler = () => {
        setpref(pref =>
            [...pref,
            { id: Math.random().toString(), value: "Karaoke" }]);
        props.onAddPref();
    };

    const cancelGoalHandler = () => {
        setBeerSelec(false);
        setCocktailSelec(false);
        setNightLifeSelec(false);
        setDanceselec(false);
        setFoodSelec(false);
        setSportsSelec(false);
        setWineSelec(false);
        setKaraokeSelected(false);
        props.onCancel();
    };

    const removePrefHandler = prefId => {
        setpref(currentPref => {
            return currentPref.filter((pref) => pref.id !== prefId)
        });
    };

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
                            value={karaokeSelected}
                            onValueChange={setKaraokeSelected}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Karaoke</Text>
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