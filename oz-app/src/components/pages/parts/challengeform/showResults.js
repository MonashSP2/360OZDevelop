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
               resultArrayJson[key] = 'home_goods_store|store'
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
               resultArrayJson[key] = 'art'
             }else if (key === 'arts' && resultArrayJson[key] === false){
               resultArrayJson[key] = 'a'
             }
             if (key === 'history' && resultArrayJson[key] === true){
               resultArrayJson[key] = 'museum'
             }else if (key === 'history' && resultArrayJson[key] === false){
               resultArrayJson[key] = 'a'
             }
             if (key === 'attractions' && resultArrayJson[key] === true){
               resultArrayJson[key] = 'landmark'
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
           day1UrlParameter.push('shop'+'&'+resultArrayJson[key])}
          else if (key === 'mykiCard'){
             day1UrlParameter.push('convenience_store'+'&'+resultArrayJson[key])}
          else if (key === 'bankCard'){
              day1UrlParameter.push('bank'+'&'+resultArrayJson[key])}
          else if (key === 'goCampus'){
                day1UrlParameter.push('university'+'&'+resultArrayJson[key])}
          else if (key === 'groceries'){
              day2UrlParameter.push('store|supermarket'+'&'+resultArrayJson[key])}
          else if (key === 'beddings'){
              day2UrlParameter.push('store|home_goods_store|department_store'+'&'+resultArrayJson[key])}
          else if (key === 'cooking'){
              day2UrlParameter.push('store|home_goods_store'+'&'+resultArrayJson[key])}
          else if (key === 'clothing'){
              day2UrlParameter.push('clothing_store'+'&'+resultArrayJson[key])}
          else if (key === 'arts'){
              day3UrlParameter.push('arts')}
          else if (key === 'history'){
              day3UrlParameter.push('history')}
          else if (key === 'attractions'){
              day3UrlParameter.push('attraction')}
          else if (key === 'wildlife'){
              day3UrlParameter.push('wildlife')}
          }
           day1UrlParameter.push('a':'a')
           day1UrlParameter.push('a':'a')
           day1UrlParameter.push('a':'a')
           day1UrlParameter.push('a':'a')
           day2UrlParameter.push('a':'a')
           day2UrlParameter.push('a':'a')
           day2UrlParameter.push('a':'a')
           day2UrlParameter.push('a':'a')
           day3UrlParameter.push('a':'a')
           day3UrlParameter.push('a':'a')
           day3UrlParameter.push('a':'a')
           day3UrlParameter.push('a':'a')

