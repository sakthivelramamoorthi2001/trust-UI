import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { particularMedia } from "../Hoc/api";
import useAuth from "../auth/useAuth";
import Aos from "aos";
import "./Preview.css"
import Footer from "./Footer";
import Header from "./Headers";
import { formListing } from "../Hoc/constData";


const Preview = () => {

    const { mediaList } = useAuth();

    const { id } = useParams();

    const [media, setMedia] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let m = mediaList.data?.find(i => i.id == id);


        let parsedContent = {};

        try {
            parsedContent = JSON.parse(m.content || "{}");
        } catch (e) {
            parsedContent = {};
        }

        setMedia(prev => ({ ...prev, ...m, content: parsedContent }));
        setLoading(false);
    }, [id, mediaList]);



    useEffect(() => {
        Aos.init()
    }, [])

    if (loading || mediaList.loading || !media) return <div className="fullscreen-loader">
        <div className="spinner" />
        <p className="loading-text">Loading...</p>
    </div>;
    // // console.log(media, 'media');


    const capitalize = (str = "") => {


        str = str.toLowerCase().replaceAll("_", " ")
        return str.charAt(0).toUpperCase() + str.slice(1);


    }


    const getTitle = () => (media?.content?.Title || media?.PostType || "").toString().toUpperCase().replace("_", " ");



    const listing = formListing[media?.PostType] || [];
    console.log(media, 'media', listing);





    return (<>
        <Header />


        <section className="breadcrumb-section bg-cream">
            <div className="container-fluid">
                <div className="row g-0">
                    <div className="col-xl-12 col-lg-12">
                        <div
                            className="breadcrumb-content"
                            style={{ backgroundImage: "url(https://econest-html.netlify.app/econest/assets/img/bg/breadcrumb-bg.webp)", }}
                        >
                            <div className="breadcrumb-nav" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <ul>
                                    <li><a >Home</a></li>
                                    <li><a >{capitalize(media.PostType || "Media")}</a></li>
                                    <li><a >Preview</a></li>
                                </ul>
                            </div>
                            <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                <h2>{getTitle()}</h2>
                            </div>
                            <div className="shape-1">
                                {/* <!-- <img src="https://econest-html.netlify.app/econest/assets/img/shapes/shape-1.webp" alt="shape"> --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="breadcrumb-thumb">
                    <img src="https://econest-html.netlify.app/econest/assets/img/thumbs/thumb-1.webp" alt="thumb">
                </div>
            </div> --> */}
                </div>
            </div>
        </section>


        <div className="details-content aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <div className="thumb-wrap m-b-20 flexing">
                <img src={media.url} alt="thumb" />
            </div>






            <div className="post-wrapper">
                <p style={{ textAlign: "right" }}>
                    Created At : {new Date(media.createdAt).toLocaleString("en-IN")}
                </p>
                <h3 className="post-heading">
                    {media.content?.title}
                </h3>


                <div
                    dangerouslySetInnerHTML={{ __html: media?.content?.content || "" }}
                ></div>



                {/* <p key={item.key} className="post-content">
                    //         {value}
                    //     </p> */}
                {/* {listing.map((item) => {

                    const value = media.content[item.key];
                    if (!value) return null;

                    const isHeading = item.key.toLowerCase().includes("heading") || item.key === "Title";

                    // return isHeading ? (
                    //     <h3 key={item.key} className="post-heading">
                    //         {value}
                    //     </h3>
                    // ) : (
                    //     <p key={item.key} className="post-content">
                    //         {value}
                    //     </p>
                    // );
                })} */}
            </div>

        </div>

        <Footer />

    </>
    );
};

export default Preview;
