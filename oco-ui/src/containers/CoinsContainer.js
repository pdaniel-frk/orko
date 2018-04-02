import React from 'react';
import { connect } from 'react-redux';

import { Icon } from 'semantic-ui-react';

import * as coinsActions from '../store/coins/actions';

import CoinLink from '../components/CoinLink'
import SectionHeading from '../components/primitives/SectionHeading';
import Link from '../components/primitives/Link';

const CoinsCointainer = props => (
  <div>
    <SectionHeading>Coins</SectionHeading>
    {props.coins.map(coin => (
      <CoinLink
        key={coin.key}
        coin={coin}
        onRemove={() => props.dispatch(coinsActions.remove(coin))}
      />
    ))}
    <Link to="/addCoin"><Icon name="add"/>Add</Link>
  </div>
);

function mapStateToProps(state) {
  return {
    coins: state.coins.coins
  };
}

export default connect(mapStateToProps)(CoinsCointainer);