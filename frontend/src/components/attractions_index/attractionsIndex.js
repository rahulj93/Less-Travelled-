import React from "react";
import {withRouter} from 'react-router-dom';
import TravelMap from '../map/map';
import AttractionsBox from './AttractionsBox'; 
import SearchBar from '../search/search'

class AttractionsIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.renderAttractions = this.renderAttractions.bind(this);
    this.state = {
      attractions: this.props.attractions,
      searchTerm: ""
    }
    this.handleQuery = this.handleQuery.bind(this);
  }

  componentDidMount() {

    this.props.fetchAttractions();
      
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchTerm !== this.state.searchTerm){
      // this.props.fetchAttractions();
      this.setState({attractions: this.props.attractions.filter(attraction => attraction.name
        .toLowerCase()
        .includes(this.state.searchTerm
          .toLowerCase()))})
    }
    if(prevProps.attractions !== this.props.attractions){
      // this.props.fetchAttractions();
      this.setState({attractions: this.props.attractions.filter(attraction => attraction.name
        .toLowerCase()
        .includes(this.state.searchTerm
          .toLowerCase()))})
    }
  }
  
  // componentWillReceiveProps(newState) {
  //   this.setState({ attractions: newState.attractions });
  // }

  handleQuery(query){
    return (e) => {
      e.preventDefault();
      this.setState({searchTerm: query})
    }
  }
  render() {
    if (this.state.attractions.length === 0) return null;
     const attractions = this.state.attractions.map(attraction => (
        <AttractionsBox
                  key={attraction._id} 
                  attraction={attraction}
                  fetchAttractions={this.props.fetchAttractions}
                />
      ))

    return (
      <div className='attractions-container'>
        <div>
          <SearchBar handleQuery={this.handleQuery}/>
        </div>

        <br/>

        <div className="attractionsListings">
            {attractions}
        </div>
         
        <div className='attractions-main'>
          <br/> 
          <div className="attractionsIndex"> 
          </div>
          <map><TravelMap attractions={attractions} /></map>
        </div>
      </div>
    );
  }
} 

export default withRouter (AttractionsIndex);





//  from attraction_index_item file that I deleted: 


// import React from 'react';
// import { withRouter } from 'react-router-dom';

// // import AttractionShowContainer from '../attraction_show_container';

// class IndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     const attractionId = this.props.attraction.id;
//     this.props.history.push(`/attractions/${attractionId}`);
//   }

//   render() {
//     // const { name, address, location_data, description, rating, picture_url } = this.props.attraction;
//     const { name, address, location_data, description, rating } = this.props.attraction;
//     return (
//       <div className="attraction-index-item"
//         onClick={this.handleClick} >

//           <div className="attraction-item-info">
//             <span>{address}</span>
//           </div>
// {/* 
//         <div className="attraction-item-info">
//           <span className="index-item-category">Rating:</span>
//             <span className="index-item-copy">
//               {average_rating || 'No reviews yet'}
//             </span>
//           <span className="index-item-category">Description:</span>
//           <span className="index-item-copy">{description}</span>
//         </div> */}

//         {/* <img src={picture_url} /> */}
//       </div>
//     );
//   }
// }

// export default withRouter(IndexItem);
