export default function Text({ children, className, style = {} }) {
    return (
        <span style={style} className={className}>
            {children}
        </span>
    )
}
