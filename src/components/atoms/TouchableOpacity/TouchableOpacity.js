
export default function TouchableOpacity({ children, onPress, disable = false, style, className, key }) {
    return (
        <div onClick={onPress ? !disable ? onPress : () => { console.log('1') } : () => { console.log('2') }} style={style} className={className} key={key}>
            {children}
        </div>
    )
}
