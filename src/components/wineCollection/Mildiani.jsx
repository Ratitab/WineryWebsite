import aladasturiRoseIMG from "../../assets/img/aladasturirose.png";
import alazaniValleyIMG from "../../assets/img/alazaniValley.png";
import khikhviQvevriIMG from "../../assets/img/khikhviKvevriBuqouet.png";
import khvanchkaraIMG from '../../assets/img/khvanchkara.png'
import kindzmarauliIMG from '../../assets/img/kindzmarauli.png'
import kisiIMG from '../../assets/img/kisi.png'
import kisiMtsvaneIMG from '../../assets/img/kisiMtsvane.png'
import kisiKvevriIMG from '../../assets/img/kisiKvevri.png'
import kisiKvevriBouquetIMG from '../../assets/img/kisiKvevriBouquet.png'
import mtsvaneIMG from '../../assets/img/mtsvane.png'
import mukuzaniIMG from '../../assets/img/mukuzani.png'
import mukuzaniRESERVEIMG from '../../assets/img/mukuzaniRESERVE.png'
import ojaleshiIMG from '../../assets/img/ojaleshi.png'
import pirosmaniIMG from '../../assets/img/pirosmani.png'
import rkatsiteliIMG from  '../../assets/img/rkatsiteli.png'
import rkatsiteliKvevriIMG from '../../assets/img/rkatsiteliKvevriBouquet.png'
import rkatsiteliReserveIMG from '../../assets/img/rkatsiteliReserve.png'
import rkatsiteliUnfilteredIMG from '../../assets/img/rkatsiteliUnfiltered.png'
import saperaviIMG from '../../assets/img/saperavi.png'
import saperaviKvevriIMG from  '../../assets/img/saperaviKvevri.png'
import saperaviKvevriBouquetIMG from '../../assets/img/saperaviKvevriBouquet.png'
import saperaviSpecialReserveIMG from '../../assets/img/saperaviSpecialReserve.png'
import sparklingWIneIMG from '../../assets/img/sparklingWine.png' 
import tsolikauriIMG from '../../assets/img/Tsolikarui.png'
import tsolikauriKvevriBouquetIMG from '../../assets/img/tsolikauriKvevriBouquet.png'
import tvishiIMG from '../../assets/img/tvishiPremium.png'
import usakhelauriIMG from '../../assets/img/usakhelauri.png'

import DefaultLayout from "../../layouts/DefaultLayout";
import "./css/index.css";
import aladasturiRose from "../../assets/pdfs/ALADASTURI ROSE.pdf";
import alazaniValley from "../../assets/pdfs/ALAZANI VALLEY.pdf";
import khikhviKvevri from "../../assets/pdfs/KHIKHVI QVEVRI BOUQUET.pdf";
import khvanchkara from "../../assets/pdfs/KHVANCHKARA.pdf";
import kindzmarauli from "../../assets/pdfs/KINDZMARAULI.pdf";
import kisi from "../../assets/pdfs/KISI.pdf";
import kisiMtsvane from "../../assets/pdfs/KISI - MTSVANE.pdf";
import kisiKvevri from "../../assets/pdfs/KISI QVEVRI.pdf";
import kisiKvevriBouquet from "../../assets/pdfs/KISI QVEVRI BOUQUET.pdf";
import mtsvane from "../../assets/pdfs/MTSVANE.pdf";
import mukuzani from '../../assets/pdfs/MUKUZANI.pdf'
import mukuzaniRESERVE from '../../assets/pdfs/MUKUZANI RESERVE.pdf'
import ojaleshi from '../../assets/pdfs/OJALESHI.pdf'
import pirosmani from '../../assets/pdfs/PIROSMANI.pdf'
import rkatsiteli from '../../assets/pdfs/RKATSITELI.pdf'
import rkatsiteliKvevri from '../../assets/pdfs/RKATSITELI QVEVRI BOUQUET.pdf'
import rkatsiteliReserve from '../../assets/pdfs/RKATSITELI QVEVRI RESERVE.pdf'
import rkatsiteliUnfiltered from '../../assets/pdfs/RKATSITELI QVEVRI UNFILTERED.pdf'
import saperavi from '../../assets/pdfs/SAPERAVI.pdf'
import saperaviKvevri from '../../assets/pdfs/SAPERAVI QVEVRI.pdf'
import saperaviKvevriBouquet from '../../assets/pdfs/SAPERAVI QVEVRI BOUQUET.pdf'
import saperaviSpecialReserve from '../../assets/pdfs/SAPERAVI SPECIAL RESERVE.pdf'
import sparklingWIne from '../../assets/pdfs/SPARKLING WINE.pdf'
import tsolikauri from '../../assets/pdfs/TSOLIKAURI.pdf'
import tsolikauriKvevriBouquet from '../../assets/pdfs/TSOLIKAURI QVEVRI BOUQUET.pdf'
import tvishi from  '../../assets/pdfs/TVISHI PREMIUM.pdf'
import usakhelauri from '../../assets/pdfs/USAKHELAURI.pdf'

