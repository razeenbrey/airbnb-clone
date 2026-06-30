function Button({
                fg,
                bg, 
                text,
                width= '142px',
                height= '56px'
            }){

    const buttonStyle = {
        /* Button */
        color: fg,
        backgroundColor: bg,
        /* Auto layout */
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        /* Text */
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '150%',
        border:"none",
        padding: 0,

        width: width,
        height: height,

        /* Inside auto layout */
        flex: 'none',
        order: 1,
        flexGrow: 0,
        borderRadius:10
    };

    return(
        <>
            <button style={buttonStyle}>{text}</button>
        </>
    );
}
export default Button;