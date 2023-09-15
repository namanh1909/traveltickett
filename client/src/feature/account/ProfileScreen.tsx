import { StyleSheet, SafeAreaView, View, Image, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Images from 'assets/images'
import auth from '@react-native-firebase/auth'
import { goBack, navigate } from 'navigation/NavigationService'
import { getCurrentTime } from 'utilities/format'
import { Themes } from 'assets/themes'
import ListMenuItem from './components/ListMenuItem'
import ListMenu from './components/ListMenu'

const ProfileScreen = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFCFC' }}>
            <View style={styles.headerContainer}>
                <View style={styles.topContainer}>
                    <TouchableOpacity style={styles.containerBack} onPress={() => goBack()}>
                        <Image source={Images.icons.back} style={styles.icon} />
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", }}>
                        <Image source={Images.icons.profile.setting} style={[styles.icon, { marginRight: 10 }]} />
                        <Image source={Images.icons.profile.chat} style={styles.icon} />
                    </View>
                </View>
                <View style={styles.profileHeader}>
                    <Image
                        style={styles.avt}
                        source={Images.photo.avatar}
                    />
                    <View style={styles.leftContainer}>
                        <Text style={styles.name}>{auth().currentUser?.displayName}</Text>
                        <Text style={styles.time}>{getCurrentTime()}</Text>
                        <View style={styles.memberContainer}>
                            <Text style={styles.memberText}>Member gold</Text>
                        </View>
                    </View>
                </View>
                <ListMenu />
            </View>
        </SafeAreaView>

    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    headerContainer: {
        padding: 30,
        justifyContent: "space-between",
        backgroundColor: "#FCFCFC"
    },
    avt: {
        width: 90,
        height: 90,
        borderRadius: 16,
    },
    icon: {
        height: 20,
        width: 20,
    },
    containerBack: {
        flexDirection: "row",
        alignItems: "center"
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold"
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    memberContainer: {
        paddingVertical: 10,
        backgroundColor: Themes.COLORS.primary,
        borderRadius: 20,
        marginTop: 5,
        alignItems: "center",
        maxWidth: 100,
    },
    memberText: {
        color: Themes.COLORS.white,
        fontSize: 12,
    },
    leftContainer: {
        marginLeft: 20
    },
    time: {
        marginTop: 5
    }
})