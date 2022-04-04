import { BLACK, GRAY_DARK, GRAY_TEXT, ALERT, WARNING, GRAY_LIGHT } from '../../../styles/colors';
import { margin, padding } from '../../../styles/mixins';
import { FONT_REGULAR, FONT_SEMI_BOLD, MINNI_TEXT, SMALL_TEXT } from '../../../styles/typography';

export default {
    inputBox: {
        position: 'relative',
        ...margin(15, 0, 15, 0)
    },
    labelBox: {
        flexWrap: 'nowrap',
        flexDirection: 'row',
    },
    label: {
        ...SMALL_TEXT,
        // ...FONT_SEMI_BOLD,
        color: GRAY_TEXT,
        position: 'absolute',
        top: 1,
    },
    activeInputLabel: {
        top: -12,
        ...MINNI_TEXT,
        // ...FONT_SEMI_BOLD,
    },
    input: {
        borderBottomColor: GRAY_DARK,
        borderBottomWidth: 1.2,
        ...padding(5, 2, 5, 5),
        color: BLACK,
        ...SMALL_TEXT
    },
    activeInput: {
        borderBottomWidth: 1.3,
        borderBottomColor: BLACK,
    },
    error: {
        borderBottomColor: ALERT,
        borderBottomWidth: 1.5,
    },
    errorText: {
        ...MINNI_TEXT,
        color: ALERT,
        ...padding(5, 0, 0, 0),
        position: 'absolute',
        bottom: -20,
        letterSpacing: 1
    },
    disableText: {
        opacity: .7,
        // backgroundColor:GRAY_LIGHT
    }
}
