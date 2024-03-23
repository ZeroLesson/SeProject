import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, { useState } from "react";
import { SelectList } from 'react-native-dropdown-select-list'


const MyButton = () => { }
const handlePress = () => {
    // Action to be performed when the button is pressed
};
export default function Report({ navigation, route }) {
    const [selected, setSelected] = React.useState("");
    console.log(route.params)

    const data = [
        { key: '1', value: 'Mobiles', disabled: true },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers', disabled: true },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
        { key: '8', value: 'Drinks', data: '12' },]

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (

        <View style={styles.container}>

            <View style={styles.name2}>
                <Text style={{ fontSize: 17 }}>พยาบาล พจมาน ชาญสมร</Text>
            </View>

            <View style={styles.head}>
                <Text style={styles.headtext}>คำร้องขอแลกเวร</Text>
            </View>

            <View style={styles.square}>
                <View style={styles.insquare}>
                    <Text style={styles.squaretext}>ชื่อผู้แลก : นางพจมาน ชาญสมร</Text>
                    <Text style={styles.squaretext}>ชื่อผู้ที่ต้องการแลก : {route.params.fname} {route.params.lname}</Text>
                    <Text style={styles.squaretext}>วันที่ต้องการแลก : {route.params.day} {route.params.month} {route.params.year}</Text>
                    <Text style={styles.squaretext}>เวรที่ต้องการ : {route.params.shift}</Text>
                    <View style={styles.squaretext}>
                        <Text style={{fontSize: 16}}>วันที่จะแลก:</Text>
                        <Button title="เลือกวันที่ต้องการแลก" onPress={showDatePicker} />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>

                    <View style={styles.squaretext}>
                        <Text style={{fontSize: 16}}>เวรที่จะแลก:</Text>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save="value"
                        />
                    </View>

                    <View style={styles.squarebutset}>
                        <TouchableOpacity onPress={handlePress}>
                            <Text>ส่ง</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>


        </View>


    );
}

const styles = StyleSheet.create({
    name: {
        paddingVertical: 10,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    name2: {
        height: 33,
        backgroundColor: '#A2A2A2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex: 1,
    },

    head: {
        paddingTop: 10,
        alignItems: 'center',
        paddingBottom: 11,
    },
    headtext: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 9,
    },

    square: {
        height: 500,
        width: 360,
        backgroundColor: 'lightgray',
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    insquare: {
        height: 460,
        width: 320,
        backgroundColor: 'white',
        borderRadius: 15,

    },
    squaretext: {
        margin: 10,
        fontSize: 16,
    },
    squarebutset: {
        backgroundColor: 'lightgrey',
        height: 40,
        width: 70,
        justifyContent: 'flex-end',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'

    }

});