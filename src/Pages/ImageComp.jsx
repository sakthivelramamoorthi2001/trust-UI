import { useEffect, useState } from "react";
import loadingImage from "../assets/images/loading.png";

// remember loaded images across components
const loadedImageCache = new Map();

const ImageComp = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(loadedImageCache.has(src));
  const [error, setError] = useState(false);

  useEffect(() => {
    // if src changes and not cached → show loader again
    if (!loadedImageCache.has(src)) {
      setLoaded(false);
      setError(false);
    }
  }, [src]);

  return (
    <>
      {!loaded && !error && (
        <img
          src={loadingImage}
          alt="loading"
          style={{ minHeight: "230px", maxHeight: "230px" }}
        />
      )}

      {!error && (
        <img
          src={src}
          alt={alt}
          style={{
            display: loaded ? "block" : "none",
            minHeight: "230px",
            maxHeight: "230px"
          }}
          onLoad={() => {
            loadedImageCache.set(src, true); // remember success
            setLoaded(true);
          }}
          onError={() => {
            setError(true);
            setLoaded(false);
          }}
        />
      )}

      {error && <span>Failed to load image</span>}
    </>
  );
};

export default ImageComp;