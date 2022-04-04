import { moderateScale, verticalScale } from '../../../styles/mixins';
// STYLES
import { REGULAR_FONT_SIZE, SMALL_TEXT } from '../../../styles/typography';
import { SECONDARY, THIRD } from '../../../styles/colors';
import { padding } from '../../../styles/mixins';

export default {
    container: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: moderateScale(5),
        height: verticalScale(35)
    },
    imageBox: {
        borderWidth: 1.2,
        borderRadius: 50,
        border: `1px solid ${SECONDARY}`,
        ...padding(6, 6, 6, 6),
        height: '32px',
        width: '32px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    image: {
        tintColor: SECONDARY
    },
    cartCount: {
        ...REGULAR_FONT_SIZE,
        paddingHorizontal: moderateScale(8),
        color: SECONDARY,
        padding:'0 5px'
    },
    loader: {
        paddingHorizontal: moderateScale(3.5),
    }
}