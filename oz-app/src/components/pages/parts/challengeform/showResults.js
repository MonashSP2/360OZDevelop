import React, {Component} from 'react';
import jsondata from '../population_15.geojson';
import '../map.css';
import {json as requestJson} from 'd3-request';
import './showResults.css';
import { Tabs } from 'antd';
import GoogleMapComponent from './googleMapComponent';
import ReactLoading from 'react-loading';
import { Redirect } from 'react-router';

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
            returnPointsDay3: [],
            renderMap:false,
            renderMapDay2:false,
            renderMapDay3:false,
            isloadingPage: true,
            day1Coordinates:'',
            day2Coordinates:'',
            day3Coordinates:'',
            fireRedirect: false,
        }
    };


    async componentDidMount() {
      console.log(this.state.isloadingPage)
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
           console.log(results);
           let resultArrayJson = JSON.parse(results)
           let key;

           for (key in resultArrayJson) {
             if (key === 'mykiCard' && resultArrayJson[key] === true){
               resultArrayJson[key] = '711'
             }else if (key === 'mykiCard' && resultArrayJson[key] === false){
               resultArrayJson[key] = 'a'
             }
             if (key === 'groceries' && resultArrayJson[key] === true){
               resultArrayJson[key] = 'groceries'
             }else if (key === 'groceries' && resultArrayJson[key] === false){
               resultArrayJson[key] = 'a'
             }
             if (key === 'beddings' && resultArrayJson[key] === true){
               resultArrayJson[key] = 'beddings'
             }else if (key === 'beddings' && resultArrayJson[key] === false){
               resultArrayJson[key] = 'a'
             }
             if (key === 'cooking' && resultArrayJson[key] === true){
               resultArrayJson[key] = 'cooking'
             }else if (key === 'cooking' && resultArrayJson[key] === false){
               resultArrayJson[key] = 'a'
             }
             if (key === 'clothing' && resultArrayJson[key] === true){
               resultArrayJson[key] = 'clothing'
             }else if (key === 'clothing' && resultArrayJson[key] === false){
               resultArrayJson[key] = 'a'
             }
             if (key === 'arts' && resultArrayJson[key] === true){
               resultArrayJson[key] = 'art_gallery'
             }else if (key === 'arts' && resultArrayJson[key] === false){
               resultArrayJson[key] = 'a'
             }
             if (key === 'history' && resultArrayJson[key] === true){
               resultArrayJson[key] = 'museum'
             }else if (key === 'history' && resultArrayJson[key] === false){
               resultArrayJson[key] = 'a'
             }
             if (key === 'attractions' && resultArrayJson[key] === true){
               resultArrayJson[key] = 'point_of_interest'
             }else if (key === 'attractions' && resultArrayJson[key] === false){
               resultArrayJson[key] = 'a'
             }
             if (key === 'wildlife' && resultArrayJson[key] === true){
               resultArrayJson[key] = 'wildlife'
             }else if (key === 'wildlife' && resultArrayJson[key] === false){
               resultArrayJson[key] = 'a'
             }

           }
         console.log(resultArrayJson);
         let day1UrlParameter =[];
         let day2UrlParameter =[];
         let day3UrlParameter =[];
         for (key in resultArrayJson) {
          if (key === 'simCard'){
           day1UrlParameter.push(resultArrayJson[key])}
          else if (key === 'mykiCard'){
             day1UrlParameter.push(resultArrayJson[key])}
          else if (key === 'bankCard'){
              day1UrlParameter.push(resultArrayJson[key])}
          else if (key === 'goCampus'){
                day1UrlParameter.push(resultArrayJson[key])}
          else if (key === 'groceries'){
              day2UrlParameter.push(resultArrayJson[key])}
          else if (key === 'beddings'){
              day2UrlParameter.push(resultArrayJson[key])}
          else if (key === 'cooking'){
              day2UrlParameter.push(resultArrayJson[key])}
          else if (key === 'clothing'){
              day2UrlParameter.push(resultArrayJson[key])}
          else if (key === 'arts'){
              day3UrlParameter.push(resultArrayJson[key])}
          else if (key === 'history'){
              day3UrlParameter.push(resultArrayJson[key])}
          else if (key === 'attractions'){
              day3UrlParameter.push(resultArrayJson[key])}
          else if (key === 'wildlife'){
              day3UrlParameter.push(resultArrayJson[key])}
          }

           day1UrlParameter.push('a')
           day1UrlParameter.push('a')
           day1UrlParameter.push('a')
           day1UrlParameter.push('a')
           day2UrlParameter.push('a')
           day2UrlParameter.push('a')
           day2UrlParameter.push('a')
           day2UrlParameter.push('a')
           day3UrlParameter.push('a')
           day3UrlParameter.push('a')
           day3UrlParameter.push('a')
           day3UrlParameter.push('a')

           console.log(day3UrlParameter);
           fetch('http://35.189.58.222/ondaychallenge/' + day1UrlParameter[0] + '/a/'+ day1UrlParameter[1] + '/' + day1UrlParameter[2] + '/'+ day1UrlParameter[3] + '/'  + locationSplit[0] + '/' + locationSplit[1] + '/')
               .then(res => res.json())
               .then(json => {
                 console.log(json,json.length);
                 for (let i = 0; i < json.length; i++) {
                   if (json[i].length === 0){
                     delete json[i]
                   }
                   if (!json[i]){
                     delete json[i]
                   }
                  }
                  // Manual input the Campus coordicates incase out of API search region
                  for (let i = 0; i < day1UrlParameter.length; i++) {
                    if (day1UrlParameter[i] === 'Monashclayton'){
                      console.log(day1UrlParameter[i]);
                      json.push({
                        id:'1',
                        name:'Clayton Monash Campus',
                        latitude:-37.9150,
                        longitude:145.1300
                      })
                    }
                    if (day1UrlParameter[i] === 'Monashcaulfield'){
                        console.log(day1UrlParameter[i]);
                        json.push({
                          id:'1',
                          name:'Caulfield Monash Campus',
                          latitude:-37.8770,
                          longitude:145.0443
                        })
                    }
                    if (day1UrlParameter[i] === 'Monashparkville'){
                        console.log(day1UrlParameter[i]);
                        json.push({
                          id:'1',
                          name:'Parkville Monash Campus',
                          latitude:-37.7840,
                          longitude:144.9587
                        })
                    }
                    if (day1UrlParameter[i] === 'Monashpeninsula'){
                      console.log(day1UrlParameter[i]);
                      json.push({
                        id:'1',
                        name:'Peninsula Monash Campus',
                        latitude:-38.1526,
                        longitude:145.1361
                      })
                    }
                  }
                  //console.log(json);

                   this.setState({
                       isLoaded: true,
                       returnPoints: json,
                       renderMap: true,
                   });
                   this.setState({isloadingPage: false})

                   // Format start and end coordicates in to string for all places redirection

                   let tempReturnPoints = this.state.returnPoints;
                   console.log(tempReturnPoints);
                   let tempNavigate = ''
                   for (let i = 0; i < tempReturnPoints.length; i++) {
                     if (tempReturnPoints[i]){
                       tempNavigate += tempReturnPoints[i].latitude + ',' + tempReturnPoints[i].longitude + '/'
                     }
                   }
                   this.setState({day1Coordinates: tempNavigate})
               })

          //console.log(day2UrlParameter);
           fetch('http://35.189.58.222/ondaychallenge/' + '/a/'+ day2UrlParameter[0] + '/'+ day2UrlParameter[1] +'/' + day2UrlParameter[2] +'/' +  day2UrlParameter[3] +'/'+ locationSplit[0] + '/' + locationSplit[1] + '/')
               .then(res => res.json())
               .then(json => {

                 for (let i = 0; i < json.length; i++) {
                   if (json[i].length === 0){
                     delete json[i]
                   }
                   if (!json[i]){
                     delete json[i]
                   }
                  }

                   this.setState({
                       isLoaded: true,
                       returnPointsDay2: json,
                   });


                   let tempReturnPointsDay2 = this.state.returnPointsDay2;
                   console.log(tempReturnPointsDay2);
                   if (tempReturnPointsDay2.length>0){
                     this.setState({renderMapDay2: true})
                   }

                   let tempNavigate = ''
                   for (let i = 0; i < tempReturnPointsDay2.length; i++) {
                     if (tempReturnPointsDay2[i]){
                       tempNavigate += tempReturnPointsDay2[i].latitude + ',' + tempReturnPointsDay2[i].longitude + '/'
                     }
                   }
                   this.setState({day2Coordinates: tempNavigate})
               });

               fetch('http://35.189.58.222/ondaychallenge/' + '/a/'+ day3UrlParameter[0] + '/'+ day3UrlParameter[1] +'/' + day3UrlParameter[2] +'/' +  day3UrlParameter[3] +'/'+ locationSplit[0] + '/' + locationSplit[1] + '/')
                   .then(res => res.json())
                   .then(json => {

                      for (let i = 0; i < json.length; i++) {
                        if (json[i].length === 0){
                          delete json[i]
                        }
                        if (!json[i]){
                          delete json[i]
                        }
                       }
                       this.setState({
                           isLoaded: true,
                           returnPointsDay3: json,
                       });
                       let tempReturnPointsDay3 = this.state.returnPointsDay3;
                       console.log(tempReturnPointsDay3);
                       if (tempReturnPointsDay3.length>0){
                         this.setState({renderMapDay3: true})
                       }

                       let tempNavigate = ''
                       for (let i = 0; i < tempReturnPointsDay3.length; i++) {
                         if (tempReturnPointsDay3[i]){
                           tempNavigate += tempReturnPointsDay3[i].latitude + ',' + tempReturnPointsDay3[i].longitude + '/'
                         }
                       }
                       this.setState({day3Coordinates: tempNavigate})
                       console.log(this.state.day3Coordinates);
                   });

       };

       componentWillReceiveProps(nextProps) {
        this.setState({
          latitude: nextProps.latitude,
          longitude: nextProps.longitude,
        });
      }

      onClick = () => {
        console.log('clicked');
        this.setState({fireRedirect:true});
      }


    render() {
        const {returnPoints, returnPointsDay2,returnPointsDay3, day1Coordinates,day2Coordinates,day3Coordinates} = this.state;

        return (
        this.state.isloadingPage ?
        <div style={{position:'absolute',top:'40%',left:'35%',height:'80vh',width:'40vw'}}>
          <ReactLoading type='spinningBubbles' color='#5F84ED' height={'20%'} width={'20%'} />
          <h4 id='homeTitle'>Loading ...</h4>
        </div>
        :<div>
        <div id='tabBackgroud'></div>
        <div id='emailBackgroud'>
          <button id='emailPlanButton' onClick={this.onClick}>Email me the plan</button>

            {this.state.fireRedirect && (
            <Redirect to={{pathname:'/email',
              state: {
                day1: this.state.returnPoints,
                day2: this.state.returnPointsDay2,
                day3: this.state.returnPointsDay3 } }}/>
          )}
        </div>
            <Tabs style={{position:'absolute',left:'-41%',top:'8%',width:'93vw',height:'90vh',paddingLeft:'500px'}}
              tabBarGutter='100px' tabBarStyle={{border:'none'}} defaultActiveKey="1"  onChange={callback}>


                <TabPane tab="Day 1" key="1" >
                  <div>
                    <div id="mapBox" style={{position:'absolute', top:'4%',left:'32%', width:'800px'}}>
                      {
                          this.state.renderMap ?
                          <GoogleMapComponent isMarkerShown
                            latitude = {this.state.latitude}
                            longitude = {this.state.longitude}
                            returnPoints = {this.state.returnPoints}
                            /> :  <div>
                            No plan for Day 1
                            </div>
                      }
                    </div>
                    <div style={{marginLeft:'-500px',marginTop:'100px'}}>{returnPoints.map(item => (
                        <li id='locationContainer' key={item.id}>{
                            item.name
                              }
                              <a id="googleExternal" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/place/' + item.latitude+','+item.longitude}>
                              </a>
                        </li>
                        ))}
                  </div>
                  <div style={{marginLeft:'-500px',marginTop:'90px'}}>
                      <li id='allLocationContainer'> Navigate to All (Day 1)
                        <a id="allGoogleExternal" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/dir/' + day1Coordinates}>
                        </a>
                      </li>

                  </div>
                </div>
              </TabPane>
                <TabPane tab="Day 2" key="2">
                  <div>
                    <div id="mapBox" style={{position:'absolute', top:'4%',left:'32%', width:'800px'}}>
                      {
                          this.state.renderMapDay2 ?
                          <GoogleMapComponent isMarkerShown
                            latitude = {this.state.latitude}
                            longitude = {this.state.longitude}
                            returnPointsDay2 = {this.state.returnPointsDay2}
                            /> : <div>
                            No plan for Day 2
                            </div>
                      }
                    </div>
                    <div style={{marginLeft:'-500px',marginTop:'100px'}}>{returnPointsDay2.map(item => (
                        <li id='locationContainer' key={item.id}>{
                            item.name
                              }
                              <a id="googleExternal" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/place/' + item.latitude+','+item.longitude}>
                              </a>
                        </li>
                        ))}
                  </div>
                  <div style={{marginLeft:'-500px',marginTop:'90px'}}>
                      <li id='allLocationContainer'> Navigate to All (Day 2)
                        <a id="allGoogleExternal" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/dir/' + day2Coordinates}>
                        </a>
                      </li>

                  </div>
                </div>
                </TabPane>
                <TabPane tab="Day 3" key="3">
                  <div>
                    <div id="mapBox" style={{position:'absolute', top:'4%',left:'32%', width:'800px'}}>
                      {
                          this.state.renderMapDay2 ?
                          <GoogleMapComponent isMarkerShown
                            latitude = {this.state.latitude}
                            longitude = {this.state.longitude}
                            returnPointsDay3 = {this.state.returnPointsDay3}
                            /> : <div>
                            No plan for Day 3
                            </div>
                      }
                    </div>
                    <div style={{marginLeft:'-500px',marginTop:'100px'}}>{returnPointsDay3.map(item => (
                        <li id='locationContainer' key={item.id}>{
                            item.name
                              }
                              <a id="googleExternal" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/place/' + item.latitude+','+item.longitude}>
                              </a>
                        </li>
                        ))}
                  </div>
                  <div style={{marginLeft:'-500px',marginTop:'90px'}}>
                      <li id='allLocationContainer'> Navigate to All (Day 3)
                        <a id="allGoogleExternal" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/dir/' + day3Coordinates}>
                        </a>
                      </li>

                  </div>
                </div>
                </TabPane>
              </Tabs>

          </div>
        )
    }
}


export default Results;
