import React from 'react';
import logo from './wm_spark.png';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
      <header style={styles.header}>
      <div style={styles.productName}>
        <h3>Demo Product</h3>
      </div>
      <div style={styles.walmartLogo}>
      <img src={logo} style={styles.logo} alt='Walmart logo' /> 
      <h4>Walmart Labs</h4>
      </div>
      <div style={styles.uploadButton}>
       <button> Upload </button>
       </div>
      </header>

      <div style={styles.navBar}>
        <ul style={styles.navList}>
           <li>Bixby</li>
           <li>Siri</li>
           <li>Alexa</li>
        </ul>
      </div>

      <div style={styles.content}>
      <div style={styles.videoContent}>
       <video controls style={styles.videoContent}>
       <source src="https://noiseless-icicle.glitch.me/video" type="video/mp4" />
       </video>
      </div>
      <div style={styles.textContent}>
       <div style={styles.headerTextContent}>
       <h3>Title</h3>
       </div>
       <div style={styles.paragraphTextContent}>
       <p>
       Text Content here.
       </p>
       </div>
      </div>
      </div>

      <footer style={styles.footer}>
      Footer
      </footer>
      </div>
    )
  }
}

const styles = {
  header: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    background: '#3399ff',
    gridArea: 'header',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2px',
    color: 'white', 
    },
    navList: {
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    walmartLogo: {
      display: 'flex',
      alignItems: 'center',
    },
    productName: {
      marginLeft: 30,
    },
    logo: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    uploadButton: {
      marginRight: 20,
    },
    paragraphTextContent: {
      color: '#8c8c8c',
      lineHeight: 1.6,
      fontSize: 20,
    },
    headerTextContent: {
      color: '#666666',
      fontSize: 30,
    },
    videoContent: {
      width: 400,
      height: 450,
      margin: 30,
      borderRadius: 10,
    },
    textContent: {
      display: 'flex',
      flexDirection: 'column',
      margin: 30,
    },
  footer: {
    background: '#3399ff',
    gridArea: 'footer',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  navBar: {
    background: 'white',
    gridArea: 'navBar', 
    borderRadius: 10,
    marginLeft: 30,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  content: {
    background: 'white',
    display: 'flex',
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 10,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    background: '#f2f2f2',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridTemplateRows: '1fr 9fr 1fr',
    gridGap: '60px 10px',
    gridTemplateAreas: 
    '"header header" "navBar content" "footer footer"',
  }
}

export default App;
