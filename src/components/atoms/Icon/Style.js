// STYLES
import { padding, scale } from '../../../styles/mixins';

export default {
    container: {
        ...padding(0, 10, 0, 10)
    },
    xs: {
        height: scale(10),
        width: scale(10)
    },
    s: {
        height: scale(12),
        width: scale(12)
    },
    md: {
        height: scale(16),
        width: scale(16)
    },
    l: {
        height: scale(18),
        width: scale(18)
    },
    xl: {
        height: scale(20),
        width: scale(20)
    },
    xxl: {
        height: scale(22),
        width: scale(22)
    },
    xxxl: {
        height: scale(24),
        width: scale(24)
    },
    trandform180: {
        transform: [{ rotate: '180deg' }]
    },
}
