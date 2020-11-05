import React, { PureComponent } from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import { Buttons } from './components/Buttons/Buttons';

import './App.scss';

import * as goodsAPI from './api/goods';

class App extends PureComponent {
  state = {
    goods: [],
  }

  getGoods = (callback) => {
    callback()
      .then(this.handleGoods);
  }

  handleGoods = (goods) => {
    this.setState({ goods });
  }

  cleanGoods = () => this.handleGoods([]);

  render() {
    const { cleanGoods, getGoods } = this;
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        {goods.length === 0
          ? (
            <Buttons
              callback={getGoods}
              API={goodsAPI}
            />
          ) : (
            <GoodsList
              goods={goods}
              callback={cleanGoods}
            />
          )}
      </>
    );
  }
}

export default App;
