import wine1 from "../../assets/img/wine_1.png";
import wine2 from "../../assets/img/wine_2.png";
import wine3 from "../../assets/img/wine_3.png";
import wine4 from "../../assets/img/wine_4.png";
import wine5 from "../../assets/img/wine_5.png";
import wine6 from "../../assets/img/wine_6.png";
import DefaultLayout from "../../layouts/DefaultLayout";
import pietreDiLuna from '../../assets/pdfs/Tech Sheet Pietre di Luna.pdf'

const WineCollectionBatono = () => {

    const wines = [
        { name: 'Chardonnay', description: 'Lorem ipsum', image: wine1, pdf: pietreDiLuna},
        { name: 'Merlot', description: 'Dolor Sit', image: wine2 },
        { name: 'Pinot Noir', description: 'Modi tempora', image: wine3 },
        { name: 'Chenin Blanc', description: 'Magnam aliquam', image: wine4 },
        { name: 'Nebbiolo', description: 'Ipsum quia', image: wine5 },
        { name: 'Cabernet Franc', description: 'Numquam eius', image: wine6 },
      ];

      const handleWineClick = (pdfUrl) => {
        console.log("AKAVAARTT")
        window.open(pdfUrl, '_blank')
      }

    return (
        <DefaultLayout>
        <section className="team-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h1>Meet collection of our wines</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
  
          <div className="row">
            {wines.map((wine, index) => (
              <div key={index} className="col-md-2 col-sm-4">
                <div className="team-1-member" onClick={() => handleWineClick(wine.pdf)}>
                  <img alt={wine.name} className="background-image" src={wine.image} />
                  <h5>{wine.name}</h5>
                  <span>{wine.description}</span><br />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </DefaultLayout>

    )
}

export default WineCollectionBatono 