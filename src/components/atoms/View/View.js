export default function View({ children, style = {}, className = "", key }) {
    return (
        <div style={style} className={className} key={key}>
            {children}
        </div>
    )
}
