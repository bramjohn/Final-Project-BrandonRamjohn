const Filter = ({ setFilter }) => {
  return (
    <>
      <form>
        <input
          type="radio"
          name="price"
          value="50"
          onChange={(e) => setFilter(e.target.value)}
        />
        <label>More than 50$</label>
        <input
          type="radio"
          name="price"
          value="100"
          onChange={(e) => setFilter(e.target.value)}
        />
        <label>More than 100$</label>
        <input
          type="radio"
          name="price"
          value="150"
          onChange={(e) => setFilter(e.target.value)}
        />
        <label>More than 150$</label>
        <input
          type="radio"
          name="price"
          value="200"
          onChange={(e) => setFilter(e.target.value)}
        />
        <label>More than 200$</label>
        <input
          type="radio"
          name="price"
          value="250"
          onChange={(e) => setFilter(e.target.value)}
        />
        <label>More than 250$</label>
        <input
          type="radio"
          name="price"
          value="300"
          onChange={(e) => setFilter(e.target.value)}
        />
        <label>More than 300$</label>
      </form>
    </>
  );
};

export default Filter;
