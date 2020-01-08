import React, {Component} from 'react';
import axios from 'axios';
import TypesActivites from './TypesActivitesPV';
import TypeActiviteItem from './TypeActiviteItem';

class TypesActivitesPC extends Component {
  constructor() {
    super();
    this.state = {
      typesactivites: [],
    };
  }

  UNSAFE_componentWillMount() {
    this.getTypeActivite();
  }

  getTypeActivite() {
    axios
      .get('http://localhost:4000/type-activites')
      .then(response => {
        this.setState({
          typesactivites: response.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    // console.log(this.state);
    const typeactiviteItems = this.state.typesactivites.map(
      (typeactivite, i) => {
        return <TypeActiviteItem item={typeactivite} key={typeactivite.id} />;
      },
    );
    return (
      <div>
        <TypesActivites typeactiviteItems={typeactiviteItems} />
      </div>
    );
  }
}

export default TypesActivitesPC;
