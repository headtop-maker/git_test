import React from 'react';
import { Text, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const MainContainer = () => {

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
            <Text>
                комментарий 12.29 TASK A
            </Text>
            <Text>
                комментарий 09.06 develop
            </Text>
            <Text>
                комментарий 09.12 develop
            </Text>
            <Text>
                комментарий 09.08 stage
            </Text>
            <Text>
                комментарий 09.13 stage
            </Text>
            <Text>
                комментарий 09.34 master
            </Text>
            <Text>
                комментарий 09.41 dev
            </Text>

        </View >
    );
};
export default MainContainer;