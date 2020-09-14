import React from "react";
import fetch from "node-fetch";
import {
  arrayOf,
  shape
} from "prop-types";


function Index(props) {
  const { data } = props;
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{ item.email }</li>
      ))}
    </ul>
  );
}

Index.propTypes = {
  data: arrayOf(shape()).isRequired
}

export default Index;


export const getServerSideProps = async () => {
  const request = await fetch("https://reqres.in/api/users?page=1");
  const response = await request.json()
  return { props: response }
}
