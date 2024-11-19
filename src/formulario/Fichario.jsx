import {useState} from "react";
import {Button, Container, Form, Row, Col} from "react-bootstrap";

export default function Fichario(props){
  const [validado, setValidado] = useState(false);
  function manipulaSubmissao(evento){
      const form = evento.currentTarget;
      if (form.checkValidity()){
        setValidado(false);
      }
      else{
        setValidado(true);
      }
      evento.preventDefault();
      evento.stopPropagation();
  }
    return(
      <>
        <Container className="text-center">
           <h4>Fichario para pedido de vaga</h4>
        </Container>

        <Form noValidate validated={validado} onSubmit={manipulaSubmissao}>
            <Row>
              <Col>
        <Form.Group className="mb-3" controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Informe o nome" required/>
            </Form.Group>
            <Form.Control.Feedback type='invalid'>
               Preencha o nome corretamente
            </Form.Control.Feedback>
              </Col>
              <Col>
        <Form.Group className="mb-3" controlId="formSobreNome">
        <Form.Label>Sobrenome</Form.Label>
        <Form.Control type="text" placeholder="Informe o sobrenome" required/>
            </Form.Group>
            <Form.Control.Feedback type='invalid'>
               Preencha o sobrenome corretamente
            </Form.Control.Feedback>
              </Col>
              </Row>

          <Row>
            <Col>
        <Form.Group className="mb-3" controlId="formCPF">
        <Form.Label>CPF</Form.Label>
        <Form.Control type="text" placeholder="000.000.000-00" required/>
            </Form.Group>
            <Form.Control.Feedback type='invalid'>
                Preencha o CPF
            </Form.Control.Feedback>
              </Col>
              
              <Col>
        <Form.Group className="mb-3" controlId="formDataNasc">
        <Form.Label>Data de nascimento</Form.Label>
        <Form.Control type="date" required/>
            </Form.Group>
            <Form.Control.Feedback type='invalid'>
               Informa a data de nascimento 
            </Form.Control.Feedback>
              </Col>
              
              <Col>
            <Form.Group className="mb-3" controlId="formGenero">
            <Form.Label>Genero:</Form.Label>   
              <Form.Select aria-label="Default select example">
      <option>Selecione o genero</option>
      <option value="Feminino">Feminino</option>
      <option value="Masculino">Masculino</option>
        </Form.Select>
    </Form.Group>
              </Col>
              </Row>
              
              <Row className="mb-3">
              <Form.Group as={Col} md="5" controlId="formEndereco">
          <Form.Label>Endereço</Form.Label>
          <Form.Control type="text" placeholder="Endereço" required />
          <Form.Control.Feedback type="invalid">
            Digite seu endereço
          </Form.Control.Feedback>
        </Form.Group> 
      
        <Form.Group as={Col} md="4" controlId="formBairro">
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="text" placeholder="Bairro" required />
          <Form.Control.Feedback type="invalid">
            Digite seu bairro
          </Form.Control.Feedback>
        </Form.Group> 

        <Form.Group as={Col} md="3" controlId="formCEP">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="text" placeholder="00.000-00" required />
          <Form.Control.Feedback type="invalid">
            Informe o CEP
          </Form.Control.Feedback>
        </Form.Group>
        </Row>

              <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formCidade">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="text" placeholder="Cidade" required />
          <Form.Control.Feedback type="invalid">
            Digite sua cidade
          </Form.Control.Feedback>
        </Form.Group>

          <Form.Group as={Col} md="3" controlId="formEstado">
          <Form.Label>Estado</Form.Label>
          <Form.Select aria-label="Default select example">
      <option>Selecione o estado</option>
      <option value="Sao Paulo">Sao Paulo</option>
      <option value="Parana">Parana</option>
      <option value="Parana">Rio de janeiro</option>
      <option value="Parana">Bahia</option>
      <option value="Parana">Amazonas</option>
      <option value="Parana">Goias</option>
      <option value="Parana">Ceara</option>
      <option value="Parana">Acre</option>
      <option value="Parana">Alagoas</option>
           </Form.Select>
           </Form.Group>
              </Row>

              <Row>
                <col-2>
                <Button type="submit">Cadastrar</Button>
                </col-2>
              </Row>
        </Form>
        </>
    );
}