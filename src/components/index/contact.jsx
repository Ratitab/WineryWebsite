import React, {useEffect, useRef, useState} from "react";
import "../../assets/css/flexslider.min.css";
import "../../assets/css/line-icons.min.css";
import "../../assets/css/elegant-icons.min.css";
import "../../assets/css/lightbox.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/theme-1.css";
import "../../assets/css/custom.css";
import "../../assets/css/font-cardo.css";
import { AdvancedMarker, APIProvider, Map, Pin } from "@vis.gl/react-google-maps";
import emailjs from '@emailjs/browser';
import DefaultLayout from "../../layouts/DefaultLayout";

const locations = [
  {key: "IBERIAN WINE IMPORTS", location:{ lat: 41.7038336, lng: 44.7840256}}
]

const PoiMarkers = ({pois}) => {
  return (
    <>
    {pois.map((poi) =>(
      <AdvancedMarker key={poi.key} position={ poi.location} >
        <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
      </AdvancedMarker>
    ))}
    </>
  )
}


const center = {
  lat: 41.616756,
  lng: 41.636745,
};

const ContactComponent = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState("")
  const [massage, setMassage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      from_name: name,  
      user_name: username,  // Corresponds to {{from_name}} in the template
      to_name: 'Your Name', // You can set this to your name or leave it dynamic
      message: massage 
    }

    // console.log(templateParams.user_name,templateParams.from_name)

    emailjs.send('service_jnw6t1q', 'template_005ouni', templateParams, {
      publicKey: 'ZzZ__CC20xsybPclo'
    })
    .then((response) => {
      const autoReplyParams = {
        user_name: name,
        message: massage,
        to_email: email // Sends the auto-reply to the user's email
      }
      setSuccessMessage("message sent successfully");
      setName('');
      setEmail('');
      setMassage('');
      setUsername('')

      console.log(autoReplyParams.to_email, "EMAILSENT SUCCESSFULLY")
      emailjs.send("service_jnw6t1q", "template_gq90rhe", autoReplyParams, {
        publicKey: "ZzZ__CC20xsybPclo"
      }) 
    })
      .then((response) => {
        console.log('Auto-reply sent successfully:',);
        setName('');
        setEmail('');
        setMassage('');
        console.log(response)
      })
    .catch ((error) => {
      setErrorMessage("failed to send message", error)
      console.log(error)
    }) 
  }

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const { google } = window;
      const map = mapRef.current;

      // Create a new instance of AdvancedMarkerElement
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: center,
        title: 'This is a marker',
      });

      // Optionally, you can add event listeners to the marker
      marker.addListener('click', () => {
        alert('Marker clicked!');
      });
    }
  }, []);


  return (
    <div>
      <DefaultLayout>
      <div className="main-container">
        {/* Map Section */}
        <section className="map">
          <div className="map-holder">
            {/* <LoadScript googleMapsApiKey="AIzaSyAisof1NvvzCzMb_O1sFZWyHUVSju8fdrk">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={14}
                onLoad={map => (mapRef.current = map) }
              >
              </GoogleMap>
            </LoadScript> */}
            <APIProvider apiKey="AIzaSyAisof1NvvzCzMb_O1sFZWyHUVSju8fdrk" onLoad={() => console.log("maps api has loaded")}>
              <Map
              defaultZoom={13}
              defaultCenter={{lat: 41.7038336, lng: 44.7840256}}
              mapId={'bd70e5bbdf4623d2'}
              onCenterChanged={(ev) => console.log("Camera Changed: ", ev.detail.center, "Zoom:", ev.detail.zoom)}
              >
                <PoiMarkers pois={locations} />
              </Map>
            </APIProvider>
          </div>
        </section>

        {/* Contact Center */}
        <section className="contact-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                <h1>
                  Have questions? <br />
                  Maybe you want just to try our wines?
                  <br />
                </h1>
                <p className="lead">
                  contact@winery.com
                  <br />
                  +80 984 349 492
                  <br />
                  <br />
                  Best Winery
                  <br />
                  200 Provence-Alpes,&nbsp;France
                </p>
              </div>
              <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                <div className="form-wrapper clearfix">
                  <form className="form-contact email-form" ref={form} onSubmit={handleSubmit}>
                    <div className="inputs-wrapper">
                      <input
                        className="form-name validate-required"
                        type="text"
                        placeholder="Your Name"
                        name="user_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <input
                        className="form-email validate-required validate-email"
                        type="text"
                        name="user_email"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <textarea
                        className="form-message validate-required"
                        name="message"
                        placeholder="Your Message"
                        value={massage}
                        onChange={(e) => setMassage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      className="send-form"
                      value="Send Form"
                    />
                     {successMessage && <div className="form-success"><span className="text-white">{successMessage}</span></div>}
                     {errorMessage && <div className="form-error"><span className="text-white">{errorMessage}</span></div>}
                    {/* <div className="form-success">
                      <span className="text-white">
                        Message sent - Thanks for your enquiry
                      </span>
                    </div>
                    <div className="form-error">
                      <span className="text-white">
                        Please complete all fields correctly
                      </span>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </DefaultLayout>
    </div>
  );
};

export default ContactComponent;
