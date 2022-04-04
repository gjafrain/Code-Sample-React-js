// COLORS
import * as colors from '../../../styles/colors';
import { padding, margin } from '../../../styles/mixins'

export default {
    section: {
        borderBottomWidth: .4,
        borderTopWidth: .4,
        borderColor: colors.GRAY_LIGHT,
        ...padding(10, 0, 10, 10),
        ...margin(10, 0, 10, 0),
    }
}