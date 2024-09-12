export default({text,img})=>{
    const overlayStyles="sm:h-[260px]   w-full overflow-hidden relative"
    return(
        <div className={overlayStyles}>
                {text && text}
                {img && img}
        </div>

    )
}