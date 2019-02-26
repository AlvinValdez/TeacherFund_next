import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from '../components/head'
import SubsectionImportant from '../components/subsectionImportant'
import StatsTable from '../components/statstable'
import MapGraphic from '../components/mapgraphic'
import '../static/styles/main.scss'

const Ourwork = () => (
  <div className='main-container'>
    <Nav navColor='black' backgroundColor='back-white' />
    <Head title='Our Work' />

    <div className='body'>
      <SubsectionImportant
        titleText='How we work'
        image='/static/images/dirty_desk.jpg'
        descriptionText="We believe public school teachers don't receive the recognition they deserve. We're working to change that."
      >
        <div className='ourwork--statstable'>
          <StatsTable />
        </div>
      </SubsectionImportant>

      <div className='mapgraphic--container'>
        <MapGraphic
          isMarkerShown
          googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
    <Footer />
  </div>
)

export default Ourwork
