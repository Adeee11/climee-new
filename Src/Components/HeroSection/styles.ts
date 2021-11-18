import { StyleSheet } from 'react-native'
import fontFamily from '../../globalStyles/fontFamily';
import Spacing from '../../globalStyles/Spacing';
import typography from '../../globalStyles/typography';

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 20
    },
    upperView: {
        flex: 0.5,
        alignItems: 'flex-start',
    },
    degreeText: {
        color: 'white',
        fontSize: typography.FONT_SIZE_30,
        fontFamily: fontFamily.semiBold
    },
    weatherTypeText: {
        color: 'white',
        fontSize: typography.FONT_SIZE_20,
        fontFamily: fontFamily.regular
    },
    minmaxContainer: {
        flexDirection: 'row'
    },
    lowerView: {
        marginTop: 10
    },
    imageContainer: {flex: 0.5, alignItems: "center"}
})

export default styles;