import { InputFilter, LabelFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { getFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const handleInput = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <LabelFilter>
      <InputFilter
        type="text"
        placeholder="Find contacts by name"
        value={filterName}
        onChange={handleInput}
      />
    </LabelFilter>
  );
};

export default Filter;
