import { forwardRef } from "react";

const flexStyles=(props)=>({
    display:props.inline ? "inline-flex" : "flex",
    justifyContent:props.justifyContent,
    flexDirection:props.flexDirection,
    alignItems:props.alignItems,
    gap:props.gap? props.gap + "px" : undefined
})


export default forwardRef(({
    justifyContent,
    alignItems="center",
    flexDirection,
    gap,
    ...props
}, ref)=>{
    const AsElement = props.as ?? "div"
    return(
        <AsElement 
        ref={ref}
        className={props.className}
        style={Object.assign(flexStyles({justifyContent,alignItems,flexDirection, gap}), props.style)}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
        >
            {props.children}
        </AsElement>
    );
});