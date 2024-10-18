import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data);

    let photoApiKey = "1bf07a19dabb35aod3aet5596042cc7f";
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;

    axios.get(photoApiUrl).then(handleImages);
  }

  function search() {
    let apiKey = "1bf07a19dabb35aod3aet5596042cc7f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="type a word.."
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">i.e. forest, sunset, hockey, tea..</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
