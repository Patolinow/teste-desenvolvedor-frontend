import { Container, Form as BSForm, Button } from "react-bootstrap";
import { Form } from "react-router-dom";
import "./styles.scss";

export interface ISearchParams {
  name: string | null;
  startDate: string | null;
  endDate: string | null;
  company: string | null;
}

export default function BularioSearchForm() {


  return (
    <Container className="m-3">
      <h1 className="p-3 pb-0">Consultar Bulário Eletrônico</h1>

      <Form className="p-3" action="/search">
        <BSForm.Group className="mb-3" controlId="nameContainer">
          <BSForm.Label htmlFor="name">Nome do Medicamento</BSForm.Label>
          <BSForm.Control  type="text" name="name" id="name" placeholder="Medicamento" />
        </BSForm.Group>

        <div id="dates" className="d-sm-flex gap-4">
          <BSForm.Group className="container-fluid p-0" controlId="startDateContainer">
            <BSForm.Label htmlFor="startDate">Data Inicial da Busca</BSForm.Label>
            <BSForm.Control  type="date" name="startDate" id="startDate" />
          </BSForm.Group>
          <BSForm.Group className="container-fluid p-0" controlId="endDateContainer">
            <BSForm.Label htmlFor="endDate">Data Final da Busca</BSForm.Label>
            <BSForm.Control  type="date" name="endDate" id="endDate" />
          </BSForm.Group>
        </div>  

        <BSForm.Group className="my-3">
          <BSForm.Label htmlFor="company">Nome da Fabricante</BSForm.Label>
          <BSForm.Control  type="text" name="company" id="company" placeholder="Empresa" />
        </BSForm.Group>
        <Button size="lg" type="submit" className="mt-2 mb-3">Pesquisar</Button>
      </Form>
    </Container>
  );
}
