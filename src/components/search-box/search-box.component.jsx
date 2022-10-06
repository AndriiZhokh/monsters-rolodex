import './search-box.styles.css';

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <div>
    <input
      type='search'
      className={ `search-box ${className}` }
      placeholder={ placeholder }
      onChange={ onChangeHandler }
    />
  </div>
);

export default SearchBox;
