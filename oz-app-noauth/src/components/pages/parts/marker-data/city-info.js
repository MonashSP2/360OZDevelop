import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

  render() {
    const {info} = this.props;
    console.log(info);
    var displayName = ''
    if (!info.group){
      displayName = `\n\nName: ${info.name} | \n\nAddress: ${info.address} | \n\nRating: ${info.rating}`;

    }else{
      displayName = `\n\nName: ${info.name} | \n\nAddress: ${info.address}`;
    }

    return (
      <div>
        <div style={{width:'200px', opacity:'0.8',fontSize:'12px'}}>
          {displayName}
        </div>
      </div>
    );
  }
}
