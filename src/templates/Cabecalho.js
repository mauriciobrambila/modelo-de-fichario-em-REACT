import {Alert} from "react-bootstrap";
export default function Cabecalho(props){
    return(
        <div>
           <Alert className="text-center mb-0" variant="dark">
            <h1>
                {props.texto}
            </h1>
            </Alert>
        </div>
    );
}