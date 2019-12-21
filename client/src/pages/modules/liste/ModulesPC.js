import React, {Component} from 'react';
import axios from 'axios';
import Modules from './ModulesPV';
import ModuleItem from './ModuleItem';

class ModulesPC extends Component {
  constructor() {
    super();
    this.state = {
      modules: [],
    };
  }

  UNSAFE_componentWillMount() {
    this.getFilieres();
  }

  getFilieres() {
    axios
      .get('http://localhost:4000/modules')
      .then(response => {
        this.setState({
          modules: response.data,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const moduleItems = this.state.modules.map((module, i) => {
      return <ModuleItem item={module} key={module.id} />;
    });
    return (
      <div>
        <Modules moduleItems={moduleItems} />
      </div>
    );
  }
}

export default ModulesPC;
