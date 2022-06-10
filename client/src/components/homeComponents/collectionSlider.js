import ImageSlider from './ImageSlider';
import test from '../../pages/images/test.jpg';
import test2 from '../../pages/images/test2.jpg';

const CollectionSlider = () => {
  // Data for top 10 Artists
  const slides = [
    {
      name: 'G',
      img: test,
    },
    { name: 'H', img: test },
    { name: 'F', img: test2 },
    { name: 'T', img: test },
    { name: 'I', img: test2 },
    { name: 'J', img: test },
    { name: 'K', img: test2 },
    { name: 'L', img: test },
    { name: 'M', img: test2 },
  ];
  // Data for top 10 Collection
  const slides2 = [
    {
      name: 'G',
      img: test2,
    },
    { name: 'H', img: test },
    { name: 'F', img: test2 },
    { name: 'T', img: test },
    { name: 'I', img: test2 },
    { name: 'J', img: test },
    { name: 'K', img: test2 },
    { name: 'L', img: test },
    { name: 'M', img: test2 },
  ];
  //
  const containerStyles = {
    width: '750px',
    height: '350px',
    margin: '0 auto',
  };
  const pageStyle = {
    // height: '80vh',
  };
  // style for the TITLE of the ARTIST sliders
  const titleStyle = {
    marginTop: '2%',
    marginLeft: '10%',
    fontSize: '180%',
    fontWeight: 'bolder',
  };
  // style for the TITLE of the COLLECTION sliders
  const titleStyle2 = {
    marginTop: '2%',
    marginLeft: '10%',
    fontSize: '180%',
    fontWeight: 'bolder',
  };
  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Top 10 Artists</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <h1 style={titleStyle2}>Top 10 Collections</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides2} />
      </div>
    </div>
  );
};

export default CollectionSlider;
