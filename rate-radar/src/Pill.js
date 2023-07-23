function Pill({text, shadowColor}) {
    return (
        <div className="descPill" style={{'boxShadow':shadowColor}}>
            <p title={text}>{text}</p>
        </div>
    )
}

export default Pill;