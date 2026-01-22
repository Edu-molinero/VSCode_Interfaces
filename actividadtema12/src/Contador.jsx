import { useState } from 'react';

function contador(p) {
    const { numero } = p;
    const [incrementar, decrementar] = useState(valorInicial);
    return (
        <div>
            <h2>Contador: {numero}</h2>
        </div>

    )
}

export default contador;