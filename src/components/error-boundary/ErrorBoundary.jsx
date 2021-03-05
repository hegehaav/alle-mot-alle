import React from 'react';
import "./errorBoundary.scss";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <section className="error-boundary">
                    <h1>Woops...</h1>
                    <div className="error-description">
                        <p>Denne gangen var det ikke Linus som glemte å trykke record, men Hege som sikkert glemte å håndtere at en variablen ble null  </p>
                        <p>Vennligst post en public shaming i #bekk-mot-bekk, så arrangørene kan kjenne litt på skammen de fortjener! </p>
                    </div>
                    <img src="https://i.imgflip.com/50icpj.jpg" title="made at imgflip.com" />
                </section>);
        }

        return this.props.children;
    }
}

export default ErrorBoundary;