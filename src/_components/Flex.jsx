const flexStyles=(props)=>({
    display:props.inline ? "inline-flex" : "flex",
    justifyContent:props.justifyContent,
    flexDirection:props.flexDirection,
    alignItems:props.alignItems,
    gap:props.gap? props.gap + "px" : undefined
})


export default({
    justifyContent,
    alingItems="center",
    flexDirection,
    gap,
    ...props
})=>{
    const AsElement = props.as ?? "div"
    return(
        <AsElement 
        className={props.className}
        style={flexStyles({justifyContent,alingItems,flexDirection, gap})}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
        >
            {props.children}
        </AsElement>
    );
};