console.log(day1UrlParameter);

           fetch('http://35.189.58.222/ondaychallenge2/' + day1UrlParameter[0] + '/'+ day1UrlParameter[1] + '/' + day1UrlParameter[2] + '/'+ day1UrlParameter[3] + '/'  + locationSplit[0] + '/' + locationSplit[1] + '/')
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
                  for (let i = 0; i < day1UrlParameter.length; i++) {
                    if (day1UrlParameter[i] === 'university&Monashclayton'){
                      json.push({
                        id:'1',
                        name:'Clayton Monash Campus',
                        latitude:-37.9150,
                        longitude:145.1300,
                        type:'Go to your campus'
                      })
                    }
                    if (day1UrlParameter[i] === 'university&Monashcaulfield'){
                        json.push({
                          id:'1',
                          name:'Caulfield Monash Campus',
                          latitude:-37.8770,
                          longitude:145.0443,
                          type:'Go to your campus'
                        })
                    }
                    if (day1UrlParameter[i] === 'university&Monashparkville'){
                        json.push({
                          id:'1',
                          name:'Parkville Monash Campus',
                          latitude:-37.7840,
                          longitude:144.9587,
                          type:'Go to your campus'
                        })
                    }
                    if (day1UrlParameter[i] === 'university&Monashpeninsula'){
                      json.push({
                        id:'1',
                        name:'Peninsula Monash Campus',
                        latitude:-38.1526,
                        longitude:145.1361,
                        type:'Go to your campus'
                      })
                    }
                  }
                  const alphabet = ['B','C','D','E']
                  console.log(json);
                  let counter = 0;
                  for (let i = 0; i < json.length; i++) {
                    if (json[i]){
                      if (json[i].type === 'shop'){
                        json[i].type = 'Get a local sim card at'
                        json[i].number = alphabet[counter]
                        counter += 1
                      }else if (json[i].type === 'convenience_store') {
                        json[i].type = 'Get a Myki card at'
                        json[i].number = alphabet[counter]
                        counter += 1
                      }else if (json[i].type === 'bank') {
                        json[i].type = 'Get a local bank card at'
                        json[i].number = alphabet[counter]
                        counter += 1
                      }else if (json[i].type === 'Go to your campus') {
                        json[i].number = alphabet[counter]
                        counter += 1
                      }
                      console.log(json[i].type);
                    }
                  }
                   this.setState({
                       isLoaded: true,
                       returnPoints: json,
                       renderMap: true,
                   });
                   this.setState({isloadingPage: false})

                   // Format start and end coordicates in to string for all places redirection
                   let tempReturnPoints = this.state.returnPoints;
                   let tempNavigate = ''
                   for (let i = 0; i < tempReturnPoints.length; i++) {
                     if (tempReturnPoints[i]){
                       tempNavigate += tempReturnPoints[i].latitude + ',' + tempReturnPoints[i].longitude + '/'
                     }
                   }
                   this.setState({day1Coordinates: tempNavigate})
               })

          //console.log(day2UrlParameter);
           fetch('http://35.189.58.222/ondaychallenge2/' +  day2UrlParameter[0] + '/'+ day2UrlParameter[1] +'/' + day2UrlParameter[2] +'/' +  day2UrlParameter[3] +'/'+ locationSplit[0] + '/' + locationSplit[1] + '/')
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

                  const alphabet = ['B','C','D','E']
                  console.log(json);
                  let counter = 0;
                  for (let i = 0; i < json.length; i++) {
                    if (json[i]){
                      if (json[i].type === 'store|supermarket'){
                        json[i].type = 'Buy groceries at'
                        json[i].number = alphabet[counter]
                        counter += 1
                      }else if (json[i].type === 'store|home_goods_store|department_store') {
                        json[i].type = 'Shop for beddings at'
                        json[i].number = alphabet[counter]
                        counter += 1
                      }else if (json[i].type === 'store|home_goods_store') {
                        json[i].type = 'Buy cooking needs at'
                        json[i].number = alphabet[counter]
                        counter += 1
                      }else if (json[i].type === 'clothing_store') {
                        json[i].type = 'Shop for clothing at'
                        json[i].number = alphabet[counter]
                        counter += 1
                      }
                      console.log(json[i].type);
                    }
                  }


                   this.setState({
                       isLoaded: true,
                       returnPointsDay2: json,
                   });

                   let tempReturnPointsDay2 = this.state.returnPointsDay2;
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

               http://35.189.58.222/day3challenge/arts/history/attracton/a/-37.884/145.0266

               fetch('http://35.189.58.222/day3challenge/' + day3UrlParameter[0] + '/'+ day3UrlParameter[1] +'/' + day3UrlParameter[2] +'/' +  day3UrlParameter[3] +'/'+ locationSplit[0] + '/' + locationSplit[1] + '/')
                   .then(res => res.json())
                   .then(json => {
                     console.log(json);
                      for (let i = 0; i < json.length; i++) {
                        if (json[i].length === 0){
                          delete json[i]
                        }
                        if (!json[i]){
                          delete json[i]
                        }
                       }
                       const alphabet = ['B','C','D','E']
                       console.log(json);
                       let counter = 0;
                       for (let i = 0; i < json.length; i++) {
                         if (json[i]){
                           console.log(json[i].types);
                           if (json[i].types === 'Visit art gallery at'){
                             json[i].type = 'Visit art gallery at'
                             json[i].number = alphabet[counter]
                             counter += 1
                           }else if (json[i].types === 'Visit museum at') {
                             json[i].type = 'Visit museum at'
                             json[i].number = alphabet[counter]
                             counter += 1
                           }else if (json[i].types === 'Visit landmark at') {
                             json[i].type = 'Visit landmark at'
                             json[i].number = alphabet[counter]
                             counter += 1
                           }else if (json[i].types === 'Visit wildlife at') {
                             json[i].type = 'Visit wildlife at'
                             json[i].number = alphabet[counter]
                             counter += 1
                           }
                           console.log(json[i].type);
                         }
                       }

                       this.setState({
                           isLoaded: true,
                           returnPointsDay3: json,
                       });
                       let tempReturnPointsDay3 = this.state.returnPointsDay3;
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
                   });

       };

       componentWillReceiveProps(nextProps) {
        this.setState({
          latitude: nextProps.latitude,
          longitude: nextProps.longitude,
        });
      }

      onClick = () => {
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
            <Tabs id="tabSection" style={{position:'absolute',left:'-41%',top:'8%',width:'93vw',height:'90vh',paddingLeft:'500px'}}
              tabBarGutter='0px' tabBarStyle={{border:'none'}} defaultActiveKey="1"  onChange={callback}>

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
                        <li id='locationContainer' key={item.id}>
                          <p style={{marginBottom:'0px'}}><span style={{fontWeight:'900'}}>{item.number}</span> - {item.type}</p><p>{item.name}</p>
                              <a id="googleExternal" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/place/' + item.latitude+','+item.longitude}>
                              </a>
                        </li>
                        ))}
                  </div>
                  <div style={{marginLeft:'-500px',marginTop:'90px'}}>
                      <li id='allLocationContainer'> Start Day 1 Journey
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
                        <li id='locationContainer' key={item.id}>
                          <p style={{marginBottom:'0px'}}><span style={{fontWeight:'900'}}>{item.number}</span> - {item.type}</p><p>{item.name}</p>
                              <a id="googleExternal" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/place/' + item.latitude+','+item.longitude}>
                              </a>
                        </li>
                        ))}
                  </div>
                  <div style={{marginLeft:'-500px',marginTop:'90px'}}>
                      <li id='allLocationContainer'>  Start Day 2 Journey
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
                        <li id='locationContainer' key={item._id}>
                          <p style={{marginBottom:'0px'}}><span style={{fontWeight:'900'}}>{item.number}</span> - {item.type}</p><p>{item.name}</p>
                              <a id="googleExternal" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/place/' + item.latitude+','+item.longitude}>
                              </a>
                        </li>
                        ))}
                  </div>
                  <div style={{marginLeft:'-500px',marginTop:'90px'}}>
                      <li id='allLocationContainer'>  Start Day 3 Journey
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