const WineCollectionMildiani = () => {
  const wines = [
    {
      name: "Aladasturi Rose",
      description: "Lorem ipsum",
      image: aladasturiRoseIMG,
      pdf: aladasturiRose,
    },
    {
      name: "Alazani Valley",
      description: "Dolor Sit",
      image: alazaniValleyIMG,
      pdf: alazaniValley,
    },
    { name: "Khikhvi Qvevri Bouquet", description: "Modi tempora", image: khikhviQvevriIMG, pdf: khikhviKvevri},
    { name: "Khvanchkara", description: "Magnam aliquam", image: khvanchkaraIMG, pdf: khvanchkara},
    { name: "Kindzmarauli", description: "Ipsum quia", image: kindzmarauliIMG, pdf: kindzmarauli },
    { name: "Kisi", description: "Numquam eius", image: kisiIMG, pdf: kisi },
    { name: "Kisi Mtsvane", description: "Numquam eius", image: kisiMtsvaneIMG, pdf: kisiMtsvane },
    { name: "Kisi Qvevri", description: "Numquam eius", image: kisiKvevriIMG, pdf: kisiKvevri },
    { name: "Kisi Qvevri Bouquet", description: "Numquam eius", image: kisiKvevriBouquetIMG, pdf: kisiKvevriBouquet },
    { name: "Mtsvane", description: "Numquam eius", image: mtsvaneIMG, pdf: mtsvane },
    { name: "Mukuzani", description: "Numquam eius", image: mukuzaniIMG, pdf: mukuzani },
    { name: "Mukuzani Reserve", description: "Numquam eius", image: mukuzaniRESERVEIMG, pdf: mukuzaniRESERVE },
    { name: "Ojaleshi", description: "Numquam eius", image: ojaleshiIMG, pdf: ojaleshi },
    { name: "Pirosmani", description: "Numquam eius", image: pirosmaniIMG, pdf: pirosmani },
    { name: "Rkatsiteli", description: "Numquam eius", image: rkatsiteliIMG, pdf: rkatsiteli },
    { name: "Rkatsiteli Qvevri Bouquet", description: "Numquam eius", image: rkatsiteliKvevriIMG, pdf: rkatsiteliKvevri },
    { name: "Rkatsiteli Qvevri Reserve", description: "Numquam eius", image: rkatsiteliReserveIMG, pdf: rkatsiteliReserve },
    { name: "Rkatsiteli Qvevri Unfiltered", description: "Numquam eius", image: rkatsiteliUnfilteredIMG, pdf: rkatsiteliUnfiltered },
    { name: "Saperavi", description: "Numquam eius", image: saperaviIMG, pdf: saperavi },
    { name: "Saperavi Qvevri", description: "Numquam eius", image: saperaviKvevriIMG, pdf: saperaviKvevri },
    { name: "Saperavi Qvevri Bouquet", description: "Numquam eius", image: saperaviKvevriBouquetIMG, pdf: saperaviKvevriBouquet },
    { name: "Saperavi Special Reverse", description: "Numquam eius", image: saperaviSpecialReserveIMG, pdf: saperaviSpecialReserve },
    { name: "Sparkling Wine", description: "Numquam eius", image: sparklingWIneIMG, pdf: sparklingWIne },
    { name: "Tsolikauri", description: "Numquam eius", image: tsolikauriIMG, pdf: tsolikauri },
    { name: "Tsolikauri Qvevri Bouquet", description: "Numquam eius", image: tsolikauriKvevriBouquetIMG, pdf: tsolikauriKvevriBouquet },
    { name: "Tvishi Premium", description: "Numquam eius", image: tvishiIMG, pdf: tvishi },
    { name: "Usakhelauri", description: "Numquam eius", image: usakhelauriIMG, pdf: usakhelauri },
  ];

  const handleWineClick = (pdfUrl) => {
    console.log("AKAVAARTT");
    window.open(pdfUrl, "_blank");
  };

  return (
    <DefaultLayout>
      <section className="team-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h1>Meet collection of Mildiani wines</h1>
              <p className="lead">
              Mildiani Family Winery, established in the heart of Georgia's wine region, 
                represents over a century of winemaking tradition. Mildiani vineyards, nestled in 
                the fertile valleys of Kakheti, combine time-honored Georgian winemaking methods 
                with modern expertise. From traditional Qvevri wines to contemporary vintages, 
                each bottle reflects Family commitment to quality and their rich heritage in wine 
                cultivation.
              </p>
            </div>
          </div>

          <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {wines.map((wine, index) => (
              <div key={index} className="col-md-2 col-sm-4" style={{ marginBottom: '30px' }}>
                <div className="team-1-member" style={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  padding: '15px'
                }}>
                  <div
                    style={{
                      width: '100%',
                      height: '280px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '15px'
                    }}
                  >
                    <img
                      alt={wine.name}
                      style={{
                        width: 'auto',
                        height: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain'
                      }}
                      src={wine.image}
                    />
                  </div>

                  <h5 style={{ 
                    textAlign: 'center', 
                    margin: '10px 0',
                    width: '100%'
                  }}>{wine.name}</h5>
                  
                  <span style={{ 
                    textAlign: 'center', 
                    display: 'block', 
                    marginBottom: '15px',
                    width: '100%'
                  }}>
                    {wine.description}
                  </span>
                  
                  <div className="DetailsBtnColletion" style={{ 
                    marginTop: 'auto',
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'center',
                    width: '100%'
                  }}>
                    <button style={{ margin: '0 5px' }}>Buy</button>
                    <button style={{ margin: '0 5px' }} onClick={() => handleWineClick(wine.pdf)}>
                      See More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default WineCollectionMildiani;
