import React from 'react';
import {Text, useColorScheme, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const MainContainer = ()=>{

    return (
        <View style={styles.sectionContainer}>
            <Text>
              Main container
            </Text>
            <View>
                    Task_Bb комментарий 12.40
                <Text>
                    Task_B комментарий 12.36
                </Text>
            </View>
        </View>
    );
};
 export default MainContainer;