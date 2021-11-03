import React from 'react';
import {Text, useColorScheme, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const MainContainer = ()=>{

    return (
        <View style={styles.sectionContainer}>
            <Text>
              Main container
            </Text>
            <Text>
                комментарий 12.29 TASK A
            </Text>
        </View>
    );
};
 export default MainContainer;