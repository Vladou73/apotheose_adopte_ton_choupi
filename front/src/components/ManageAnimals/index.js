import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

const ManagedAnimals = () => (
  <div>

    <Link to="/admin/gestion-animaux/1"> animal 1 </Link>

    <table>
      <tr>
        <td />
        <td>Nom</td>
        <td>race</td>
        <td>espèce</td>
        <td>date de naissance</td>
        <td>Tags</td>
      </tr>
      <tr>
        <td />
        <td>Choupi</td>
        <td>Salamandre</td>
        <td />
        <td />
        <td>SOS, mignon</td>
      </tr>
      <tr>
        <td />
        <td>Choupi</td>
        <td>Salamandre</td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>Choupi</td>
        <td>Salamandre</td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td />
        <td>Choupi</td>
        <td>Salamandre</td>
        <td />
        <td />
        <td>SOS, grincheux</td>
      </tr>
      <tr>
        <td />
        <td>Choupi</td>
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td />
        <td>Choupi</td>
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td />
        <td>Choupi</td>
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td />
        <td>Choupi</td>
        <td />
        <td />
        <td />
        <td />
      </tr>

    </table>
  </div>

);

ManagedAnimals.propTypes = {};

export default ManagedAnimals;
