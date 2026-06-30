function Button({fg, bg, text}){

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

        width: 142,
        height: 56,

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