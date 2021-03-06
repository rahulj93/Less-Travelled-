import React from 'react'; 
import {Link} from 'react-router-dom';

// const AttractionBox =({attraction}) => {
//     return (
//       <div> 
//         <p> hello </p>
//         <h1>{attraction.address}</h1>
//         <h1>{attraction.name}</h1>
//         <h1>{attraction.location_data}</h1>
//         <h1>{attraction.rating}</h1>
//       </div>
//     );
//   }; 

class AttractionBox extends React.Component {


  render () {
    return (

      <li>
        <Link to={`/attractions/${this.props.attraction._id}`} className="attraction-box-a" >
          <div className="attraction-box grow"> 
            <div className="attractionContent">
              <h2 className="attractionTitle"> {this.props.attraction.name}</h2>
              <h2 className="attractionRating">Rating: {this.props.attraction.rating}</h2>
              <h2 className="attractionAddress"> {this.props.attraction.address}</h2>
              {/* <h2>Location_data: {this.props.attraction.location_data}</h2> */}
              <h5 className="attractionDescription">{this.props.attraction.description || "No description available"}</h5> 
            </div>
            <div className="attractionPic">
              <img className="attractionsImage" src={this.props.attraction.imageUrl} alt="Attaction" />
            </div>
          </div>
        </Link>
      </li>
      
    );
  }
}

export default AttractionBox;