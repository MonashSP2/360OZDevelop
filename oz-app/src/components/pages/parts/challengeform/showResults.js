import React, {Component} from 'react';
import jsondata from '../population_15.geojson';
import '../map.css';
import {json as requestJson} from 'd3-request';
import './showResults.css';
import { Tabs } from 'antd';
import GoogleMapComponent from './googleMapComponent';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: -37.8764649,
            longitude: 145.0437644,
            data: null,
            isLoaded:false,
            returnPoints: [],
            returnPointsDay2: [],
            renderMap:false,
        }
    };


    async componentDidMount() {
        requestJson(jsondata, (error, response) => {
            if (!error) {
                this._loadData(response);
            }
        })
    }


    _loadData = data => {

           const location = this.props.match.params.locationpara;
           const results = this.props.location.state.results;
           const locationSplit = location.split("&");
           this.setState({
             latitude: parseFloat(locationSplit[0]),
             longitude: parseFloat(locationSplit[1]),
           });
           console.log(this.state.latitude);
           let resultArrayJson = JSON.parse(results)
           let key;

           for (key in resultArrayJson) {
             if (key == 'mykiCard' && resultArrayJson[key] == true){
               resultArrayJson[key] = '711'
             }else if (key == 'mykiCard' && resultArrayJson[key] == false){
               resultArrayJson[key] = 'a'
             }
             if (key == 'groceries' && resultArrayJson[key] == true){
               resultArrayJson[key] = 'groceries'
             }else if (key == 'groceries' && resultArrayJson[key] == false){
               resultArrayJson[key] = 'a'
             }
             if (key == 'beddings' && resultArrayJson[key] == true){
               resultArrayJson[key] = 'beddings'
             }else if (key == 'beddings' && resultArrayJson[key] == false){
               resultArrayJson[key] = 'a'
             }
             if (key == 'cooking' && resultArrayJson[key] == true){
               resultArrayJson[key] = 'cooking'
             }else if (key == 'cooking' && resultArrayJson[key] == false){
               resultArrayJson[key] = 'a'
             }
             if (key == 'clothing' && resultArrayJson[key] == true){
               resultArrayJson[key] = 'clothing'
             }else if (key == 'clothing' && resultArrayJson[key] == false){
               resultArrayJson[key] = 'a'
             }
           }
           let day1UrlParameter =[];
           let day2UrlParameter =[];
           let tempResultUrlParameter = [];
           for (key in resultArrayJson) {
             if (key == 'simCard'){
               day1UrlParameter.push(resultArrayJson[key])}
             else if (key == 'mykiCard'){
               day1UrlParameter.push(resultArrayJson[key])}
            else if (key == 'bankCard'){
                day1UrlParameter.push(resultArrayJson[key])}
            else if (key == 'goCampus'){
                day1UrlParameter.push(resultArrayJson[key])}
            else if (key == 'groceries'){
              day2UrlParameter.push(resultArrayJson[key])}
            else if (key == 'beddings'){
              day2UrlParameter.push(resultArrayJson[key])}
           else if (key == 'cooking'){
              day2UrlParameter.push(resultArrayJson[key])}
           else if (key == 'clothing'){
              day2UrlParameter.push(resultArrayJson[key])}
           }
           day1UrlParameter.push('a')
           day1UrlParameter.push('a')
           day1UrlParameter.push('a')
           day1UrlParameter.push('a')
           day2UrlParameter.push('a')
           day2UrlParameter.push('a')
           day2UrlParameter.push('a')
           day2UrlParameter.push('a')

           console.log(day1UrlParameter);
           fetch('http://35.189.58.222/ondaychallenge/' + day1UrlParameter[0] + '/railwaystation/'+ day1UrlParameter[1] + '/' + day1UrlParameter[2] + '/'+ day1UrlParameter[3] + '/'  + locationSplit[0] + '/' + locationSplit[1] + '/')
               .then(res => res.json())
               .then(json => {
                 console.log(json);
                 for (let i = 0; i < json.length; i++) {
                   if (json[i].length == 0){
                     delete json[i]
                   }
                   if (!json[i]){
                     delete json[i]
                   }
                  }
                  console.log(json);
                   this.setState({
                       isLoaded: true,
                       returnPoints: json,
                       renderMap: true,
                   });

                   let lon = this.state.returnPoints;
                   console.log(lon);
               })


           fetch('http://35.189.58.222/ondaychallenge/' + '/railwaystation/'+ day2UrlParameter[0] + '/'+ day2UrlParameter[1] +'/' + day2UrlParameter[2] +'/' +  day2UrlParameter[3] +'/'+ locationSplit[0] + '/' + locationSplit[1] + '/')
               .then(res => res.json())
               .then(json => {
                   this.setState({
                       isLoaded: true,
                       returnPointsDay2: json,
                   });
                   let lon = this.state.returnPointsDay2;
                   console.log(lon);
               });
       };

       componentWillReceiveProps(nextProps) {
        this.setState({
          latitude: nextProps.latitude,
          longitude: nextProps.longitude,
        });
      }



    render() {
        const location = this.props.match.params.locationpara;
        const results = this.props.location.state.results;
        const {viewport, settings, mapStyle, returnPoints, returnPointsDay2} = this.state;

        const locationSplit = location.split("&");
        return (
            <div>
              <Tabs style={{position:'absolute',left:'-45%',top:'8%',width:'95vw',height:'90vh',paddingLeft:'500px'}}
                tabBarGutter='200px' tabBarStyle={{border:'none'}} defaultActiveKey="1"  onChange={callback}>
                  <TabPane tab="Day 1" key="1" >
                    <div>
                  <div id="mapBox" style={{position:'absolute', top:'4%',left:'32%', width:'800px'}}>
                    {console.log(this.state.latitude)}

                    {
                        this.state.renderMap ?
                        <GoogleMapComponent isMarkerShown
                          latitude = {this.state.latitude}
                          longitude = {this.state.longitude}
                          returnPoints = {this.state.returnPoints}
                          /> : null
                    }


                  </div>
                  <div style={{marginLeft:'-500px',marginTop:'100px'}}>{returnPoints.map(item => (
                    <ul style={{listStyle:'none'}} key={item.id} >
                      <li id='locationContainer'>{item.name}</li>
                      <a id="googleExternal" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/place/' + item.latitude+','+item.longitude}>
                        </a>
                    </ul>
                ))}
                </div>
                  </div>
                </TabPane>
                  <TabPane tab="Day 2" key="2">
                    <div>
                    <div style={{marginLeft:'-500px',marginTop:'100px'}}>{returnPointsDay2.map(item => (
                      <ul style={{listStyle:'none'}} key={item.id}>
                        <li id='locationContainer'>{item.name}</li>
                        <a id="googleExternal" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/place/' + item.latitude+','+item.longitude}>
                        </a>
                      </ul>
                    ))}
                    </div>

                    <div id="mapBox" style={{position:'absolute', top:'4%',left:'32%'}}>

                    </div>
                    </div>
                  </TabPane>
                </Tabs>

            </div>
        )
    }
}


export default Results;
