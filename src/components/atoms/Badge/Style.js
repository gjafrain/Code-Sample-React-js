// STYLE
import { ALERT, WHITE } from '../../../styles/colors';
import { boxShadow, scale } from '../../../styles/mixins';
import { EXTRA_SMALL_TEXT } from '../../../styles/typography';

export default {
    badge: {
        height: scale(14),
        width: scale(14),
        position: 'absolute',
        top: 3,
        right: 3,
        backgroundColor: ALERT,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        ...boxShadow(WHITE,)
    },
    badgeCount: {
        ...EXTRA_SMALL_TEXT,
        color: WHITE,
    }
}