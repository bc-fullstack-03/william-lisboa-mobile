import { StyleSheet } from "react-native"
import theme from "../../theme"

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 32
    },
    title: {
        color: theme.COLORS.TEXT,
        textAlign: "center",
        fontSize: theme.FONT_SIZE.LG,
        fontFamily: theme.FONT_FAMILY.BLACK
    },
    subtitle: {
        color: theme.COLORS.CAPTION_400,
        textAlign: "center",
        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.REGULAR
    }
})