import PropTypes from 'prop-types';
import { Inner, Input, Label } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  const uniqId = require('shortid');

  return (
    <Inner>
      <Label>Find contact</Label>
      <Input
        name="filter"
        placeholder="Enter search word..."
        filter={filter}
        onChange={e => {
          onChangeFilter(e.target.value);
        }}
        id={uniqId.generate()}
      />
    </Inner>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
