import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { particularMedia } from "../Hoc/api";

const Preview = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [media, setMedia] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const res = await particularMedia(id);

                console.log(res,'res');
                
                setMedia({
                    ...res.data,
                    content: res?.data?.content
                        ? JSON.parse(res.data.content)
                        : {}
                });
            } catch (error) {
                // navigate(-1); // optional
            } finally {
                setLoading(false);
            }
        };

        fetchMedia();
    }, [id]);

    
    if (loading) return <p>Loading...</p>;
    if (!media) return <p>No data found</p>;

    console.log(media,'mnedi');
    
    return (
        <>
            <h1>Preview</h1>

            {media?.url && (
                <img src={media.url} alt="preview" />
            )}

            <h1>{media?.content?.title}</h1>
        </>
    );
};

export default Preview;
