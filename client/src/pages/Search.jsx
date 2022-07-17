import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Text = styled.h2`
  color: ${({ theme }) => theme.text};
  margin: 0 auto;
`;

const Search = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = useLocation().search;

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      const res = await axios.get(`/videos/search${query}`);
      setVideos(res.data);
      setLoading(false);
    };
    fetchVideos();
  }, [query]);

  return (
    <Container>
      {loading || videos.length ? (
        videos.map((video) => <Card key={video._id} video={video} />)
      ) : (
        <Text>No Videos found for query ({query.split("=")[1]})!</Text>
      )}
    </Container>
  );
};

export default Search;
