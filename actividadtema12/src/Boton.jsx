function Boton (p) {

    const { texto, color, onClick } = p;
    return (
        <button style={{
            backgroundColor: color,
            color: 'white',
            border: 'none',
        }}
        onClick={onClick}>{texto}</button>
    );
}

export default Boton;