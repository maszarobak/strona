import React from 'react';
import { Container, Table } from 'react-bootstrap';

export const Users = () =>(
    <Container>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Nazwa</th>
        <th>Cena</th>
        <th>Rozmiar</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Kanapka</td>
        <td>700zł</td>
        <td>40x30cm</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Trybtyk</td>
        <td>3000zł</td>
        <td>35x42cm</td>
      </tr>
      <tr>
        <td>3</td>
        <td >Zlew</td>
        <td>1500zł</td>
        <td>70x55cm</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martwa niebieska</td>
        <td>300zł</td>
        <td>100x70cm</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Martwa żółtla</td>
        <td>300zł</td>
        <td>100x70cm</td>
      </tr>
      <tr>
        <td>6</td>
        <td >Martwa biała</td>
        <td>300zł</td>
        <td>100x70cm</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Portret na zamówienie</td>
        <td>500zł</td>
        <td>50x50cm</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Pejzaż na zamówienie</td>
        <td>700zł</td>
        <td>70x100cm</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Abstrakcja</td>
        <td>1000zł</td>
        <td>100x100cm</td>
      </tr>
    </tbody>
  </Table>
  </Container>
)