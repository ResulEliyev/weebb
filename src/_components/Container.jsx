import Flex from "./Flex"

export default({children,...props})=>{
    const classes=["w-[90%]  mx-auto h-full ",props.className].join(" ")
    return props.flex ?(
<Flex {...props} className={classes}>
    {children}
</Flex>
    ):(
        <div className={classes}>
            {children}
        </div>
    );
};