import React from 'react';
import ReactDOM from 'react-dom/client';
import {Container} from "react-bootstrap";

function Example(props) {
    return (
        <Container>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <pre>
                            {JSON.stringify(props, null, 2)}
                        </pre>
                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Example;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
