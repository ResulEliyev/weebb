export default({text,img})=>{
    const divStyles="border border-[#e3e3e3]  relative overflow-hidden"
    return(
<div className={divStyles}>
{text && text}
{img && img}
</div>
    )
}