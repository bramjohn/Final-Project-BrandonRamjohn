import styled from "styled-components";

const HomePage = () => {
  return (
    <>
      <Wrapper>
        <input type="text" placeholder="Find Work Now!" />
        <button value="submit">Submit</button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.form``;

export default HomePage;
