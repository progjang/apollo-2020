import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_MOVIES = gql `
{
    apimovies {
        id
        medium_cover_image
    }
}
`;

export default () => {
    const {loading, data} = useQuery(GET_MOVIES);
    console.log(loading);
    if(loading) {
        return <h1>Loading...</h1>;
    } else {
        console.log(data);
        return data.apimovies.map(m=><div><img src={m.medium_cover_image} /></div>);
    };
};